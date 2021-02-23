// get canvas context
const ctx = canv.getContext('2d');

// set canvas width and height for screen
onload = onresize = () => {
	const width = innerWidth / 1.2;
	const height = innerHeight / 1.2;

	canv.width = width;
	canv.height = height;
};
