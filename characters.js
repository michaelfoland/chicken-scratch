const lineWidth = 2;
const adjustment = 6;
const color = '#2b8';

const characters = [
  {
    name: 'A',
    strokes: [
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
    ]
  },
  {
    name: 'B',
    strokes: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
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
      },
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
  },
  {
    name: 'C',
    strokes: [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 41, y2: 49 },
        start: Math.PI * 1.8,
        end: Math.PI * .2,
        direction: 'counter-clockwise'
      }
    ]
  },
  {
    name: 'D',
    strokes: [
      {
        type: 'line',
        start: { x: 1, y: 1 },
        end: { x: 1, y: 49 }
      },
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
  },
  {
    name: 'E',
    strokes: [
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
    ]
  },
  {
    name: 'F',
    strokes: [
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
    ]
  },
  {
    name: 'G',
    strokes: [
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
      },
      {
        type: 'line',
        start: { x: 37, y: 30 },
        end: { x: 22, y: 30 }
      }
    ]
  },
  {
    name: 'H',
    strokes: [
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
    ]
  },
  {
    name: 'I',
    strokes: [
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
    ]
  },
  {
    name: 'J',
    strokes: [
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
  },
  {
    name: 'K',
    strokes: [
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
    ]
  },
  {
    name: 'L',
    strokes: [
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
    ]
  },
  {
    name: 'M',
    strokes: [
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
    ]
  },
  {
    name: 'N',
    strokes: [
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
    ]
  },
  {
    name: 'T',
    strokes: [
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
    ]
  },
  {
    name: 'V',
    strokes: [
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
    ]
  },
  {
    name: 'W',
    strokes: [
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
    ]
  },
  {
    name: 'X',
    strokes: [
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
    ]
  },
  {
    name: 'Y',
    strokes: [
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
    ]
  },
  {
    name: 'Z',
    strokes: [
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
  }
];

// FOR TESTING BASIC CHARACTER CONSTRUCTION ONLY!
// For the present, I'm just passing in 
// a canvas element.  In the final version,
// the module will create its own canvas 
// element to replace the original element
function drawCharacters(canvasEl) {
  let ctx = canvasEl.getContext('2d');
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color; 
  ctx.beginPath();
  
  let xOffset;
  characters.forEach((character, index) => {
    
    xOffset = (index % 10) * 50;
    yOffset = Math.floor(index / 10) * 60;
    
    character.strokes.forEach(stroke => {
      ctx.moveTo(stroke.start.x + xOffset, stroke.start.y + yOffset);
      
      if (stroke.type == 'line') {
        ctx.lineTo(stroke.end.x + xOffset,stroke.end.y + yOffset);
      } else if (stroke.type == 'arc') {
        ctx.arcTo(stroke.control.x + xOffset, stroke.control.y + yOffset, stroke.end.x + xOffset, stroke.end.y + yOffset, stroke.radius);
      } else if (stroke.type == 'ellipse') {
        drawEllipse(canvasEl, stroke.bounds.x1 + xOffset, stroke.bounds.y1 + yOffset, stroke.bounds.x2 + xOffset, stroke.bounds.y2 + yOffset, stroke.start, stroke.end, stroke.direction);
      }
    });  
  });
  
  ctx.closePath();
  ctx.stroke();
}


// Modified from epistemex's comment on
// stackoverflow.com/questions/21594756/drawing-circle-ellipse-on-html5-canvas-using-mouse-events
function drawEllipse(canvasEl, x1, y1, x2, y2, start, end, direction) {
  var ctx = canvasEl.getContext('2d'),
      radiusX = (x2 - x1) * 0.5,
      radiusY = (y2 - y1) * 0.5,
      centerX = x1 + radiusX,
      centerY = y1 + radiusY,
      step = 0.025,
      a = start,
      pi2 = Math.PI * 2 - step;

  ctx.lineWidth -= 1;

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
  
  ctx.lineWidth += 1;
}
