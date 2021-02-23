import genColor from './gen-color.js';

function genCoords() {
	return {
		x: Math.floor(Math.random() * canv.width),
		y: Math.floor(Math.random() * canv.height),
	};
}

function genRadius() {
	return Math.floor(Math.random() * 10 + 5);
}

export default function genChilden(count) {
	const children = [];

	for (let i = 0; i < count; i++) {
		children.push({
			...genCoords(),
			color: genColor(),
			radius: genRadius(),
		});
	}

	return children;
}
