const defaultStyle = {
  size: 48, // not sure what value to use here; this is character height in px
  color: 'black',
  lineWidth: 5,
  lineHeight: 1.2,
  lineCap: 'square',
  shadow: { 
    draw: false,
    blur: 6,
    offsetX: 4,
    offsetY: 2,
    color: '#444'
  }
};

const userStyles = [];

function apply() {
  let targetEls = {};
  
  // Fetch all els with .chicken-scratch
  targetEls.chickenScratch = Array.from(document.getElementsByClassName('chicken-scratch'));
  
  // Fetch all els with user's custom classes
  userStyles.forEach(style => {
    targetEls[style.camelName] = Array.from(document.getElementsByClassName(style.name));
  })
}


// FOR TESTING BASIC CHARACTER CONSTRUCTION ONLY!
// For the present, I'm just passing in 
// a canvas element.  In the final version,
// the module will create its own canvas 
// element to replace the original element
// Eventually these will all be private.
function drawCharacters(canvasEl) {
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

function drawChickenScratchCharacters(canvasEl, sizeRatio) {
  let ctx = canvasEl.getContext('2d');
  ctx.lineWidth = defaultStyle.lineWidth;
  ctx.strokeStyle = defaultStyle.color;
  ctx.lineCap = defaultStyle.lineCap;
  ctx.shadowColor = defaultStyle.shadow.color;
  ctx.shadowBlur = defaultStyle.shadow.blur;
  ctx.shadowOffsetX = defaultStyle.shadow.offsetX;
  ctx.shadowOffsetY = defaultStyle.shadow.offsetY;
  
  let offset = {};
  let index = 0;
  let wraps = 0;

  for (let char in characters) {
    wraps = Math.floor((index * (50 * sizeRatio)) / 500);
    
    offset.x = (index * (50 * sizeRatio) % 500) + 10; // wrap at 500
  
    offset.y = (wraps * (70 * sizeRatio)) + 10;

    drawChickenScratchCharacter(ctx, characters[char], offset, sizeRatio);

    index++;
  }
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

function drawChickenScratchCharacter(context, character, offset, sizeRatio) {
  character.forEach(stroke => {
    drawChickenScratchStroke(context, stroke, offset, sizeRatio)   
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
function drawChickenScratchStroke(context, stroke, offset, sizeRatio) {
  console.log('in drawChickenScratchStroke, stroke =',stroke);
  
  
  let resizedStroke = JSON.parse(JSON.stringify(stroke));

  resizeStroke(resizedStroke,sizeRatio);
    
  console.log('resizedStroke after =',resizedStroke);
  
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
  let rotation = ((Math.PI / 15) * Math.random()) - Math.PI / 30;
  
  context.rotate(rotation);
  
  
  // translate context
  let base = 4;
  
  let randomYTrans = (base * sizeRatio) - Math.round((Math.random() * (2 * base * sizeRatio)));
  let randomXTrans = (base * sizeRatio) - Math.round((Math.random() * (2 * base * sizeRatio)));
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
