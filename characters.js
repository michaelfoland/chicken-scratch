export function getStrokes(char) {
  // handle letters
  let letterRegex = /[a-zA-Z]/;
  let numRegex = /[1-9]/; // sorry, no zero yet!
  
  if (letterRegex.exec(char))  return characters[char];
  
  if (numRegex.exec(char)) return characters['_' + char];
  
  return characters[specialCharMap.get(char)];  
}  


const specialCharMap = new Map();
  
specialCharMap.set('.','_period');
specialCharMap.set(',','_comma');
specialCharMap.set('!','_exclamation');
specialCharMap.set('?','_question');
specialCharMap.set('\'','_singleQuote');
specialCharMap.set('"','_doubleQuote');
specialCharMap.set('@','_at');
specialCharMap.set('#','_pound');
specialCharMap.set('$','_dollar');
specialCharMap.set('%','_percent');
specialCharMap.set('^','_caret');
specialCharMap.set('&','_ampersand');
specialCharMap.set('*','_asterisk');
specialCharMap.set('(','_leftParen');
specialCharMap.set(')','_rightParen');
specialCharMap.set('-','_hyphen');
specialCharMap.set('+','_plus');
specialCharMap.set('=','_equal');
specialCharMap.set(':','_colon');
specialCharMap.set(';','_semiColon');
specialCharMap.set('/','_slash');
specialCharMap.set('\\','_backSlash');
specialCharMap.set('{','_leftBrace');
specialCharMap.set('}','_rightBrace');
specialCharMap.set('[','_leftBracket');
specialCharMap.set(']','_rightBracket');
specialCharMap.set('<','_lessThan');
specialCharMap.set('>','_greaterThan');

const characters = {
  a: [ 
    {
      type: 'ellipse',
      bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI * 3.72,
      end: Math.PI * 1.7,
      direction: 'counter-clockwise'
    },
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 34, y: 49 }
    }
  ],
  b: [
    {
      type: 'line',
      start: { x: 4, y: 1 },
      end: { x: 4, y: 49 },
    },
    {
      type: 'ellipse',
      bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI * 3.72,
      end: Math.PI * 1.7,
      direction: 'counter-clockwise'
    }
  ],
  c: [
    {
      type: 'ellipse',
      bounds: {x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI * 1.8,
      end: Math.PI * 0.2,
      direction: 'counter-clockwise'
    }
  ],
  d: [
    {
      type: 'ellipse',
      bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI * 3.72,
      end: Math.PI * 1.7,
      direction: 'counter-clockwise'
    },
    {
      type: 'line',
      start: { x: 34, y: 1 },
      end: { x: 34, y: 49 },
    }    
  ],
  e: [
    {
      type: 'ellipse',
      bounds: {x1: 4, y1: 19, x2: 34, y2: 49},
      start: Math.PI * 1.9,
      end: Math.PI * 0.15,
      direction: 'counter-clockwise'
    },
    {
      type: 'line',
      start: { x: 5, y: 30 },
      end: { x: 33, y: 30 }
    }
  ],
  f: [
    [
      {
        type: 'ellipse',
        bounds: { x1: 12, y1: 1, x2: 34, y2: 23 },
        start: Math.PI * 2,
        end: Math.PI,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 12, y: 10 },
        end: { x: 12, y: 47 }
      }
    ],
    {
      type: 'line',
      start: { x: 1, y: 21 },
      end: { x: 30, y: 21 }
      
    }
  ],
  g: [
    {
      type: 'ellipse',
      bounds: { x1: 5, y1: 19, x2: 33, y2: 47 },
      start: Math.PI * 3.85,
      end: Math.PI * 1.83,
      direction: 'counter-clockwise'
    },
    [
      {
        type: 'line',
        start: { x: 33, y: 19 },
        end: { x: 33, y: 47 }
      },
      {
        type: 'ellipse',
        bounds: {x1: 5, y1: 37, x2: 33, y2: 57 },
        start: 0,
        end: Math.PI * .85,
        direction: 'clockwise'
      }
    ]
  ],
  h: [
    {
      type: 'line',
      start: { x: 4, y: 1 },
      end: { x: 4, y: 49 }
    },
    [
      {
        type: 'ellipse',
        bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
        start: Math.PI,
        end: Math.PI * 2,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 34, y: 33 },
        end: { x: 34, y: 49 }
      }
    ]
  ],
  i: [
    {
      type: 'line',
      start: { x: 19, y: 19 },
      end: { x: 19, y: 49 }
    },
    {
      type: 'ellipse',
      bounds: { x1: 18, y1: 6, x2: 20, y2: 8 },
      start: 0,
      end: Math.PI  * 2,
      direction: 'clockwise'
    }
  ],
  j: [
    [
      {
        type: 'line',
        start: { x: 34, y: 19 },
        end: { x: 34, y: 42 } 
      },
      {
        type: 'ellipse',
        bounds: { x1: 4, y1: 25, x2: 34, y2: 57 },
        start: 0,
        end: Math.PI,
        direction: 'clockwise'
      }
    ],
    {
      type: 'ellipse',
      bounds: { x1: 33, y1: 6, x2: 35, y2: 8 },
      start: 0,
      end: Math.PI  * 2,
      direction: 'clockwise'
    }
  ],
  k: [
    {
      type: 'line',
      start: { x: 4, y: 1 },
      end: { x: 4, y: 49 }
    },
        {
      type: 'line',
      start: { x: 30, y: 19 },
      end: { x: 4, y: 33 }
    },
        {
      type: 'line',
      start: { x: 9, y: 29 },
      end: { x: 30, y: 49 }
    }
  ],
  l: [
    {
      type: 'line',
      start: { x: 19, y: 1 },
      end: { x: 19, y: 49 }
    }
  ],
  m: [
    {
      type: 'line',
      start: { x: 1, y: 18 },
      end: { x: 1, y: 49 }
    },
    [
      {
        type: 'line',
        start: { x: 1, y: 49 },
        end: { x: 1, y: 25 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 19, x2: 19, y2: 37},
        start: Math.PI,
        end: Math.PI * 2,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 19, y: 25 },
        end: { x: 19, y: 49 }
      }
    ],
    [
      {
        type: 'line',
        start: { x: 19, y: 49 },
        end: { x: 19, y: 25 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 19, y1: 19, x2: 37, y2: 37},
        start: Math.PI,
        end: Math.PI * 2,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 37, y: 25 },
        end: { x: 37, y: 49 }
      }
    ]    
  ],
  n: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 4, y: 49 }      
    },
    [
      {
        type: 'line',
        start: { x: 4, y: 49 },
        end: { x: 4, y: 31 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
        start: Math.PI,
        end: Math.PI * 2,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 34, y: 31 },
        end: { x: 34, y: 49 }
      }
    ]
  ],
  o: [
    {
      type: 'ellipse',
      bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI * 3.8,
      end: Math.PI * 1.78,
      direction: 'counter-clockwise'
    }
  ],
  p: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 4, y: 57 }
    },
    {
      type: 'ellipse',
      bounds: { x1: 5, y1: 19, x2: 33, y2: 47},
      start: Math.PI * 3.8,
      end: Math.PI * 1.78,
      direction: 'counter-clockwise'
    }
  ],
  q: [
    {
      type: 'ellipse',
      bounds: { x1: 5, y1: 19, x2: 33, y2: 47},
      start: Math.PI * 3.8,
      end: Math.PI * 1.78,
      direction: 'counter-clockwise'
    },
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 34, y: 57 }      
    }
  ],
  r: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 4, y: 49 }
    },
    {
      type: 'ellipse',
      bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
      start: Math.PI,
      end: Math.PI * 1.9,
      direction: 'clockwise'
    }
  ],
  s: [
    [
      {
        type: 'ellipse',
        bounds: { x1: 6, y1: 19, x2: 32, y2: 34 },
        start: Math.PI * 1.95,
        end: Math.PI * .48,
        direction: 'counter-clockwise'
      },
      {
        type: 'ellipse',
        bounds: { x1: 6, y1: 34, x2: 32, y2: 49 },
        start: Math.PI * 1.48,
        end: Math.PI * .95,
        direction: 'clockwise'
      }
    ]
  ],
  t: [
    {
      type: 'line',
      start: { x: 19, y: 7 },
      end: { x: 19, y: 49 }
    },
    {
      type: 'line',
      start: { x: 5, y: 19 },
      end: { x: 33, y: 19 }
    }
  ],
  u: [
    [
      {
        type: 'line',
        start: { x: 4, y: 19 },
        end: { x: 4, y: 34 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 4, y1: 19, x2: 34, y2: 49 },
        start: Math.PI,
        end: 0,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 34, y: 34 },
        end: { x: 34, y: 19 }
      }
    ],
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 34, y: 49 }
    }
  ],
  v: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 19, y: 49 }
    },
    {
      type: 'line',
      start: { x: 19, y: 49 },
      end: { x: 34, y: 19 }
    }
  ],
  w: [
    {
      type: 'line',
      start: { x: 1, y: 19 },
      end: { x: 11, y: 49 }
    },
    {
      type: 'line',
      start: { x: 11, y: 49 },
      end: { x: 19, y: 27 }
    },
    {
      type: 'line',
      start: { x: 19, y: 27 },
      end: { x: 27, y: 49 }
    },
    {
      type: 'line',
      start: { x: 27, y: 49 },
      end: { x: 37, y: 19 }
    }
  ],
  x: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 34, y: 49 }
    },
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 4, y: 49 }
    }
  ],
  y: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 18, y: 42 }
    },
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 9, y: 57 }
    }
  ],
  z: [
    {
      type: 'line',
      start: { x: 4, y: 19 },
      end: { x: 34, y: 19 }
    },
    {
      type: 'line',
      start: { x: 34, y: 19 },
      end: { x: 4, y: 49 }
    },
    {
      type: 'line',
      start: { x: 4, y: 49 },
      end: { x: 34, y: 49 }
    }
  ],
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
          bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
          start: Math.PI * 1.85,
          end: Math.PI - 0.05,
          direction: 'counter-clockwise'
        },
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
          start: Math.PI + 0.05,
          end: Math.PI * 0.08,
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
        noLineCaps: true,
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
        noLineCaps: true,
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
    ],
  _0: [
    {
      noLineCaps: true,
      type: 'ellipse',
      bounds: { x1: 1, y1: 1, x2: 37, y2: 49 },
      start: Math.PI * 3.62,
      end: Math.PI * 1.58,
      direction: 'counter-clockwise'
    }
  ],
  _1: [
        {
          type: 'line',
          start: { x: 19, y: 1 },
          end: { x: 5, y: 15 }
        },
        { 
          type: 'line',
          start: { x: 19, y: 1 },
          end: { x: 19, y: 49 }
        },
        {
          type: 'line',
          start: { x: 1, y: 49 },
          end: { x: 37, y: 49 }
        }
    ],
  _2: [
        [
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 1, x2: 37, y2: 27 },
            start: Math.PI,
            end: Math.PI * .25,
            direction: 'clockwise'
          },
          {
            type: 'line',
            start: { x: 33, y: 22 },
            end: { x: 1, y: 49 }
          }
        ],
        { 
          type: 'line',
          start: { x: 1, y: 49 },
          end: { x: 37, y: 49 }
        }
    ],
  _3: [
        [
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 1, x2: 37, y2: 25 },
            start: Math.PI * 1.15,
            end: Math.PI / 2,
            direction: 'clockwise'
          },
          {
            type: 'line',
            start: { x: 20, y: 25 },
            end: { x: 13, y: 25 }
          }
        ],
        [ 
          {
            type: 'line',
            start: { x: 13, y: 25 },
            end: { x: 20, y: 25 }
          },
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 25, x2: 37, y2: 49 },
            start: Math.PI * 1.5,
            end: Math.PI * .85,
            direction: 'clockwise'
          }
        ]
    ],
  _4: [
        {
          type: 'line',
          start: { x: 7, y: 1 },
          end: { x: 1, y: 25 }
        },
        {
          type: 'line',
          start: { x: 1, y: 25 },
          end: { x: 37, y: 25 }
        },
        {
          type: 'line',
          start: { x: 28, y: 1 },
          end: { x: 28, y: 49 }
        }
    ],
  _5: [
        {
          type: 'line',
          start: { x: 7, y: 1 },
          end: { x: 1, y: 23 }
        },
        {
          type: 'ellipse',
          bounds: { x1: -9, y1: 19, x2: 37, y2: 49 },
          start: Math.PI * 1.3,
          end: Math.PI * 0.7,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 7, y: 1},
          end: { x: 37, y: 1}
        }
    ],
  _6: [
        [
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 1, x2: 39, y2: 65 },
            start: Math.PI * 1.725,
            end: Math.PI * .95,
            direction: 'counter-clockwise'
          },
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 19, x2: 37, y2: 49 },
            start: Math.PI * .95,
            end: Math.PI * .96,
            direction: 'counter-clockwise'
          }
        ]
      ],
    _7: [
          {
            type: 'line',
            start: { x: 1, y: 1},
            end: { x: 37, y: 1 }
          },
          {
            type: 'line',
            start: { x: 37, y: 1},
            end: { x: 10, y: 49 }
          }
    ],
  _8: [
        [
          {
            type: 'ellipse',
            bounds: { x1: 3, y1: 1, x2: 35, y2: 23 },
            start: Math.PI * 1.6,
            end: Math.PI * 0.48,
            direction: 'counter-clockwise'
          },
          {
            type: 'ellipse',
            bounds: { x1: 1, y1: 23, x2: 37, y2: 49 },
            start: Math.PI * 1.49,
            end: Math.PI * 1.48,
            direction: 'clockwise'
          },
          { 
            type: 'ellipse',
            bounds: { x1: 3, y1: 1, x2: 35, y2: 23 },
            start: Math.PI * 0.48,
            end: Math.PI * 1.59,
            direction: 'counter-clockwise'
          }
        ]
      ],
    _9: [
          {
            type: 'ellipse',
            bounds: { x1: 2, y1: 1, x2: 36, y2: 30 },
            start: Math.PI * 3.8,
            end: Math.PI * 1.75,
            direction: 'counter-clockwise'
          },
          {
            type: 'line',
            start: { x: 36, y: 1 },
            end: { x: 36, y: 49 }
          }
      ],
    _period: [
        { 
          type: 'ellipse',
          bounds: { x1: 9, y1: 47, x2: 11, y2: 49},
          start: 0,
          end: Math.PI  * 2,
          direction: 'clockwise'
        }
      ],
    _comma: [
        {
          type: 'ellipse',
          bounds: { x1: 5, y1: 1, x2: 15, y2: 49 },
          start: Math.PI * .2,
          end: Math.PI * .5,
          direction: 'clockwise'
        }
      ],
    _exclamation: [
      {
        type: 'line',
        start: { x: 10, y: 1 },
        end: {  x: 10, y: 33 }
      },
      { 
        type: 'ellipse',
        bounds: { x1: 9, y1: 47, x2: 11, y2: 49 },
        start: 0,
        end: Math.PI  * 2,
        direction: 'clockwise'
      }
    ],
    _question: [
      [
        {
          type: 'ellipse',
          bounds: { x1: 1, y1: 1, x2: 33, y2: 23 },
          start: Math.PI * 1.2,
          end: Math.PI * 0.52,
          direction: 'clockwise'
        },
        {
          type: 'line',
          start: { x: 19, y: 23 },
          end: { x: 19, y: 37 }
        }
      ],
        { 
          type: 'ellipse',
          bounds: { x1: 18, y1: 47, x2: 20, y2: 49},
          start: 0,
          end: Math.PI  * 2,
          direction: 'clockwise'
        }
    ],
  _singleQuote: [
    {
      type: 'line',
      start: { x: 19, y: 1 },
      end: { x: 19, y: 19 }
    }
  ],
  _doubleQuote: [
    {
      type: 'line',
      start: { x: 10, y: 1 },
      end: { x: 10, y: 19 }
    },
    {
      type: 'line',
      start: { x: 28, y: 1 },
      end: { x: 28, y: 19 }
    }
  ],
  _pound: [
    {
      type: 'line',
      start: { x: 1, y: 17 },
      end: { x: 37, y: 17 }
    },
    {
      type: 'line',
      start: { x: 1, y: 33 },
      end: { x: 37, y: 33 }      
    },
    {
      type: 'line',
      start: { x: 13 , y: 1 },
      end: { x: 13, y: 47 }      
    },
    {
      type: 'line',
      start: { x: 25, y: 1 },
      end: { x: 25, y: 47 }      
    }
  ],
  _dollar: [
    [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 7, x2: 37, y2: 25 },
        start: Math.PI * 1.9,
        end: Math.PI * 0.48,
        direction: 'counter-clockwise'
      },
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 25, x2: 37, y2: 43 },
        start: Math.PI * 1.52,
        end: Math.PI * 0.9,
        direction: 'clockwise'        
      }
    ],
    {
      type: 'line',
      start: { x: 19, y: 1 },
      end: { x: 19, y : 49 }
    }
  ],
  _percent: 
    [
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 16, y2: 16 },
        start: Math.PI * 3.75,
        end: Math.PI * 1.73,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 37, y: 1 },
        end: { x: 1, y: 49 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 21, y1: 33, x2: 37, y2: 49 },
        start: Math.PI * 3.75,
        end: Math.PI * 1.73,
        direction: 'counter-clockwise'
      }
    ],
  _at: [
    [
      {
        type: 'ellipse',
        bounds: { x1: 13, y1: 11, x2: 27, y2: 39 },
        start: Math.PI * 1.8,
        end: Math.PI * 0.2,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 26, y: 37 },
        end: { x: 26, y: 17 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 27, y1: 25, x2: 37, y2: 41 },
        start: Math.PI * .9,
        end: 0,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 37, y: 34 },
        end: { x: 37, y: 19 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 1, x2: 37, y2: 41},
        start: 0,
        end: Math.PI,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 1, y: 17 },
        end: { x: 1, y: 28}
      },
      {
        type: 'ellipse',
        bounds: { x1: 1, y1: 5, x2: 37, y2: 49 },
        start: Math.PI,
        end: Math.PI * .75,
        direction: 'counter-clockwise'
      }
    ]
  ],
  _caret: [
    {
      type: 'line',
      start: { x: 19, y: 1 },
      end: { x: 7, y: 17 }
    },
    {
      type: 'line',
      start: { x: 19, y: 1 },
      end: { x: 31, y: 17 }
    }
  ],
  _ampersand: [
    [
      {
        type: 'line',
        start: { x: 37, y: 49 },
        end: { x: 7, y: 19 }
      },
      { 
        type: 'ellipse',
        bounds: { x1: 3, y1: 1, x2: 21, y2: 21 },
        start: Math.PI * .7,
        end: Math.PI * .35,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 16, y: 20 },
        end: {x: 6, y: 27 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 1, x2: 25, y1: 25, y2: 49 },
        start: Math.PI * 1.3,
        end: Math.PI * .15,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 23, y: 43 },
        end: { x: 33, y: 29 }
      }
    ]
  ],
  _asterisk: [
    { 
      type: 'line',
      start: { x: 19, y: 5 },
      end: { x: 19, y: 41 }
    },
    { 
      type: 'line',
      start: { x: 3.4, y: 14 },
      end: { x: 34.6, y: 32}
    },
    {
      type: 'line',
      start: { x: 34.6, y: 14},
      end: { x: 3.4, y: 32}
    }
  ],
  _leftParen: [
    {
      type: 'ellipse',
      bounds: {x1: 10, y1: -7, x2: 78, y2: 57 },
      start: Math.PI * 1.28,
      end: Math.PI * .72,
      direction: 'counter-clockwise'
    }
  ],
  _rightParen: [
    {
      type: 'ellipse',
      bounds: {x1: -40, y1: -7, x2: 29 , y2: 57 },
      start: Math.PI * 1.72,
      end: Math.PI * .28,
      direction: 'clockwise'
    }
  ],
  _hyphen: [
    {
      type: 'line',
      start: { x: 7, y: 25 },
      end: { x: 31, y: 25 }
    }
  ],
  _plus: [
    {
      type: 'line',
      start: { x: 5, y: 25 },
      end: { x: 33, y: 25 }
    },
    {
      type: 'line',
      start: { x: 19, y: 11 },
      end: { x: 19, y: 39 }
    }
  ],
  _equal: [
    {
      type: 'line',
      start: { x: 5, y: 17 },
      end: { x: 33, y: 17 }
    },
    {
      type: 'line',
      start: { x: 5, y: 33 },
      end: { x: 33, y: 33 }
    }
  ],
  _colon: [
    {
      type: 'ellipse',
      bounds: { x1: 9, y1: 18, x2: 11, y2: 20},
      start: 0,
      end: Math.PI  * 2,
      direction: 'clockwise'
    },
    {
      type: 'ellipse',
      bounds: { x1: 9, y1: 43, x2: 11, y2: 45},
      start: 0,
      end: Math.PI  * 2,
      direction: 'clockwise'
    }
  ],
  _semiColon: [
    {
      type: 'ellipse',
      bounds: { x1: 9, y1: 18, x2: 11, y2: 20},
      start: 0,
      end: Math.PI  * 2,
      direction: 'clockwise'
    },
    {
      type: 'ellipse',
      bounds: { x1: 1, y1: 1, x2: 11, y2: 49 },
      start: Math.PI * .2,
      end: Math.PI * .5,
      direction: 'clockwise'
    }

  ],
  _slash: [
    {
      type: 'line',
      start: { x: 1, y: 1 },
      end: { x: 37, y: 49 }
    }
  ],
  _backSlash: [
    {
      type: 'line',
      start: { x: 37, y: 1 },
      end: { x: 1, y: 49 }
    }
  ],
  _leftBrace: [
    [
      {
        type: 'line',
        start: {x: 28, y: 1},
        end: {x: 22, y: 1},
      },
      {
        type: 'ellipse',
        bounds: {x1: 16, y1: 1, x2: 28, y2: 13},
        start: Math.PI * 1.5,
        end: Math.PI,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 16, y: 7 },
        end: { x: 16, y: 19 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 4 , y1: 13, x2: 16, y2: 25 },
        start: 0,
        end: Math.PI * .5 ,
        direction: 'clockwise'
      },
      {
        type: 'ellipse',
        bounds: { x1: 4, y1: 25, x2: 16, y2: 37 },
        start: Math.PI * 1.5,
        end: 0,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 16, y: 31},
        end: { x: 16, y: 43 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 16, y1: 37, x2: 28, y2: 49 },
        start: Math.PI,
        end: Math.PI * .5,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 22, y: 49 },
        end: { x: 28, y: 49 }
      }
    ]
  ],
  _rightBrace: [
    [
      {
        type: 'line',
        start: {x: 16, y: 1},
        end: {x: 10, y: 1},
      },
      {
        type: 'ellipse',
        bounds: {x1: 10, y1: 1, x2: 22, y2: 13},
        start: Math.PI * 1.5,
        end: Math.PI * 2,
        direction: 'clockwise'
      },
      {
        type: 'line',
        start: { x: 22, y: 7 },
        end: { x: 22, y: 19 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 22 , y1: 13, x2: 34, y2: 25 },
        start: Math.PI,
        end: Math.PI * .5,
        direction: 'counter-clockwise'
      },
      {
        type: 'ellipse',
        bounds: { x1: 22, y1: 25, x2: 34, y2: 37 },
        start: Math.PI * 1.5,
        end: Math.PI,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 22, y: 31},
        end: { x: 22, y: 43 }
      },
      {
        type: 'ellipse',
        bounds: { x1: 22, y1: 37, x2: 10, y2: 49 },
        start: Math.PI,
        end: Math.PI * .52,
        direction: 'counter-clockwise'
      },
      {
        type: 'line',
        start: { x: 17, y: 49 },
        end: { x: 10, y: 49 }
      }
    ]
  ],
  _leftBracket: [
    [
      {
        type: 'line',
        start: {x: 24, y: 1},
        end: {x: 15, y: 1}
      },
      {
        type: 'line',
        start: { x: 15, y: 1 },
        end: { x: 15, y: 49 }
      },
      {
        type: 'line',
        start: { x: 15, y: 49 },
        end: { x: 24, y: 49 }
      }
    ]
  ],
  _rightBracket: [
    [
      {
        type: 'line',
        start: {x: 14, y: 1},
        end: {x: 23, y: 1}
      },
      {
        type: 'line',
        start: { x: 23, y: 1 },
        end: { x: 23, y: 49 }
      },
      {
        type: 'line',
        start: { x: 23, y: 49 },
        end: { x: 14, y: 49 }
      }
    ]
  ],
  _lessThan: [
    {
      type: 'line',
      start: { x: 33, y: 7 },
      end: { x: 5, y: 25 }
    },
    {
      type: 'line',
      start: { x: 5, y: 25 },
      end: { x: 33, y: 43}
    }
  ],
  _greaterThan: [
    {
      type: 'line',
      start: { x: 5, y: 7 },
      end: { x: 33, y: 25 }
    },
    {
      type: 'line',
      start: { x: 33, y: 25 },
      end: { x: 5, y: 43}
    }
  ]
    
  
};


