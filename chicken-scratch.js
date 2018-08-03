import { Style } from './Style.js';
import { getStrokes } from './characters.js';

// Create style dictionary and add default style
let styleDictionary = new Map(); 
styleDictionary.set('chicken-scratch',new Style('chicken-scratch',{}))

// A map containing all elements with a chicken-scratch class
let managedElements = new Map(); 

// Expose public methods
export const ChickenScratch = {
  registerStyle: registerStyle,
  apply: apply,
  addStyleToEl: addStyleToEl,
  removeStyleFromEl: removeStyleFromEl
};

function registerStyle(name, style) {
  if (name == 'chicken-scratch' || name == 'chickenScratch' ) return; // bail if user provides bad name

  // Create and register new style
  let newStyle = new Style(name, style);
  
  // styleDictionary.set(newStyle.camelName, newStyle);
  styleDictionary.set(newStyle.name, newStyle);
}

function apply() {
  styleDictionary.forEach(style => {
    let originalElements = Array.from(document.getElementsByClassName(style.name));
  
    // go through each element
    originalElements.forEach((originalElement) => {

      // get text content, process it, store the style, generate transforms, save it to map
      let managedElement = processElement(originalElement, style);

      // draw text on canvases
      addCanvasesAndDraw(originalElement, managedElement);
    });
  });
}

function addStyleToEl(styleName, element) {
  // If element already has a csId
  if (element.dataset.csId) {
    
    // get managed element & new style
    let managedEl = managedElements.get(element.dataset.csId);
    let style = styleDictionary.get(styleName);
    
    // change relevant props of managed element to match new style
    managedEl.styleName = style.name;
    managedEl.csId = style.newId;
    managedEl.transforms = generateStrokeTransforms(style, managedEl.words); 
    
    addCanvasesAndDraw(element, managedEl);
    
  } else {
    // get style, process new el and draw it
    let style = styleDictionary.get(styleName);
    let managedElement = processElement(element, style);
    addCanvasesAndDraw(element, managedElement);
  }
}

function removeStyleFromEl(element) {
  if (!element.dataset.csId) return; // bail if element has no csId
    
  // get element
  let managedEl = managedElements.get(element.dataset.csId);

  // remove item from managedElement collection, and
  // remove data-cs-id attr from element
  managedElements.delete(managedEl.csId);
  element.removeAttribute('data-cs-id');

  // revert to initial html
  element.innerHTML = managedEl.innerHTML;
}

function processElement(originalElement, style) {
  let managedElement = {}; 
  managedElement.originalText = originalElement.textContent;
  managedElement.words = cleanText(originalElement.textContent).split(' ');
  managedElement.innerHTML = originalElement.innerHTML;
  managedElement.styleName = style.name;
  managedElement.csId = style.newId;
  managedElement.transforms = generateStrokeTransforms(style, managedElement.words); 
  managedElements.set(managedElement.csId, managedElement);
  
  return managedElement;
}

function addCanvasesAndDraw(originalElement, managedElement) {
  let style = styleDictionary.get(managedElement.styleName);
  let { styleName, words, transforms, csId } = managedElement;
  
  // Clean out original element and give it a csId
  originalElement.innerHTML = '';
  originalElement.dataset.csId = csId;
  
  let charWidth = style.charWidth;
  
  words.forEach((word, index) => {
    let wordSize = style.calculateWordSize(word); 
    let canvasSize = style.calculateCanvasSize(word);
    
    // create new canvas
    let newCanvas = document.createElement('canvas');
    newCanvas.dataset.csId = managedElement.csId + '-canvas-' + index;
    newCanvas.width = canvasSize.x;
    newCanvas.height = canvasSize.y;

    // set canvas margins to produce appropriate word spacing and line height
    let xMargin = ((charWidth / 2) - ((canvasSize.x - wordSize.x) / 2)) + 'px';
    let yMargin = (0 - ((canvasSize.y - wordSize.y) / 2)) + 'px';
    newCanvas.style.margin = yMargin + ' ' + xMargin;
    
    drawWord(newCanvas, style, word, transforms[index]);
    originalElement.appendChild(newCanvas);
    originalElement.style.visibility = 'visible';
  });
}

function drawWord(canvas, style, word, transforms) {
  let ctx = canvas.getContext('2d');
  applyStyleToContext(style, ctx);
  
  let baseOffset = style.baseOffset;
  
  for (let charIndex = 0; charIndex < word.length; charIndex++) {
    // get char and strokes
    let char = word.charAt(charIndex);
    let strokes = getStrokes(char);

    let charOffset = calculateCharOffsetInWord(style, charIndex);
    
    // go through each stroke
    strokes.forEach((stroke, strokeIndex) => {
      
      // resize stroke based on style size
      let resizedStroke = JSON.parse(JSON.stringify(stroke));
      resizeStroke(resizedStroke,style.size / 48);

      // get char and stroke offsets
      let strokeOffset = calculateStrokeOffset(style, resizedStroke);
      let randomOffset = transforms[charIndex][strokeIndex].translation;

      // calculate translation offset
      let contextTranslationOffset = {
        x: baseOffset.x + charOffset.x + strokeOffset.x + randomOffset.x + (style.strokeWidth / 2),
        y: baseOffset.y + charOffset.y + strokeOffset.y + randomOffset.y + (style.strokeWidth / 2)
      };
      
      // apply transforms to context
      ctx.save();
      ctx.translate(contextTranslationOffset.x, contextTranslationOffset.y);
      ctx.rotate(transforms[charIndex][strokeIndex].rotation);
      
      // generate additional offset to center stroke around new origin
      let newOffset = {
        x: 0 - strokeOffset.x,
        y: 0 - strokeOffset.y
      };
      
      drawStroke(ctx, style, resizedStroke, newOffset);
      
      ctx.restore();
    });
  }
}

function generateStrokeTransforms(style, text) {
  let specs = [];
  
  // go through each word in the array
  text.forEach((word, wordIndex) => {
    
    // add an empty array of chars for this word
    specs.push([]);
    
    // go through each character in the word
    for (let charIndex = 0; charIndex < word.length; charIndex++) {

      // add an empty array of strokes for this char
      specs[wordIndex].push([]);

      let strokeArray = getStrokes(word.charAt(charIndex));
      
      // go through each stroke in the strokeArray
      for (let strokeIndex = 0; strokeIndex < strokeArray.length; strokeIndex++) {
        
        // and generate a random rotation and translation
        specs[wordIndex][charIndex].push({
          rotation: style.generateRandomRotation(),
          translation: style.generateRandomTranslation()
        });    
      }
    }
  });
  
 return specs;  
}

function applyStyleToContext(style, ctx) {
  ctx.strokeStyle = style.color;
  ctx.lineWidth = style.strokeWidth;
  
  if (style.shadowVisibility) {
    ctx.shadowColor = style.shadowColor;
    ctx.shadowOffsetX = style.shadowOffsetX;
    ctx.shadowOffsetY = style.shadowOffsetY;
    ctx.shadowBlur = style.shadowBlur;
  }
}

function cleanText(text) {
    let regex1 = /[^\d\w\s`~!@#$%&*()_=+{}|:;"',<.>?/\\\[\]\^]/g; 
    text = text.replace(regex1,'');
  
    // reduce each group of consecutive whitespace chars down to one single space
    let regex2 = /\s+/;
    text = text.replace(regex2,' ');
    
    return text;
}

function drawStroke(context, style, stroke, offset) {
  // 1 Draw main stroke
  context.beginPath();
    
  if (Array.isArray(stroke)) {
    stroke.forEach(subStroke => {
      draw(context, subStroke, offset);
    });
  } else {
    draw(context, stroke, offset);
  }
  
  context.stroke();
  context.closePath();
  
  // 2 Add linecaps if necessary
  if (style.lineCap != 'butt' && !stroke.noLineCaps) {
    if (!Array.isArray(stroke)) {
      drawStartingLinecap(context, style, stroke, offset);  
      drawEndingLinecap(context, style, stroke, offset);  
    } else {
      drawStartingLinecap(context, style, stroke[0], offset);
      drawEndingLinecap(context, style, stroke[stroke.length - 1], offset);
    }
  }

  // 3 Redraw main stroke if necessary
  if (style.lineCap != 'butt' && style.shadowVisibility) {
    // hide shadow
    context.shadowBlur = 0;
    context.shadowColor = '';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // draw main stroke
    context.beginPath();
    if (Array.isArray(stroke)) {
      stroke.forEach(subStroke => {
        draw(context, subStroke, offset);
      });
    } else {
      draw(context, stroke, offset);
    }
    context.stroke();
    context.closePath();
    
    // reset shadow
    context.shadowBlur = style.shadowBlur;
    context.shadowColor = style.shadowColor;
    context.shadowOffsetX = style.shadowOffsetX;
    context.shadowOffsetY = style.shadowOffsetY;
  }
}

function draw(context, subject, offset) {
  if (subject.type == 'line') {
    context.moveTo(subject.start.x + offset.x, subject.start.y + offset.y);
    context.lineTo(subject.end.x + offset.x,subject.end.y + offset.y);
  } else if (subject.type == 'ellipse') {
    drawEllipse(context, subject.bounds.x1 + offset.x, subject.bounds.y1 + offset.y, subject.bounds.x2 + offset.x, subject.bounds.y2 + offset.y, subject.start, subject.end, subject.direction);
  }
}

// Modified from epistemex's comment on
// stackoverflow.com/questions/21594756/drawing-circle-ellipse-on-html5-canvas-using-mouse-events
function drawEllipse(ctx, x1, y1, x2, y2, start, end, direction) {
  var radiusX = (x2 - x1) * 0.5,
      radiusY = (y2 - y1) * 0.5,
      centerX = x1 + radiusX,
      centerY = y1 + radiusY,
      step = 0.05,
      a = start,
      pi2 = Math.PI * 2 - step;

  ctx.lineWidth *= .5;

  ctx.moveTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));

  if (direction === 'clockwise') {
    if (end < start) {
      end += Math.PI * 2;
    }
    
    for (; a < end; a += step) {
      ctx.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));  
    }
  } else if (direction === 'counter-clockwise') {
      if (end > start) {
        end -= Math.PI * 2;
      }

    for (; a > end ; a -= step) {
      ctx.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
    }
  }
  
  ctx.lineWidth *= 2;
}

function drawStartingLinecap(context, style, stroke, offset) {
  context.lineCap = style.lineCap;
  context.beginPath();
  let lineCapAnchors = getLineCapAnchors('start', stroke, offset);
  context.moveTo(lineCapAnchors.x1, lineCapAnchors.y1);
  context.lineTo(lineCapAnchors.x2, lineCapAnchors.y2);
  context.stroke();
  context.closePath();
  context.lineCap = 'butt';
}

function drawEndingLinecap(context,style,stroke,offset) {
  context.lineCap = style.lineCap;
  context.beginPath();
  let lineCapAnchors = getLineCapAnchors('end',stroke, offset);
  context.moveTo(lineCapAnchors.x1, lineCapAnchors.y1);
  context.lineTo(lineCapAnchors.x2, lineCapAnchors.y2);
  context.stroke();
  context.closePath();
  context.lineCap = 'butt';
}

function calculateCharOffsetInWord(style, charIndex) {
  return {
    x: charIndex * style.charWidth,
    y: style.size * ((style.lineHeight - 1) / 2)
  };
}

function calculateStrokeOffset(style, stroke) {
  let { strokeWidth } = style;
  
  if (!Array.isArray(stroke)) {
    if (stroke.type === 'line') {
      return {
        x: (stroke.start.x + stroke.end.x) / 2,
        y: (stroke.start.y + stroke.end.y) / 2
      };
    } else if (stroke.type === 'ellipse') {
      return {
        x: (stroke.bounds.x1 + stroke.bounds.x2) / 2,
        y: (stroke.bounds.y1 + stroke.bounds.y2) / 2
      };
    }
  } else {
    
    let allX = [];
    let allY = [];
    
    stroke.forEach(subStroke => {
      if (subStroke.type === 'line') {
        allX.push(subStroke.start.x);
        allX.push(subStroke.end.x);
        allY.push(subStroke.start.y);
        allY.push(subStroke.end.y);
      } else if (subStroke.type === 'ellipse') {
        allX.push(subStroke.bounds.x1);
        allX.push(subStroke.bounds.x2);
        allY.push(subStroke.bounds.y1);
        allY.push(subStroke.bounds.y2);      }
    });
    
    // NOTE: Spread operator necessary because
    // Math.max() and Math.min() don't expect arrays
    return {
      x: (Math.max(...allX) + Math.min(...allX)) / 2,
      y: (Math.max(...allY) + Math.min(...allY)) / 2
    };
  }
}

function getLineCapAnchors(startOrEnd, stroke, offset) {
  if (stroke.type == 'ellipse') {
    
    return getEllipseLineCapAnchors(startOrEnd, stroke, offset);
    
  } else if (stroke.type == 'line') {
      let xChange;
      let yChange;
      let slope;

    if (startOrEnd == 'start') {
      if (stroke.start.x < stroke.end.x) {
        xChange = 0.1;
      } else if (stroke.start.x > stroke.end.x) {
        xChange = -0.1;
      } else {
        xChange = 0;
      }

      if (xChange === 0) {
        if (stroke.start.y < stroke.end.y) {
          yChange = 0.1;
        } else {
          yChange = -0.1;
        }
      } else {
        slope = (stroke.start.y - stroke.end.y) / (stroke.start.x - stroke.end.x);

        yChange = xChange * slope;
      }

      return {
        x1: offset.x + stroke.start.x,
        y1: offset.y + stroke.start.y,
        x2: offset.x + stroke.start.x + xChange,
        y2: offset.y + stroke.start.y + yChange
      };
    } else if (startOrEnd == 'end') {
      if (stroke.start.x < stroke.end.x) {
        xChange = -0.1;
      } else if (stroke.start.x > stroke.end.x) {
        xChange = 0.1;
      } else {
        xChange = 0;
      }
      
      if (xChange === 0) {
        if (stroke.start.y < stroke.end.y) {
          yChange = -0.1;
        } else {
          yChange = 0.1;
        }
      } else {
        slope = (stroke.start.y - stroke.end.y) / (stroke.start.x - stroke.end.x);
        
        yChange = xChange * slope;
      }
    
      return {
        x1: offset.x + stroke.end.x,
        y1: offset.y + stroke.end.y,
        x2: offset.x + stroke.end.x + xChange,
        y2: offset.y + stroke.end.y + yChange
      };
    }
  }
}

function getEllipseLineCapAnchors(startOrEnd, stroke, offset) {
  if (startOrEnd == 'start') {
    return getEllipseStartingAnchor(stroke, offset);   
  } else if (startOrEnd == 'end') {
    return getEllipseEndingAnchor(stroke, offset);
  }
}

function getEllipseStartingAnchor(stroke,offset) {
  var radiusX = (stroke.bounds.x2 - stroke.bounds.x1) * 0.5,
      radiusY = (stroke.bounds.y2 - stroke.bounds.y1) * 0.5,
      centerX = stroke.bounds.x1 + radiusX,
      centerY = stroke.bounds.y1 + radiusY;

  let step = .05; // test this
  let newAngle;
  if (stroke.direction == 'clockwise') {
    newAngle = stroke.start + step;
  } else if (stroke.direction == 'counter-clockwise') {
    newAngle = stroke.start - step;
  }
  
  return {
    x1: centerX + radiusX * Math.cos(stroke.start) + offset.x,
    y1: centerY + radiusY * Math.sin(stroke.start) + offset.y,
    x2: centerX + radiusX * Math.cos(newAngle) + offset.x,
    y2: centerY + radiusY * Math.sin(newAngle) + offset.y
  };
}

function getEllipseEndingAnchor(stroke,offset) {
  var radiusX = (stroke.bounds.x2 - stroke.bounds.x1) * 0.5,
      radiusY = (stroke.bounds.y2 - stroke.bounds.y1) * 0.5,
      centerX = stroke.bounds.x1 + radiusX,
      centerY = stroke.bounds.y1 + radiusY;

  let step = .05;
  let newAngle;
  
  if (stroke.direction == 'clockwise') {
    newAngle = stroke.end - step;
  } else if (stroke.direction == 'counter-clockwise') {
    newAngle = stroke.end + step;
  }
    
  return {
    x1: centerX + radiusX * Math.cos(stroke.end) + offset.x,
    y1: centerY + radiusY * Math.sin(stroke.end) + offset.y,
    x2: centerX + radiusX * Math.cos(newAngle) + offset.x,
    y2: centerY + radiusY * Math.sin(newAngle) + offset.y
  };
}

function applySizeRatio(value, ratio) {
  return ((value - 1) * ratio) + 1;
}

function resizeStroke(stroke, sizeRatio) {
  if (Array.isArray(stroke)) {
    stroke.forEach(subStroke => {
      if (subStroke.type === 'line') {
        resizeLine(subStroke,sizeRatio);
      } else if (subStroke.type === 'ellipse') {
        resizeEllipse(subStroke,sizeRatio);
      }
    });
  } else {
    if (stroke.type === 'line') {
      resizeLine(stroke,sizeRatio);
    } else if (stroke.type === 'ellipse') {
      resizeEllipse(stroke,sizeRatio);
    }
  }
}

function resizeLine(line, sizeRatio) {
  for (let value in line.start) {
    line.start[value] = applySizeRatio(line.start[value], sizeRatio);
  }

  for (let value in line.end) {
    line.end[value] = applySizeRatio(line.end[value], sizeRatio);
  }        
}

function resizeEllipse(ellipse, sizeRatio) {
  for (let value in ellipse.bounds) {
    ellipse.bounds[value] = applySizeRatio(ellipse.bounds[value], sizeRatio);
  }
}