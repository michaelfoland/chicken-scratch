import cs from './modules/chicken-scratch.js';

cs.registerStyle('chicken-scratch-header', { size: 48, strokeWidth: 8});
cs.registerStyle('chicken-scratch-wide', { size: 24, strokeWidth: 12});
cs.registerStyle('chicken-scratch-thin', { size: 24, strokeWidth: 4});
cs.registerStyle('chicken-scratch-expand', { size: 24, letterSpacing: .85, strokeWidth: 8});
cs.registerStyle('chicken-scratch-condense', { size: 24, strokeWidth: 5, letterSpacing: -0.25});
cs.registerStyle('chicken-scratch-shadow', { size: 24, strokeWidth: 8, shadowVisibility: true });
cs.registerStyle('chicken-scratch-plain', { size: 24, maxTranslation: 0, maxRotation: 0, strokeWidth: 2 });
cs.registerStyle('chicken-scratch-small', { size: 16, strokeWidth: 2, color: '#444'});

cs.registerStyle('big-red',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 48, 
  color: '#c66',
  strokeWidth: 10,
  lineHeight: 1.25,
  letterSpacing: .1, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 8,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});

cs.registerStyle('big-orange',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 48, 
  color: '#ea6',
  strokeWidth: 10,
  lineHeight: 1.25,
  letterSpacing: .1, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 8,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});

cs.registerStyle('big-green',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 48, 
  color: '#6ea',
  strokeWidth: 10,
  lineHeight: 1.25,
  letterSpacing: .1, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 8,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});

cs.registerStyle('big-purple',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 48, 
  color: '#a6e',
  strokeWidth: 10,
  lineHeight: 1.25,
  letterSpacing: .1, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 8,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});

cs.registerStyle('cs-red', { size: 24, strokeWidth: 3, color: '#b44', maxRotation: 8, maxTranslation: .05 });
cs.registerStyle('cs-gray', { size: 24, strokeWidth: 3, color: '#272', maxRotation: 8, maxTranslation: .05 });

// Apply styles
cs.apply();
