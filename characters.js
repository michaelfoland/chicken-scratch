const lineWidth = 10;
const adjustment = 6;
const color = '#2b8';
// const lineCap = 'square';
// const shadowColor = '#175';
// const shadowOffsetX = 12;
// const shadowOffsetY = 6;
// const shadowBlur = 8;

const characters = {
  A: [
      {
        type: 'line',
        start: { x: 19, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 19, y: 1 },
        end: { x: 37, y: 49 }
      },
      {
        type: 'line',
        start: { x: 11, y: 25 },
        end: { x: 29, y: 25 }
      }
    ],
  B: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      [
        {
          type: 'line',
          start: { x: 1, y: 1 },
          end: { x: 23, y: 1 }
        },
        {
          type: 'ellipse',
          bounds: { x1: 9, y1: 1, x2: 37, y2: 25 },
          start: Math.PI * 1.5,
          end: Math.PI * 0.5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 23, y: 25 },
          end: { x: 1, y: 25}
        }
      ],
      [
        {
          type: 'line',
          start: { x: 1, y: 25 },
          end: { x: 23, y: 25}
        },
        {
          type: 'ellipse',
          bounds: { x1: 9, y1: 25, x2: 37, y2: 49 },
          start: Math.PI * 1.5,
          end: Math.PI * 0.5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 23, y: 49 },
          end: { x: 1, y: 49 }
        }
      ]
    ],
  C: [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 41, y2: 49 },
        start: Math.PI * 1.8,
        end: Math.PI * .2,
        direction: 'counter-clockwise'
      }
    ],
  D: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      [
        {
          type: 'line',
          start: { x: 1, y: 1 },
          end: { x: 13, y: 1 }
        },
        { 
          type: 'ellipse',
          bounds: { x1: -11, y1: 1, x2: 37, y2: 49 },
          start: Math.PI * 1.5,
          end: Math.PI * 0.5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 13, y: 49 },
          end: { x: 1, y: 49 }
        }
      ]
    ],
  E: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 1 }
      },
      {
        type: 'line',
        start: { x: 1, y: 25 },
        end: { x: 28, y: 25 }
      },
      {
        type: 'line',
        start: { x: 1, y: 49 },
        end: { x: 37, y: 49 }
      }
    ],
  F: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 1 }
      },
      {
        type: 'line',
        start: { x: 1, y: 25 },
        end: { x: 28, y: 25 }
      }
    ],
  G: [
      [
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 38, y2: 49 },
          start: Math.PI * 1.88,
          end: Math.PI,
          direction: 'counter-clockwise'
        },
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 38, y2: 49 },
          start: Math.PI,
          end: Math.PI * 0.05,
          direction: 'counter-clockwise'
        }
      ],
      {
        type: 'line',
        start: { x: 37, y: 30 },
        end: { x: 22, y: 30 }
      }
    ],
  H: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 25 },
        end: { x: 37, y: 25 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 37, y: 49 }
      }
    ],
  I: [
      {
        type: 'line',
        start: { x: 19, y: 1 },
        end: { x: 19, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 1 }
      },
      {
        type: 'line',
        start: { x: 1, y: 49 },
        end: { x: 37, y: 49 }
      }
    ],
  J: [
      [
        {
          type: 'line',
          start: { x: 37, y: 1 },
          end: { x: 37, y: 33}
        },
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 17, x2: 37, y2: 49 },
          start: 0,
          end: Math.PI,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 1, y: 33 },
          end: { x: 1, y: 28 }
        }
      ]
    ],
  K: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x:37, y: 1 },
        end: { x: 1, y: 25 }
      },
      {
        type: 'line',
        start: { x: 1, y: 25 },
        end: { x: 37, y: 49 }
      }
    ],
  L: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 49 },
        end: { x: 37, y: 49 }
      }
    ],
  M: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 19, y: 37 }
      },
      {
        type: 'line',
        start: { x: 19, y: 37 },
        end: { x: 37, y: 1 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 37, y: 49 }
      }
    ],
  N: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 49 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 37, y: 49 }
      }
    ],
  O: [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
        start: Math.PI * 1.6,
        end: Math.PI * 1.601,
        direction: 'counter-clockwise'
      }
    ],
  P: [
      {
        type: 'line',
        start: { x: 1, y: 1},
        end: { x: 1, y: 49 }
      },
      [
        {
          type: 'line',
          start: { x: 1, y: 1 },
          end: { x: 25, y: 1 }
        },
        {
          type: 'ellipse',
          bounds: { x1: 13, y1: 1, x2: 37, y2: 25 },
          start: Math.PI * 1.5,
          end: Math.PI * .5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 25, y: 25 },
          end: { x: 1, y: 25 }
        }
      ]
    ],
  Q: [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
        start: Math.PI * 1.6,
        end: Math.PI * 1.601,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 25, y: 37 },
        end: { x: 37, y: 49 }
      }
    ],
  R: [
      {
        type: 'line',
        start: { x: 1, y: 1},
        end: { x: 1, y: 49 }
      },
      [
        {
          type: 'line',
          start: { x: 1, y: 1 },
          end: { x: 25, y: 1 }
        },
        {
          type: 'ellipse',
          bounds: { x1: 13, y1: 1, x2: 37, y2: 25 },
          start: Math.PI * 1.5,
          end: Math.PI * .5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 25, y: 25 },
          end: { x: 1, y: 25 }
        }
      ],
      {
        type: 'line',
        start: { x: 19, y: 25 },
        end: { x: 37, y: 49 }
      }
    ],
  S: [ 
      [
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 37, y2: 25 },
          start: Math.PI * 1.95,
          end: Math.PI * 0.6,
          direction: 'counter-clockwise'
        },
        {
          type: 'line',
          start: { x: 13, y: 24 },
          end: { x: 25, y: 26 }
        }, {
          type: 'ellipse',
          bounds: { x1: 1, y1: 25, x2: 37, y2: 49 },
          start: Math.PI * 1.6,
          end: Math.PI * .95,
          direction: 'clockwise'
        }
      ]
    ],
  T: [
      {
        type: 'line',
        start: { x: 19, y: 1 },
        end: { x: 19, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 1 }
      }
    ],
  U: [
      [
        {
          type: 'line',
          start: { x: 1, y: 1 },
          end: { x: 1, y: 33 }
        },
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 17, x2: 37, y2: 49 },
          start: Math.PI,
          end: 0,
          direction: 'counter-clockwise'
        },
        {
          type: 'line',
          start: { x: 37, y: 33 },
          end: { x: 37, y: 1 }
        }
      ]
    ],
  V: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 19, y: 49 }
      },
      {
        type: 'line',
        start: { x: 19, y: 49 },
        end: { x: 37, y: 1 }
      }
    ],
  W: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 10, y: 49 }
      },
      {
        type: 'line',
        start: { x: 10, y: 49 },
        end: { x: 19, y: 17 }
      },
      {
        type: 'line',
        start: { x: 19, y: 17 },
        end: { x: 28, y: 49 }
      },
      { 
        type: 'line',
        start: { x: 28, y: 49 },
        end: { x: 37, y: 1}
      }
    ],
  X: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 49 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 1, y: 49 }
      }
    ],
  Y: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 19, y: 25 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 19, y: 25 }
      },
      {
        type: 'line',
        start: { x: 19, y: 25 },
        end: { x: 19, y: 49 }
      }
    ],
  Z: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 37, y: 1 }
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'line',
        start: { x: 1, y: 49 },
        end: { x: 37, y: 49 }
      }
    ]
};

// FOR TESTING BASIC CHARACTER CONSTRUCTION ONLY!
// For the present, I'm just passing in 
// a canvas element.  In the final version,
// the module will create its own canvas 
// element to replace the original element
function drawCharacters(canvasEl) {
  let ctx = canvasEl.getContext('2d');
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color; 
  ctx.lineCap = lineCap;
  
  
  
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
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  // ctx.lineCap = lineCap;
  
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
      step = 0.03,
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
