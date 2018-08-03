import { ChickenScratch as cs } from './chicken-scratch.js';

// Register custom styles
cs.registerStyle('cs-green',{color: '#396'});
cs.registerStyle('cs-big',{size: 60, lineHeight: 1.1});
cs.registerStyle('cs-heavy',{strokeWidth: 8});
cs.registerStyle('cs-light',{strokeWidth: 2});
cs.registerStyle('cs-hi-transform',{maxRotation: 20, maxTranslation: .14, color: '#933', size: 24});
cs.registerStyle('cs-lo-transform',{maxRotation: 8, maxTranslation: .04, color: '#393', size: 24});
cs.registerStyle('cs-expand',{letterSpacing: .6, color: '#639', size: 24});
cs.registerStyle('cs-condense',{letterSpacing: 0, color: '#cc2', size: 24});
cs.registerStyle('cs-shadow',{shadowVisibility: true, shadowOffsetX: 5, shadowOffsetY: 3, shadowBlur: 3, shadowColor: '#bcd', size: 24});
cs.registerStyle('cs-boring',{strokeWidth: 2, maxRotation: 0, maxTranslation: 0, letterSpacing: 0.2, size: 24 });
cs.registerStyle('cs-small',{ size: 24, strokeWidth: 3 });

cs.registerStyle('cs-construction-paper',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 60, 
  color: '#58b',
  strokeWidth: 12,
  lineHeight: 1.25,
  letterSpacing: .25, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 10,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});

// Apply styles
cs.apply();
