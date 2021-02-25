import renderChildren from './render-children.js';

let lastTime;
const speed = 2 / 1000;

export default function setupChildrenIntervals(ctx, children) {
	function start(timestamp) {
		const time = timestamp - lastTime;

		children.forEach((child) => {
			if (time == time) {
				if (child.size > 20 && child.size < 40) {
					child.type = 'triangle';
				}

				child.size += time * speed;
			}
		});

		renderChildren(ctx, children);
		requestAnimationFrame(start);
		lastTime = timestamp;
	}

	requestAnimationFrame(start);
}
