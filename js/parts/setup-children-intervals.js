import renderChildren from './render-children.js';

let lastTime;
const speed = 2 / 1000;

export default function setupChildrenIntervals(ctx, children) {
	function start(timestamp) {
		const time = timestamp - lastTime;

		children.forEach((child) => {
			if (isNaN(time)) return;

			if (child.type != 'circle') {
				if (child.size > 20 && child.size < 40) {
					child.type = 'square';
				} else if (child.size > 40 && child.size < 60) {
					child.type = 'pentagon';
				} else if (child.size > 60 && child.size < 80) {
					child.type = 'hexagon';
				} else if (child.size > 120) {
					child.type = 'circle';
				}

				child.size += time * speed;
			} else if (child.size > 20) {
				child.size -= time * speed;
			} else {
				const index = children.indexOf(child);
				children.splice(index, 1);
			}
		});

		renderChildren(ctx, children);
		requestAnimationFrame(start);
		lastTime = timestamp;
	}

	requestAnimationFrame(start);
}
