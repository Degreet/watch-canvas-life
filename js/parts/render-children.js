import renderChild from './render-child.js';

export default function renderChildren(ctx, children) {
	ctx.clearRect(0, 0, canv.width, canv.height);
	children.forEach((child) => renderChild(ctx, child));
}
