import drawEllipse from './draw-ellipse.js';
import drawTriangle from './draw-triangle.js';
import drawRectangle from './draw-rectangle.js';
import drawPolygon from './draw-polygon.js';
import drawCross from './draw-cross.js';

export default function renderChild(ctx, child) {
	if (child.type == 'circle') {
		drawEllipse(ctx, child.x, child.y, child.size, child.color);
	} else if (child.type == 'triangle') {
		drawTriangle(ctx, child.x, child.y, child.size * 1.8, child.color);
	} else if (child.type == 'square') {
		drawRectangle(ctx, child.x, child.y, child.size, child.size, child.color);
	} else if (child.type == 'rectangle') {
		drawRectangle(
			ctx,
			child.x,
			child.y,
			child.size + 60,
			child.size,
			child.color
		);
	} else if (child.type == 'pentagon') {
		drawPolygon(
			ctx,
			child.x,
			child.y,
			child.size,
			5,
			-(Math.PI / 10),
			child.color
		);
	} else if (child.type == 'hexagon') {
		drawPolygon(ctx, child.x, child.y, child.size, 6, 0, child.color);
	} else {
		drawCross(ctx, child.x, child.y, child.size, child.color);
	}
}
