import genChilden from './parts/gen-children.js';
import setup from './parts/setup-canvas-size.js';

const children = genChilden(5);

// get canvas context
const ctx = canv.getContext('2d');
setup(ctx, children);
