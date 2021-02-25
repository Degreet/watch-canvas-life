import genChilden from './parts/gen-children.js';
import setup from './parts/setup.js';

const ctx = canv.getContext('2d');
const children = genChilden(5);

setup(ctx, children);
