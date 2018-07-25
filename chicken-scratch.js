// Create style map and load default style
const styleDictionary = new Map();

styleDictionary.set('chickenScratch',chickenScratch);
styleDictionary.set('constructionPaper',constructionPaper);
let targetEls = {}; 
let targetElsHTML = new Map();
let targetElsTextContent = new Map();

// THIS SHOULD BE PUBLIC
function registerStyle(name, style) {
  // check for valid style name
  if (name == 'chicken-scratch' || name == 'chickenScratch' ) return; // bail if user provides bad name
  
  // fill out any missing parts of style
  completeStyle(name, style);
  
  // When done, register style
  styleDictionary.set(style.camelName, style);
  
  console.log(styleDictionary.get(style.camelName));
  
  console.log(styleDictionary.entries());
}

function completeStyle(name, style) {
  // Get default style
  let defaultStyle = styleDictionary.get('chickenScratch');

  // Go through each key in the default style
  // and validate it on the test style
  for (let key in defaultStyle) {
    // debug
    // console.log('checking ',key);

    // if property is invalid (i.e., not set or
    // set to an inappropriate value)
    if (!propertyIsValid(style, key)) {
      
      // ...set it to the value of the default style
      style[key] = defaultStyle[key];
    }
  }
  
  style['name'] = name;
  style['camelName'] = kebabToCamel(name);
}

function propertyIsValid(style, propName) {
  if (!style.hasOwnProperty(propName)) return false;

  switch(propName) {
    case 'lineWidth':
      if (typeof style[propName] === 'number' && style[propName] >= 2) return true;
      break;
    case 'size':
      if (typeof style[propName] === 'number' && style[propName] >= 1) return true;
      break;
    case 'lineHeight':
    case 'maxRotation':
    case 'maxTranslation':
    case 'shadowBlur':
      if (typeof style[propName] === 'number' && style[propName] >= 0) return true;
      break;
    case 'letterSpacing':
      if (typeof style[propName] === 'number' && style[propName] >= -1) return true;
      break;
    case 'lineCap':
      if (typeof style[propName] === 'string' && style[propName] == 'square' || style[propName] == 'round' || style[propName] == 'butt') return true;
      break;
    case 'shadowOffsetX':
    case 'shadowOffsetY':
      if (typeof style[propName] === 'number') return true;
      break;
    case 'shadowDraw':
      if (typeof style[propName] === 'boolean') return true;
      break;
    case 'color':
    case 'shadowColor':
      if (colorIsValid(style[propName])) return true;
      break;
  }

  return false;
}

// I'm sure there's a better way to implement
// this, probably with Regexp, but this was easier
function kebabToCamel(kebab) {
  // find all hyphens
  let index = 0;
  let hyphenLocations = [];
  
  while(kebab.indexOf('-',index) != '-1') {
    
    hyphenLocations.push(kebab.indexOf('-',index));
    
    index = hyphenLocations[hyphenLocations.length - 1] + 1;
  }
  
  if (hyphenLocations.length == 0) return kebab; // bail if there are no hyphens
  
  // capitalize letters following hyphens
  hyphenLocations.forEach((location, index) => {
    if (location != kebab.length - 1) {
      kebab = kebab.replace(kebab.substr(location,2), '-' + kebab.substr(location + 1, 1).toUpperCase());
    }
  });
  
  // remove all hyphens
  kebab = kebab.replace(/-/g,'');

  return kebab;
}


// ALL OF THESE FUNCTIONS SHOULD BE PRIVATE AND APPLY SHOULD BE CALLED AUTOMATICALLY ON PAGE LOAD
// This function replaces the innerHTML of every .chicken-scratch
// element with a canvas element holding the original textContent of the element
function apply() {
  // 1 FETCH ALL ELEMENTS TO TARGET
  // Fetch all els with .chicken-scratch OR a user custom class
  styleDictionary.forEach(style => {
    targetEls[style.camelName] = Array.from(document.getElementsByClassName(style.name));
  });
  
  console.log('after fetching style, targetEls =',targetEls);
  // 2 PROCESS EACH ELEMENT
  let index;
  
  // go through each style
  for (let group in targetEls) {
    index = 0;
    
    console.log('currently processing elements with style:',group);
    
    // Get style corresponding to this group
    let style = styleDictionary.get(group);
    
    // go through each element bearing that style
    targetEls[group].forEach(element => {
      
      console.log('\tcurrently processing',element);
      
      // Give element ID if necessary
      if (!element.id) {
        element.id = style.name + '-' + index;
        index++;
      }
      
      // Store element in map (for future retrieval, if necessary)
      targetElsHTML.set(element.id,element);
      
      // Store element's textContent in map
      targetElsTextContent.set(element.id,element.textContent);
      
      // Replace element with a canvas container 
      let canvasContainer = document.createElement('div');
      canvasContainer.style.width = '100%';
      canvasContainer.style.height = '100%';

      let parent = element.parentElement;
      parent.insertBefore(canvasContainer,element);
      parent.removeChild(element);
      
      // Create new canvas element
      let newCanvas = document.createElement('canvas');
      newCanvas.width = canvasContainer.clientWidth;
      newCanvas.height = Math.ceil(calculateTextHeight(newCanvas,style,targetElsTextContent.get(element.id)));
      
      drawText(newCanvas, style, targetElsTextContent.get(element.id)) + 'px';
      
      // Replace that with canvas
      canvasContainer.append(newCanvas);
    });
  }
}

function applyStyleToContext(style, ctx) {
  ctx.strokeStyle = style.color;
  ctx.lineWidth = style.lineWidth;
  // ctx.lineCap = style.lineCap; // removing this; linecaps will be added at beginning and end of strokes if necessary
  
  if (style.shadowVisibility) {
    ctx.shadowColor = style.shadowColor;
    ctx.shadowOffsetX = style.shadowOffsetX;
    ctx.shadowOffsetY = style.shadowOffsetY;
    ctx.shadowBlur = style.shadowBlur;
  }
}

function drawText(canvasEl, style, text) {
  // Get context and set its style
  let ctx = canvasEl.getContext('2d');
  applyStyleToContext(style, ctx);

  // Convert text to uppercase (temporary, until I build out lowercase letters)
  text = text.toUpperCase();
  
  // Split text into words
  let words = text.split(/ +/);

  // Calculate base X & Y offsets based on size, maxRotation, maxTranslation, letterSpacing and lineHeight
  // These values ensure that no part of any character will be drawn outside of the canvas bounds
  let baseOffset = getBaseOffset(style);
  
  // Vars for monitoring where we are drawing
  let currentLine = 0;
  let currentChar = 0;
  
  let rightBoundary = canvasEl.width - baseOffset.x;
  let lineWidth = getLineWidth(canvasEl, style);
  let charWidth = getCharWidth(style);
  let charHeight = getCharHeight(style);
  let charOffset = {};
  
  // Go through each word
  words.forEach((word, index) => {
    console.log('drawing word: ',word);
    
    // Move to next line if necessary
    let currentX = baseOffset.x + (currentChar * getCharWidth(style));
    let wordWidth = getWordWidth(word,style)
    
    // if word is longer than remaining line space and
    // it can be written on a single line
    if (currentX + wordWidth > rightBoundary && wordWidth < lineWidth) {
      // ...go to next line
      currentLine++;
      currentChar = 0;
    } 
    
    for (let char of word) {
      // wrap word if necessary
      if (charWidth * (currentChar + 1) > lineWidth) {
        currentLine++;
        currentChar = 0;
      }
      
      // calculate offsets
      charOffset.x = baseOffset.x + (charWidth * currentChar);
      charOffset.y = baseOffset.y + (charHeight * currentLine) + getHalfLineHeight(style); 

     
      // draw only if character exists
      if (characters[char]) {
        drawChickenScratchCharacter(ctx,characters[char],charOffset,style);
        currentChar++;        
      } else if (characters['_' + char]) {
        drawChickenScratchCharacter(ctx,characters['_' + char],charOffset,style);
        currentChar++;        
      }
    }
    
    // Add space after word (unless it's the last word)
    if (index + 1< words.length) {
      currentChar++;
    }
  });
  
  let totalHeight = charHeight * (currentLine + 1) + (baseOffset.y * 2);
  return totalHeight;
}

function getWordWidth(word, style) {
  return word.length * getCharWidth(style);
}

function getCharWidth(style) {
  return ((style.size * .75) + style.lineWidth) + (style.size * .75 * style.letterSpacing);
}
    
function getCharHeight(style) {
  return (style.size * style.lineHeight) + style.lineWidth;
}

function getHalfLineHeight(style) {
  return style.size * ((style.lineHeight - 1) / 2);
}
  
function getLineWidth(canvasEl, style) {
  let baseOffset = getBaseOffset(style);
  
  return canvasEl.width - (baseOffset.x * 2)
}
  
function getBaseOffset(style) {
  return {
    x: calculateRotationOffset(style,'x') +
      calculateTranslationOffset(style,'x') +
      calculateLineWidthOffset(style,'x'),
    y: calculateRotationOffset(style,'y') +
      calculateTranslationOffset(style,'y') +
      calculateLineWidthOffset(style,'y')
  };
}

function drawChickenScratchCharacter(context, character, offset, style) {
  character.forEach(stroke => {
    drawChickenScratchStroke(context, stroke, offset, style) 
  });  
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
  // CHANGING COLOR JUST TO CHECK DIRECTION
  // REMOVE LATER
  //context.strokeStyle = 'black';
  
  if (style.lineCap != 'butt' && !stroke.noLineCaps) {
    if (!Array.isArray(stroke)) {
      drawStartingLinecap(context, style, stroke, offset);  
      drawEndingLinecap(context, style, stroke, offset);  
    } else {
      drawStartingLinecap(context, style, stroke[0], offset);
      drawEndingLinecap(context, style, stroke[stroke.length - 1], offset);
    }
  }
  
  // JUST TO CHECK LINE CAP POSITION
  // REMOVE LATER
  //context.strokeStyle = style.color;

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
        // find slope
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
        // find slope
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


/*

function getStrokeStartingPoint(stroke, offset) {
  if (stroke.type === 'line') {
    return {
      x: offset.x + stroke.start.x,
      y: offset.y + stroke.start.y
    };
  } else if (stroke.type === 'ellipse') {
    return getEllipseStartingPoint(stroke, offset);
  }
}


function getStrokeEndingPoint(stroke, offset) {
  if (stroke.type === 'line') {
    return {
      x: offset.x + stroke.end.x,
      y: offset.y + stroke.end.y
    };
  } else if (stroke.type === 'ellipse') {
    return getEllipseEndingPoint(stroke, offset);
  }
}



function drawEllipse(ctx, x1, y1, x2, y2, start, end, direction) {
  var radiusX = (x2 - x1) * 0.5,
      radiusY = (y2 - y1) * 0.5,
      centerX = x1 + radiusX,
      centerY = y1 + radiusY,
      step = 0.1,
      a = start,
      pi2 = Math.PI * 2 - step;

  ctx.lineWidth -= 1; // maybe update this in the future

  ctx.moveTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
*/

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

function drawChickenScratchStroke(context, stroke, offset, style) {
  let resizedStroke = JSON.parse(JSON.stringify(stroke));

  resizeStroke(resizedStroke,style.size / 48);

  // save context object
  context.save();

  let strokeOffset = calculateStrokeOffset(resizedStroke);
  
  // translate context
  let translateOffset = {
    x: offset.x + strokeOffset.x,
    y: offset.y + strokeOffset.y
  }
  
  context.translate(translateOffset.x, translateOffset.y);
  
  // adjust offset accordingly
  let newOffset = {
    x: 0 - strokeOffset.x,
    y: 0 - strokeOffset.y
  };
  
  // rotate context
  let rotation = (Math.random() * degToRad(style.maxRotation * 2)) - (degToRad(style.maxRotation));
  context.rotate(rotation);
  
  // translate context
  let randomYTrans = (Math.random() * style.maxTranslation * style.size * 2) - (style.maxTranslation * style.size);
  let randomXTrans = (Math.random() * style.maxTranslation * style.size * 1.5) - (style.maxTranslation * style.size * .75);

  context.translate(randomXTrans, randomYTrans);
  
  // draw stroke
  drawStroke(context, style, resizedStroke, newOffset);
  
  // restore context object
  context.restore();
}

function calculateStrokeOffset(stroke) {

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

// Modified from epistemex's comment on
// stackoverflow.com/questions/21594756/drawing-circle-ellipse-on-html5-canvas-using-mouse-events
function drawEllipse(ctx, x1, y1, x2, y2, start, end, direction) {
  var radiusX = (x2 - x1) * 0.5,
      radiusY = (y2 - y1) * 0.5,
      centerX = x1 + radiusX,
      centerY = y1 + radiusY,
      step = 0.1,
      a = start,
      pi2 = Math.PI * 2 - step;

  ctx.lineWidth -= 1; // maybe update this in the future

  ctx.moveTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));

  if (direction === 'clockwise') {
    if (end < start) {
      end += Math.PI * 2;
    }
    
    for (; a < end; a += step) {
      ctx.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));  
    }
  // we'll just assume everything not clockwise is counter-clockwise
  } else {
      if (end > start) {
        end -= Math.PI * 2;
      }

    for (; a > end ; a -= step) {
      ctx.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
    }
  }
  
  ctx.lineWidth += 1; // maybe update this in the future
}

function degToRad(deg) {
  return (deg / 360) * Math.PI * 2;
}

// Uses the maxRotation, lineWidth, and lineCap props of a style
// to determine the extra width a rotated stroke might get
// from the width of the stroke
function calculateLineWidthOffset(style) {
  switch (style.lineCap) {
    case 'butt':
      return Math.sin((Math.PI / 2) - degToRad(style.maxRotation)) * style.lineWidth * .5;
      break;
    case 'square':
      return Math.sin((Math.PI / 4) + degToRad(style.maxRotation)) * Math.sqrt(2 * Math.pow(style.lineWidth * .5,2));
      break;
    case 'round':
      return style.lineWidth * .5;
      break;
  }
}

function calculateRotationOffset(style,dimension) {
  switch (dimension) {
    case 'x':
      return Math.sin(degToRad(style.maxRotation)) * (style.size / 2);
      break;
    case 'y':
      return Math.sin(degToRad(style.maxRotation)) * ((style.size * .75) / 2);
  }
}

function calculateTranslationOffset(style,dimension) {
  switch (dimension) {
    case 'x':
      return style.maxTranslation * style.size * .75;
      break;
    case 'y':
      return style.maxTranslation * style.size;
  }
}

function calculateSpacingOffset(style,dimension) {
  switch (dimension) {
    case 'x':
      return style.letterSpacing * style.size * .75;
      break;
    case 'y':
      return ((style.lineHeight - 1) / 2) * style.size;
      break;
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

function calculateTextHeight(canvas, style, text) {
  // Split text into words
  let words = text.split(/ +/);

  // Calculate base X & Y offsets based on size, maxRotation, maxTranslation, letterSpacing and lineHeight
  // These values ensure that no part of any character will be drawn outside of the canvas bounds
  let baseOffset = getBaseOffset(style);
  
  // Vars for monitoring where we are drawing
  let currentLine = 0;
  let currentChar = 0;
  
  let rightBoundary = canvas.width - baseOffset.x;
  let lineWidth = getLineWidth(canvas, style);
  let charWidth = getCharWidth(style);
  let charHeight = getCharHeight(style);
  
  // Go through each word
  words.forEach((word, index) => {
    // Move to next line if necessary
    let currentX = baseOffset.x + (currentChar * getCharWidth(style));
    let wordWidth = getWordWidth(word,style)
    
    // if word is longer than remaining line space and
    // it can be written on a single line
    if (currentX + wordWidth > rightBoundary && wordWidth < lineWidth) {
      // ...go to next line
      currentLine++;
      currentChar = 0;
    } 
    
    for (let char of word) {
      // wrap word if necessary
      if (charWidth * (currentChar + 1) > lineWidth) {
        currentLine++;
        currentChar = 0;
      }
      
      currentChar++;
    }
    
    // Add space after word (unless it's the last word)
    if (index + 1< words.length) {
      currentChar++;
    }
  });
  
  let totalHeight = charHeight * (currentLine + 1) + (baseOffset.y * 2);
  return totalHeight;
}


function colorIsValid(testColor) {
  // Create an element and append it to body
  let colorChecker = document.createElement('div');
  colorChecker.style.position = 'absolute';
  colorChecker.style.opacity = 0;
  document.getElementsByTagName('body')[0].appendChild(colorChecker);
  
  // Set original color and test updated color
  colorChecker.style.color = 'rgb(255,255,255)';
  let originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  let updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) return true;
  
  // if necessary, test again with a different original color
  colorChecker.style.color = 'rgb(0,0,0)';
  originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) return true;
  
  return false;
}

// OLD AND POSSIBLY INTERESTING BUT CURRENTLY UNNECESSARY CODE
/* 
// FOLLOWING 2 FUNCTIONS ARE ONLY FOR TESTING 
// BASIC CHARACTER CONSTRUCTION & APPEARANCE!
function drawAllChickenScratchCharacters(canvasEl, style) {
  let ctx = canvasEl.getContext('2d');

  applyStyleToContext(style, ctx);

  // Calculate base X & Y offsets based on size, maxRotation, maxTranslation, letterSpacing and lineHeight
  let baseOffsetX = 
      (Math.sin(degToRad(style.maxRotation)) * (style.size / 2)) + (style.maxTranslation * style.size * .75) + 
      (Math.sin(Math.PI / 2 - degToRad(style.maxRotation)) * style.lineWidth * .5) +
      (style.letterSpacing * style.size * .75);
  let baseOffsetY = (Math.sin(degToRad(style.maxRotation)) * ((style.size * .75) / 2)) + (style.maxTranslation * style.size) + (((style.lineHeight - 1) / 2) * style.size);
  
  
  let offset = { 
    x: baseOffsetX,
    y: baseOffsetY
  };
  
  let index = 0;
  let currentLine = 1;
  let currentChar = 0;

  for (let char in characters) {
    currentChar++;
    
    if (baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * currentChar) > canvasEl.width - baseOffsetX) {
      currentLine++;
      currentChar = 1;
    }
    
    offset.x = baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * (currentChar - 1));
    offset.y = baseOffsetY + ((currentLine - 1) * (style.size * style.lineHeight)) + (style.size * (1 + ((style.lineHeight - 1) / 2)));

    drawChickenScratchCharacter(ctx, characters[char], offset, style);

    index++;
  }
}

function drawChickenScratchWord2(canvasEl, style, word) {
  let ctx = canvasEl.getContext('2d');

  // Calculate base X & Y offsets based on size, maxRotation, maxTranslation, letterSpacing and lineHeight
  let baseOffsetX = 
      calculateRotationOffset(style,'x') +
      calculateTranslationOffset(style,'x') +
      // calculateSpacingOffset(style,'x') +
      calculateLineWidthOffset(style,'x');
  
  let baseOffsetY = 
      calculateRotationOffset(style,'y') +
      calculateTranslationOffset(style,'y') +
      calculateSpacingOffset(style,'y') +
      calculateLineWidthOffset(style,'y'); 

  // draw lines at x and y offsets
  ctx.beginPath();
  ctx.moveTo(0,baseOffsetY);
  ctx.lineTo(canvasEl.width,baseOffsetY);
  ctx.moveTo(baseOffsetX,0);
  ctx.lineTo(baseOffsetX,canvasEl.height);
  
  ctx.stroke();
  
  let offset = { 
    x: baseOffsetX,
    y: baseOffsetY
  };
  
  let currentLine = 1;
  let currentChar = 0;

  word = word.toUpperCase();
  
  // Set style for word writing
  applyStyleToContext(style, ctx);
  
  for (let char in word) {
    currentChar++;

    if (word[char] !== ' ') {
      if (baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * currentChar) > canvasEl.width - baseOffsetX) {
        currentLine++;
        currentChar = 1;
      }

      offset.x = baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * (currentChar - 1));
      offset.y = baseOffsetY + ((currentLine - 1) * (style.size * style.lineHeight)) + (style.size * ((style.lineHeight - 1) / 2));

      drawChickenScratchCharacter(ctx, characters[word[char]], offset, style);
    }
    
  }
}


function drawAllCharacters(canvasEl) {
  let ctx = canvasEl.getContext('2d');
  ctx.lineWidth = defaultStyle.lineWidth;
  ctx.strokeStyle = defaultStyle.color; 
  // ctx.lineCap = lineCap;

  let offset = {};
  let index = 0;
  
  for(let char in characters) {
    offset.x = (index % 10) * 50;
    offset.y = Math.floor(index / 10) * 60;
  
    drawCharacter(ctx, characters[char], offset);
    
    index++;
  }
}



/*  
function drawChickenScratchWord(canvasEl, word) {
  let ctx = canvasEl.getContext('2d');
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  
  
  let offset = {};
  let index = 0;
  
  word = word.toUpperCase();
  
  for (let char of word) {
    if (char !== ' ') {
      offset.x = (index % 11) * 45 + 10;
      offset.y = Math.floor(index / 11) * 60 + 10;

      drawChickenScratchCharacter(ctx, characters[char], offset);
    }

    index++;
  }
}


function drawCharacter(context, character, offset) {
  character.forEach(stroke => {
    drawStroke(context, stroke, offset)   
  });
}
*/