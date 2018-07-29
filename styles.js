const badStyle = {
  maxRotation: 'a',
  maxTranslation: true,
  size: '-5',
  color: false,
  lineWidth: 1,
  lineHeight: -1,
  letterSpacing: -2,
  lineCap: 'squire',
  shadowVisibility: 'false',
  shadowBlur: -2,
  shadowOffsetX: 'x',
  shadowOffsetY: 'y',
  shadowColor: 'blark'
};

const chickenScratch = {
  name: 'chicken-scratch',
  camelName: 'chickenScratch',
  maxRotation: 10,
  maxTranslation: .10,
  size: 24, // not sure what value to use here; this is character height in px
  color: 'black',
  lineWidth: 5,
  lineHeight: 1.4,
  letterSpacing: .2, // i.e, the space btw chars should be 20% (.20) of char width 
  lineCap: 'square',
  shadowVisibility: false, 
  shadowBlur: 6,
  shadowOffsetX: 4,
  shadowOffsetY: 2,
  shadowColor: '#555'
};

const chickenScratchGreen = {
  color: '#396'
}

const chickenScratchSmall = {
  size: 16 // not sure what value to use here; this is character height in px
}

const chickenScratchFat = {
  lineWidth: 12
}

const chickenScratchThin = {
  lineWidth: 2
}

const chickenScratchShadow = {
  shadowVisibility: true
}

const chickenScratchHighTranslation = {
  maxTranslation: .20,
  maxRotation: 0,
  color: 'red'
}

const chickenScratchLowTranslation = {
  maxTranslation: .05,
  maxRotation: 0,
  color: 'orange'
}

const chickenScratchHighRotation = {
  maxTranslation: .0,
  maxRotation: 20,
  color: 'yellow'
}

const chickenScratchLowRotation = {
  maxTranslation: .0,
  maxRotation: 5,
  color: 'green'
}

const  chickenScratchExpanded = {
  letterSpacing: .6,
  color: 'blue'
}

const chickenScratchCondensed = {
  letterSpacing: .0,
  color: 'purple'
}

const chickenScratchRound = {
  lineCap: 'round'
};

const chickenScratchStraight = {
  maxRotation: 0,
  maxTranslation: 0,
  lineWidth: 2,
  lineCap: 'butt'
};

const constructionPaper = {
  name: 'construction-paper',
  camelName: 'constructionPaper',
  maxRotation: 10,
  maxTranslation: .10,
  size: 72, 
  color: '#58b',
  lineWidth: 12,
  lineHeight: 1.25,
  letterSpacing: .25, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 10,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
};


// OLD SHADOW FORMAT
/*
  shadow: { 
    draw: true,
    blur: 10,
    offsetX: 5,
    offsetY: 3,
    color: '#864'
  }
*/