export default function drawTriangle(ctx, x, y, size, color, angle = 0) {
	const r = Math.sqrt(size ** 2 - (size / 2) ** 2) / 3;

	const x1 = 2 * r * Math.cos(((150 + angle) / 360) * 2 * Math.PI) + x;
	const x2 = 2 * r * Math.cos(((30 + angle) / 360) * 2 * Math.PI) + x;
	const x3 = 2 * r * Math.cos(((270 + angle) / 360) * 2 * Math.PI) + x;

	const y1 = 2 * r * Math.sin(((150 + angle) / 360) * 2 * Math.PI) + y;
	const y2 = 2 * r * Math.sin(((30 + angle) / 360) * 2 * Math.PI) + y;
	const y3 = 2 * r * Math.sin(((270 + angle) / 360) * 2 * Math.PI) + y;

	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.lineTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.closePath();
	ctx.fill();
}
