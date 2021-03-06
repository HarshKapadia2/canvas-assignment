const canvas1 = document.querySelector("#canvas-1");
const canvas2 = document.querySelector("#canvas-2");
const canvas3 = document.querySelector("#canvas-3");

const img = document.querySelector("img");

window.addEventListener
(
	"load",
	() =>
	{
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
		context1.lineWidth = 5;
		context1.beginPath();
		context1.moveTo(170, 10);
		context1.lineTo(220, 60);
		context1.lineTo(170, 110);
		context1.closePath();
		context1.stroke();

		// Circle
		context1.strokeStyle = "red";
		context1.beginPath();
		context1.arc(270, 60, 40, 0, 2 * Math.PI);
		context1.stroke();


		// Canvas 2
		// Resize canvas
		canvas2.height =  window.innerHeight / 3;
		canvas2.width =  window.innerWidth / 3;

		// Image
		context2.drawImage(img, 10, 10);


		// canvas 3
		// Resize canvas
		canvas3.height =  window.innerHeight / 2.5;
		canvas3.width =  window.innerWidth / 2.5;

		// Car
		// Car body
		context3.beginPath();
		context3.lineWidth = "10";
		context3.strokeStyle = "black";
		context3.rect(10, 150, 400, 100);
		context3.stroke();

		// Car tyres
		context3.beginPath();
		context3.arc(80, 300, 50, 0, 2 * Math.PI);
		context3.strokeStyle = "red";
		context3.stroke();

		context3.beginPath();
		context3.arc(350, 300, 50, 0, 2 * Math.PI);
		context3.strokeStyle = "red";
		context3.stroke();

		// Car roof
		context3.moveTo(20, 150);
		context3.lineTo(40, 50);
		context3.stroke();

		context3.moveTo(40, 50);
		context3.lineTo(100, 50);
		context3.stroke();

		context3.moveTo(100, 50);
		context3.lineTo(150, 150);
		context3.stroke();
	}
);