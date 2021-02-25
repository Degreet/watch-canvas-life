export default function drawPolygon(ctx, x, y, size, angles, rotation, color) {
	ctx.fillStyle = color;
	ctx.beginPath();

	for (let i = 0; i < angles; i++) {
		const ang = (i / angles) * Math.PI * 2 + rotation;
		ctx.lineTo(Math.cos(ang) * size + x, Math.sin(ang) * size + y);
	}

	ctx.closePath();
	ctx.fill();
}
