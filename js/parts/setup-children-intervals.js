import renderChildren from './render-children.js';

let lastTime;
const speed = 20 / 1000;

export default function setupChildrenIntervals(ctx, children) {
	function start(timestamp) {
		const time = timestamp - lastTime;

		children.forEach((child, i) => {
			if (time == time) {
				if (child.size > 20 && child.size < 40 && child.type != 'ended') {
					child.type = 'triangle';
				} else if (
					child.size > 40 &&
					child.size < 60 &&
					child.type != 'ended'
				) {
					child.type = 'square';
				} else if (
					child.size > 60 &&
					child.size < 80 &&
					child.type != 'ended'
				) {
					child.type = 'rectangle';
				} else if (
					child.size > 80 &&
					child.size < 100 &&
					child.type != 'ended'
				) {
					child.type = 'pentagon';
				} else if (
					child.size > 100 &&
					child.size < 120 &&
					child.type != 'ended'
				) {
					child.type = 'hexagon';
				} else if (child.size > 120) {
					child.type = 'ended';
				}

				if (child.type != 'ended') {
					child.size += time * speed;
				} else {
					if (child.size > 0) {
						child.size -= time * speed;
					} else {
						const index = children.indexOf(child);
						children.splice(index, 1);
					}
				}
			}
		});

		renderChildren(ctx, children);
		requestAnimationFrame(start);
		lastTime = timestamp;
	}

	requestAnimationFrame(start);
}
