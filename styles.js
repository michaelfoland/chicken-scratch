const chickenScratch = {
  name: 'chicken-scratch',
  camelName: 'chickenScratch',
  maxRotation: 10,
  maxTranslation: .1,
  size: 32, // not sure what value to use here; this is character height in px
  color: 'black',
  lineWidth: 8,
  lineHeight: 1.4,
  letterSpacing: .2, // i.e, the space btw chars should be 20% (.20) of char width 
  lineCap: 'square',
  shadow: { 
    draw: false,
    blur: 6,
    offsetX: 4,
    offsetY: 2,
    color: '#555'
  }
};

const constructionPaper = {
  name: 'construction-paper',
  camelName: 'constructionPaper',
  maxRotation: 10,
  maxTranslation: .1,
  size: 72, 
  color: '#58b',
  lineWidth: 12,
  lineHeight: 1.25,
  letterSpacing: .25, 
  lineCap: 'square',
  shadow: { 
    draw: true,
    blur: 10,
    offsetX: 5,
    offsetY: 3,
    color: '#864'
  }
};