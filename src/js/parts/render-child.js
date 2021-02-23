import drawEllipse from './draw-ellipse.js';

export default function renderChild(ctx, child) {
	drawEllipse(ctx, child.x, child.y, child.radius, child.color);
}
