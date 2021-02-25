import drawEllipse from './draw-ellipse.js';
import drawTriangle from './draw-triangle.js';

export default function renderChild(ctx, child) {
	if (child.type == 'circle') {
		drawEllipse(ctx, child.x, child.y, child.size, child.color);
	} else if (child.type == 'triangle') {
		drawTriangle(ctx, child.x, child.y, child.size, child.color);
	}
}
