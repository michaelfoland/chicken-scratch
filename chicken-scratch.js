let managedElements = new Map(); // This will hold all info needed to properly draw each text

function apply() {
  // 1 FETCH ALL ELEMENTS TO MODIFY
  styleDictionary.forEach(style => {
    let originalElements = Array.from(document.getElementsByClassName(style.name));
    
    // go through each element
    originalElements.forEach((originalElement, index) => {
  
      // get text content, process it, store the style, generate wobbles, save it to map
      let managedElement = {}; // this name sucks; what would be better?
      managedElement.originalText = originalElement.textContent;
      managedElement.words = cleanText(originalElement.textContent).split(' ');
      managedElement.styleName = style.camelName;
      managedElement.csId = style.name + '-' + index;
      managedElement.transforms = generateDrawingSpecs(style, managedElement.words); 
      managedElements.set(style.name + '-' + index, managedElement);
        
      // replace element with canvasContainer/canvas and draw
      // replaceElementAndDraw(originalElement, managedElement);
      
      // NEW IMPLEMENTATION USING MULTIPLE CANVASES FOR EACH TEXT
      addCanvasesAndDraw(originalElement, managedElement);
    });
  });
}

function addCanvasesAndDraw(originalElement, managedElement) {
  // Get style from style dictionary
  let { styleName, words, transforms, csId } = managedElement;
  
  let style = styleDictionary.get(managedElement.styleName);
  
  // Clean out original element and give it a csId
  originalElement.innerHTML = '';
  originalElement.dataset.csId = csId;
  
  let charWidth = calculateCharWidth(style);
  
  words.forEach((word, index) => {
    let wordSize = calculateWordSize(word, style); // not sure I need this here?  maybe for setting margins?
    let canvasSize = calculateCanvasSize(word, style);

    console.log('wordSize =',wordSize);
    console.log('canvasSize =',canvasSize);
    
    // create new canvas
    let newCanvas = document.createElement('canvas');
    newCanvas.dataset.csId = managedElement.csId + '-canvas-' + index;
    newCanvas.width = canvasSize.x;
    newCanvas.height = canvasSize.y;
    
    xMargin = ((charWidth / 2) - ((canvasSize.x - wordSize.x) / 2)) + 'px';
    yMargin = (0 - ((canvasSize.y - wordSize.y) / 2)) + 'px';

    newCanvas.style.margin = yMargin + ' ' + xMargin;
    
    drawWord(newCanvas, style, word, transforms[index])
    
    originalElement.appendChild(newCanvas);
  });
}

function drawWord(canvas, style, word, transforms) {
  let ctx = canvas.getContext('2d');
  applyStyleToContext(style, ctx);
  
  let baseOffset = calculateBaseOffset(style);
  
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
        x: baseOffset.x + charOffset.x + strokeOffset.x + randomOffset.x + (style.lineWidth / 2),
        y: baseOffset.y + charOffset.y + strokeOffset.y + randomOffset.y + (style.lineWidth / 2)
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

function generateDrawingSpecs(style, text) {
  let specs = [];
  
  // go through each word in the array
  text.forEach((word, wordIndex) => {
    
    // add an empty array of chars for this word
    specs.push([]);
    
    // go through each character in the word
    for (let charIndex = 0; charIndex < word.length; charIndex++) {

      // add an empty array of strokes for this char
      specs[wordIndex].push([]);
  
      let strokeArray = characters[word.charAt(charIndex)] ? characters[word.charAt(charIndex)] : characters['_' + word.charAt(charIndex)];
      
      // go through each stroke in the strokeArray
      for (let strokeIndex = 0; strokeIndex < strokeArray.length; strokeIndex++) {
        
        // and generate a random rotation and translation
        specs[wordIndex][charIndex].push({
          rotation: generateRandomRotation(style),
          translation: generateRandomTranslation(style)
        });    
      }
    }
  });
  
 return specs;  
}

function applyStyleToContext(style, ctx) {
  ctx.strokeStyle = style.color;
  ctx.lineWidth = style.lineWidth;
  
  if (style.shadowVisibility) {
    ctx.shadowColor = style.shadowColor;
    ctx.shadowOffsetX = style.shadowOffsetX;
    ctx.shadowOffsetY = style.shadowOffsetY;
    ctx.shadowBlur = style.shadowBlur;
  }
}

function cleanText(text) {
    text = text.toUpperCase(); // for now only; change this when we add lowercase
  
    let regex1 = /[^A-Z1-9\s]/g; // preserve only whitespace, capitals, and numbers 1-9
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
    x: charIndex * calculateCharWidth(style),
    y: style.size * ((style.lineHeight - 1) / 2)
  };
}

function calculateStrokeOffset(style, stroke) {
  let { lineWidth } = style;
  
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

function calculateWordSize(word, style) {
  let charWidth = calculateCharWidth(style);
  
  return {
    x: (word.length * charWidth)  - (charWidth * style.letterSpacing),
    y: calculateCharHeight(style)
  };
}

function calculateCanvasSize(word, style) {
  let baseOffset = calculateBaseOffset(style);
  let charWidth = calculateCharWidth(style);
  
  let shadow = {x: 0, y: 0};
  
  if (style.shadowVisibility) {
    shadow = {
      x: style.shadowOffsetX + style.shadowBlur,
      y: style.shadowOffsetY + style.shadowBlur
    }
  }
  
  return {
    x: (word.length * charWidth) + (baseOffset.x * 2) - calculateLetterSpacing(style) + shadow.x + 1,
    y: (baseOffset.y * 2) + calculateCharHeight(style) + shadow.y + 1
  };
}

function calculateWordHeight(style) {
  let baseOffset = calculateBaseOffset(style);
  
  return (style.size * style.lineHeight) + style.lineWidth + (baseOffset.y * 2);
}



function calculateCharWidth(style) {
  return ((style.size * .75) + style.lineWidth) * (1 + style.letterSpacing);
}

function calculateLetterSpacing(style) {
  return ((style.size * .75) + style.lineWidth) * style.letterSpacing;
}
    
function calculateCharHeight(style) {
  return (style.size + style.lineWidth) * style.lineHeight;
}

function calculateBaseOffset(style) {
  return {
    x: calculateRotationOffset(style,'x') +
      calculateTranslationOffset(style,'x') +
      calculateLineWidthOffset(style,'x'),
    y: calculateRotationOffset(style,'y') +
      calculateTranslationOffset(style,'y') +
      calculateLineWidthOffset(style,'y')
  };
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

function generateRandomRotation(style) {
  return (Math.random() * degToRad(style.maxRotation * 2)) - (degToRad(style.maxRotation));
}

function generateRandomTranslation(style) {
  return {
    x: (Math.random() * style.maxTranslation * style.size * 2) - (style.maxTranslation * style.size),
    y: (Math.random() * style.maxTranslation * style.size * 1.5) - (style.maxTranslation * style.size * .75)
  };
}

function getStrokes(char) {
  if (characters[char])  return characters[char];
  
  if (characters['_' + char]) return characters['_' + char];
  
  return null;
}  

function degToRad(deg) {
  return (deg / 360) * Math.PI * 2;
}

/*

function calculateLineWidth(canvasEl, style) {
  let baseOffset = calculateBaseOffset(style);
  
  return canvasEl.width - (baseOffset.x * 2)
}

function calculateTextHeight(canvas, managedElement) {
  let style = styleDictionary.get(managedElement.styleName);
  let words = managedElement.cleanedTextArray;
  
  // Determine width of each word 
  let wordWidths = [];
  words.forEach(word => {
    wordWidths.push(calculateWordWidth(word, style));
  });
  
  // Determine how many lines you will need to fit words
  let currentWord = 0;
  let lines = [[]];
  let currentLine = 0;
  let baseOffset = calculateBaseOffset(style);
  let currentWidth = baseOffset.x;
  let lineWidth = calculateLineWidth(canvas, style);
  let charWidth = calculateCharWidth(style);
  let charHeight = calculateCharHeight(style);
  let wordOffsets = [];

  // go through each word
  while (currentWord < words.length) {
    
    // Move to the next line if necessary
    if (currentWidth + wordWidths[currentWord] > lineWidth && lines[currentLine].length !== 0) {

      lines.push([]);
      currentLine++;
      
      // reset the width
      currentWidth = baseOffset.x;
    }

    // add the current word to this line
    lines[currentLine].push(words[currentWord]);

    // log the x and y values at which it starts
//    wordOffsets.push({
  //    x: currentWidth,
  //    y: baseOffset.y + currentLine * charHeight
  //  });

    // add its width plus the width of the subsequent space to the current width
    currentWidth += wordWidths[currentWord] + charWidth;
    
    currentWord++;
  }
  
  let totalHeight = charHeight * (currentLine + 1) + (baseOffset.y * 2);
  return totalHeight;
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


function calculateWordOffsets(canvas, managedElement) {
  let style = styleDictionary.get(managedElement.styleName);
  let words = managedElement.cleanedTextArray;
  
  // Determine width of each word 
  let wordWidths = [];
  words.forEach(word => {
    wordWidths.push(calculateWordWidth(word, style));
  });
  
  // Determine how many lines you will need to fit words
  let currentWord = 0;
  let lines = [[]];
  let currentLine = 0;
  let baseOffset = calculateBaseOffset(style);
  let currentWidth = baseOffset.x;
  let lineWidth = calculateLineWidth(canvas, style);
  let charWidth = calculateCharWidth(style);
  let charHeight = calculateCharHeight(style);
  let wordOffsets = [];

  // go through each word
  while (currentWord < words.length) {
    
    // Move to the next line if necessary
    if (currentWidth + wordWidths[currentWord] > lineWidth && lines[currentLine].length !== 0) {

      lines.push([]);
      currentLine++;
      
      // reset the width
      currentWidth = baseOffset.x;
    }

    // add the current word to this line
    lines[currentLine].push(words[currentWord]);

    // log the x and y values at which it starts
    wordOffsets.push({
      x: currentWidth,
      y: baseOffset.y + currentLine * charHeight
    });

    // add its width plus the width of the subsequent space to the current width
    currentWidth += wordWidths[currentWord] + charWidth;
    
    currentWord++;
  }
  
  return wordOffsets;
}


function drawChickenScratchCharacter(context, character, offset, style) {
  character.forEach(stroke => {
    drawChickenScratchStroke(context, stroke, offset, style) 
  });  
}


function drawText(canvas, managedElement) {
  // Get context and set its style
  let ctx = canvas.getContext('2d');
  let style = styleDictionary.get(managedElement.styleName);
  applyStyleToContext(style, ctx);

  // Get word widths
  let wordOffsets = calculateWordOffsets(canvas, managedElement);
  
  let words = managedElement.cleanedTextArray;
  
  // go through each word
  words.forEach((word, wordIndex) => {
        
    // go through each char
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
        
      // get char and its strokes
      let char = word.charAt(charIndex);
      let strokes = getStrokes(char);
      
      // go through each stroke 
      strokes.forEach((stroke, strokeIndex) => {
        
        // resize stroke based on style size
        let resizedStroke = JSON.parse(JSON.stringify(stroke));
        resizeStroke(resizedStroke,style.size / 48);

        // get char and stroke offsets
        let wordOffset = wordOffsets[wordIndex];
        let charOffset = calculateCharOffsetInWord(style, charIndex);
        let strokeOffset = calculateStrokeOffset(resizedStroke);
        let randomOffset = managedElement.wobble[wordIndex][charIndex][strokeIndex];
        
        let contextTranslationOffset = {
          x: wordOffset.x + charOffset.x + strokeOffset.x + randomOffset.translation.x,
          y: wordOffset.y + charOffset.y + strokeOffset.y + randomOffset.translation.y
        };

        // apply transformations to context
        ctx.save();
        ctx.translate(contextTranslationOffset.x, contextTranslationOffset.y);
        ctx.rotate(managedElement.wobble[wordIndex][charIndex][strokeIndex].rotation);
        
        // generate additional offset to center stroke around new origin
        let newOffset = {
          x: 0 - strokeOffset.x,
          y: 0 - strokeOffset.y
        };
        
        drawStroke(ctx, style, resizedStroke, newOffset);
        
        ctx.restore();
      });
    }
  });
}


function replaceElementAndDraw(originalElement, managedElement) {
  
  // Replace original element with canvas container
  let canvasContainer = document.createElement('div');
  canvasContainer.dataset.csId = managedElement.csId;
  canvasContainer.style.width = '100%';
  let parent = originalElement.parentElement;
  parent.insertBefore(canvasContainer,originalElement);
  parent.removeChild(originalElement);
  
  // Create new canvas element, draw text on it, and append to container
  let newCanvas = document.createElement('canvas');
  newCanvas.width = canvasContainer.clientWidth;
  newCanvas.height = Math.ceil(calculateTextHeight(newCanvas,managedElement));
  canvasContainer.style.height = newCanvas.height + 'px';
  drawText(newCanvas, managedElement);
  canvasContainer.appendChild(newCanvas);
  
  // Add resize listener
  canvasContainer.dataset.resizeHandlerAppended = Date.now();
  addResizeListener(canvasContainer, redrawCanvas);    
}

function redrawCanvas(e) {
  
  let container = e.target.parentElement.parentElement;
  console.log('in redraw canvas for',container.dataset.csId);
  
  // This line is necessary b/c resize handler is firing once 
  // as soon as it is attached. I don't know why
  if (Date.now() - Number(container.dataset.resizeHandlerAppended) < 50) return; 
  
  // based on container's data-cs-id, get managedElement from map
  let managedElement = managedElements.get(container.dataset.csId);
  
  // resize canvas based on new width
  let canvas = container.querySelector('canvas');
  canvas.width = container.clientWidth;
  canvas.height = Math.ceil(calculateTextHeight(canvas,managedElement));
  container.style.height = canvas.height + 'px';

  // Draw text on the canvas
  drawText(canvas, managedElement);
}

function calculateWordWidth(word, style) {
  return word.length * calculateCharWidth(style);
}


*/