import renderChild from './render-child.js';

export default function setup(ctx, children) {
	// set canvas width and height for screen
	onload = onresize = () => {
		const width = innerWidth / 1.2;
		const height = innerHeight / 1.2;

		canv.width = width;
		canv.height = height;

		children.forEach((child) => renderChild(ctx, child));
	};
}
