export default function drawRectangle(ctx, x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x - width / 2, y - height / 2, width, height);
}
