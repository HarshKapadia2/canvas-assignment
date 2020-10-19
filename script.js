window.addEventListener
(
	"load",
	() =>
	{
		const canvas1 = document.querySelector("#canvas-1");
		const canvas2 = document.querySelector("#canvas-2");
		const canvas3 = document.querySelector("#canvas-3");

		const context1 = canvas1.getContext("2d");
		const context2 = canvas2.getContext("2d");
		const context3 = canvas3.getContext("2d");

		// Canvas 1
		// Resize canvas
		canvas1.height =  window.innerHeight / 3;
		canvas1.width =  window.innerWidth / 3;

		// Rectangle
		context1.fillRect(10, 10, 80, 50);

		// Line
		context1.beginPath();
		context1.moveTo(100, 10);
		context1.lineTo(160, 50);
		context1.stroke();

		// Triangle
		context1.beginPath();
		context1.moveTo(170, 10);
		context1.lineTo(220, 60);
		context1.lineTo(170, 110);
		context1.closePath();
		context1.stroke();

		// Circle
		context1.beginPath();
		context1.arc(270, 60, 40, 0, 2 * Math.PI);
		context1.stroke();
	}
);