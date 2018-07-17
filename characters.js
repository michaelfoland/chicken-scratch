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
        end: { x: 19, y: 1 }
      },
      {
        type: 'arc',
        start: { x: 1, y: 1 },
        control: { x: 37, y: 1 },
        end: { x: 37, y: 13 },
        radius: 12
      },
      {
        type: 'arc',
        start: { x: 37, y: 13 },
        control: { x: 37, y: 25 },
        end: { x: 19, y: 25 },
        radius: 12
      },
      {
        type: 'line',
        start: { x: 19, y: 25 },
        end: { x: 1, y: 25 }
      },
      {
        type: 'line',
        start: { x: 1, y: 25 },
        end: { x: 19, y: 25 }
      },
      { 
        type: 'arc',
        start: { x: 19, y: 25},
        control: { x: 37, y: 25 },
        end: { x: 37, y: 37 },
        radius: 12
      },
      {
        type: 'arc',
        start: { x: 37, y: 37 },
        control: { x: 37, y: 49 },
        end: { x: 19, y: 49 },
        radius: 12
      },
      {
        type: 'line',
        start: { x: 29, y: 49 }, // x should be 19, but it looks weird
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
      }
    });  
  });
  
  ctx.closePath();
  ctx.stroke();
}