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
          end: { x: 26, y: 1 } // changed x from 23 to 24
        },
        {
          type: 'ellipse',
          bounds: { x1: 13, y1: 1, x2: 37, y2: 25 },
          start: Math.PI * 1.5,
          end: Math.PI * 0.5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 26, y: 25 }, // changed x from 23 to 24
          end: { x: 1, y: 25}
        }
      ],
      [
        {
          type: 'line',
          start: { x: 1, y: 25 },
          end: { x: 26, y: 25}
        },
        {
          type: 'ellipse',
          bounds: { x1: 13, y1: 25, x2: 37, y2: 49 },
          start: Math.PI * 1.5,
          end: Math.PI * 0.5,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 26, y: 49 },
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
          end: { x: 14, y: 1 }
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
          start: { x: 14.5, y: 49 },
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
          end: Math.PI - .05,
          direction: 'counter-clockwise'
        },
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 38, y2: 49 },
          start: Math.PI + .05,
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
          end: { x: 37, y: 34.5}
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
          start: { x: 1, y: 34.5 },
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
        start: Math.PI * 3.62,
        end: Math.PI * 1.58,
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
          end: { x: 26, y: 1 }
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
          start: { x: 26, y: 25 },
          end: { x: 1, y: 25 }
        }
      ]
    ],
  Q: [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
        start: Math.PI * 3.62,
        end: Math.PI * 1.58,
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
          end: { x: 26, y: 1 }
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
          start: { x: 26, y: 25 },
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
          end: Math.PI * 0.58,
          direction: 'counter-clockwise'
        },
        {
          type: 'line',
          start: { x: 12.5, y: 24.2 },
          end: { x: 25.5, y: 25.8 }
        }, {
          type: 'ellipse',
          bounds: { x1: 1, y1: 25, x2: 37, y2: 49 },
          start: Math.PI * 1.59,
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
          end: { x: 1, y: 34.3 }
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
          start: { x: 37, y: 34.3 },
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