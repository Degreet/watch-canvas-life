import genChilden from './gen-children.js';
import renderChildren from './render-children.js';
import setupChildrenIntervals from './setup-children-intervals.js';

export default function setup(ctx, children) {
	onload = onresize = () => {
		const width = innerWidth / 1.2;
		const height = innerHeight / 1.2;

		canv.width = width;
		canv.height = height;

		renderChildren(ctx, children);
		setupChildrenIntervals(ctx, children);

		const createChild = () => children.push(genChilden(1)[0]);
		setInterval(createChild, 4000);
		onkeydown = (e) => e.key == ' ' && createChild();
	};
}
