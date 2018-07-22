const defaultStyle = {
  name: 'chicken-scratch',
  camelName: 'chickenScratch',
  maxRotation: 10,
  maxTranslation: .10,
  size: 48, // not sure what value to use here; this is character height in px
  color: '#396',
  lineWidth: 3,
  lineHeight: 1.5,
  letterSpacing: .4, // i.e, the space btw chars should be 10% (.1) of char width
  lineCap: 'square',
  shadow: { 
    draw: false,
    blur: 6,
    offsetX: 4,
    offsetY: 2,
    color: '#444'
  }
};


function applyStyleToContext(style, ctx) {
  ctx.strokeStyle = style.color;
  ctx.lineWidth = style.lineWidth;
  ctx.lineCap = style.lineCap;
  
  if (style.shadow.draw) {
    ctx.shadowColor = style.shadow.color;
    ctx.shadowOffsetX = style.shadow.offsetX;
    ctx.shadowOffsetY = style.shadow.offsetY;
    ctx.shadowBlur = style.shadow.blur;
  }
}

const styles = new Map();

styles.set('chickenScratch',defaultStyle);

let targetEls = {}; 
let targetElsInnerHTML = new Map();
let targetElsTextContent = new Map();

// This function will replace the innerHTML of every .chicken-scratch
// element with a canvas element holding the original textContent of the element
function apply() {
  // 1 FETCH ALL ELEMENTS TO TARGET
  // Fetch all els with .chicken-scratch OR a user custom class
  styles.forEach(style => {
    targetEls[style.camelName] = Array.from(document.getElementsByClassName(style.name));
  });
  
  // 2 PROCESS EACH ELEMENT
  let index;
  
  // go through each style
  for (let styleGroup in targetEls) {
    index = 0;
    
    // go through each element bearing that style
    targetEls[styleName].forEach(element => {
      
      // Give element ID if necessary
      if (!element.id) {
        element.id = styleName + '-' + index;
        index++;
      }
      
      // Store element's innerHTML in map (for future retrieval, if necessary)
      targetElsInnerHTML.set(element.id,element.innerHTML);
      
      // Store element's textContent in map
      targetElsTextContent.set(element.id,element.textContent);
      
      // Empty out element's innerHTML
      element.innerHTML = '';
      
      // Create new canvas element
      let newCanvas = document.createElement('canvas');
  
      // Set canvas height & width equal to that of parent's client height
      newCanvas.height = element.clientHeight;
      newCanvas.width = element.clientWidth;
      
      drawText(newCanvas, styles.get(styleName), targetElsTextContent.get(element.id));
      
      
      
    })
  }
  
  
}





function drawText(canvasEl, style, text) {
  // Get context and set its style
  let ctx = canvasEl.getContext('2d');
  applyStylesToContext(style, ctx);
  
  // Split text into words
  let words = text.split(/ +/);

  let baseOffsetX = 0; // leave enough space so that a letter translated and rotated to the left as much as possible will not be clipped
  let baseOffsetY = 0; // leave enough space so that a letter translated and rotated upward as much as possible will not be clipped
  
  // Go through each word
  words.forEach(word => {
    
    
    
    // Determine offset 
  })
  
  let offset = {};
  let index = 0;
  
  for(let char in characters) {
    offset.x = (index % 10) * 50;
    offset.y = Math.floor(index / 10) * 60;
  
    drawCharacter(ctx, characters[char], offset);
    
    index++;
  }
}

function getWordWidth(word, style) {
  return word.length * (style.size * .75) + ((word.length - 1) * style.size * .75 * style.letterSpacing);
}

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

function drawStroke(context, stroke, offset) {
  context.beginPath();
  
  if (Array.isArray(stroke)) {
    stroke.forEach(subStroke => {
      draw(context, subStroke, offset);
    })
  } else {
    draw(context, stroke, offset);
  }
    
  context.stroke();
}

function drawChickenScratchCharacter(context, character, offset, style) {
  character.forEach(stroke => {
    drawChickenScratchStroke(context, stroke, offset, style)   
  });  
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
function drawChickenScratchStroke(context, stroke, offset, style) {
  let resizedStroke = JSON.parse(JSON.stringify(stroke));

  resizeStroke(resizedStroke,style.size / 48);

  // save context object
  context.save();

  // translate context
  let translateOffset = {
    x: offset.x + (calculateStrokeXOffset(resizedStroke)),
    y: offset.y + (calculateStrokeYOffset(resizedStroke))
  }
  
  context.translate(translateOffset.x, translateOffset.y);
  
  // adjust offset accordingly
  let newOffset = {
    x: 0 - (calculateStrokeXOffset(resizedStroke)),
    y: 0 - (calculateStrokeYOffset(resizedStroke))
  };
  
  // rotate context
  // this should return a rotation within +/- 9 deg
  let rotation = (degToRad(style.maxRotation * 2) * Math.random()) - (degToRad(style.maxRotation));
  
  context.rotate(rotation);
  
  
  // translate context
    
  let randomYTrans = (style.maxTranslation * style.size * 2) - (Math.random() * (style.maxTranslation * style.size));
  let randomXTrans = (style.maxTranslation * style.size * 1.5) - (Math.random() * (style.maxTranslation * style.size * .75));
  context.translate(randomXTrans, randomYTrans);
  
  // draw stroke
  drawStroke(context, resizedStroke, newOffset);
  
  // restore context object
  context.restore();
}

function calculateStrokeXOffset(stroke) {
  return calculateStrokeOffset(stroke, 'x');
}

function calculateStrokeYOffset(stroke) {
  return calculateStrokeOffset(stroke, 'y');
}

function calculateStrokeOffset(stroke, dimension) {

  if (!Array.isArray(stroke)) {
    if (stroke.type === 'line') {
      return (stroke.start[dimension] + stroke.end[dimension]) / 2;
    } else if (stroke.type === 'ellipse') {
      return (stroke.bounds[dimension + '1'] + stroke.bounds[dimension + '2']) / 2;
    }
  } else {
    
    let all = [];
    
    stroke.forEach(subStroke => {
      if (subStroke.type === 'line') {
        all.push(subStroke.start[dimension]);
        all.push(subStroke.end[dimension]);
      } else if (subStroke.type === 'ellipse') {
        all.push(subStroke.bounds[dimension + '1']);
        all.push(subStroke.bounds[dimension + '2']);
      }
    });
    
    // NOTE: Spread operator necessary because
    // Math.max() and Math.min() don't expect arrays
    return (Math.max(...all) + Math.min(...all)) / 2;
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


function degToRad(deg) {
  return (deg / 360) * Math.PI * 2;
}

// FOLLOWING 2 FUNCTIONS ARE ONLY FOR TESTING 
// BASIC CHARACTER CONSTRUCTION & APPEARANCE!
function drawAllChickenScratchCharacters(canvasEl, style) {
  console.log('in drawAllChickenScratchCharacters; canvasEl.width =',canvasEl.width);
  
  let ctx = canvasEl.getContext('2d');

  applyStyleToContext(style, ctx);

  // Calculate base X & Y offsets based on size, maxRotation, maxTranslation, letterSpacing and lineHeight
  let baseOffsetX = (Math.sin(degToRad(style.maxRotation)) * (style.size / 2)) + (style.maxTranslation * style.size * .75) + (style.letterSpacing * style.size * .75);
  let baseOffsetY = (Math.sin(degToRad(style.maxRotation)) * ((style.size * .75) / 2)) + (style.maxTranslation * style.size) + (((style.lineHeight - 1) / 2) * style.size);
  
  console.log('baseOffsetX =',baseOffsetX);
  console.log('baseOffsetY =',baseOffsetY);
  
  
  
  let offset = { 
    x: baseOffsetX,
    y: baseOffsetY
  };
  
  let index = 0;
  let currentLine = 1;
  let currentChar = 0;

  for (let char in characters) {
    currentChar++;
    
    console.log('width after new char =',baseOffsetX + ((style.size * (1 + style.letterSpacing)) * currentChar))
    console.log('canvasEl.width - baseOffsetX = ',canvasEl.width - baseOffsetX);
    
    if (baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * currentChar) > canvasEl.width - baseOffsetX) {
      currentLine++;
      currentChar = 1;
    }
    
    offset.x = baseOffsetX + ((style.size * .75 * (1 + style.letterSpacing)) * (currentChar - 1));
    offset.y = baseOffsetY + ((currentLine - 1) * (style.size * style.lineHeight)) + (style.size * (1 + ((style.lineHeight - 1) / 2)));
    
    console.log('offset.x =',offset.x);
    console.log('offset.y =',offset.y);
    

    drawChickenScratchCharacter(ctx, characters[char], offset, style);

    index++;
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

