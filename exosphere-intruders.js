var ExosphereIntruders = function (c) {
	"use strict";

    var canvas = c;
	var context = canvas.getContext("2d");
    var fps = 30;
    var intervalId;

	var LaserTurret = function () {
	    this.x = 105;
	    this.y = 250;
		this.width = 14;
		this.speed = 8;

		LaserTurret.prototype.moveLeft = function () {
			if ((this.x - this.speed) > 0) {
                this.x -= this.speed;
			}
		};

		LaserTurret.prototype.moveRight = function () {
			if ((this.x + this.width + this.speed) < canvas.width) {
                this.x += this.speed;
			}
		};
	};

	var laserTurret = new LaserTurret();

	var drawLaserTurret = function () {
	    var x = laserTurret.x;
	    var y = laserTurret.y;

	    context.beginPath();

	    context.moveTo(x, y);

	    context.lineTo(x + 14, y);
	    context.lineTo(x + 14, y - 3);
	    context.lineTo(x + 13, y - 3);
	    context.lineTo(x + 13, y - 4);
	    context.lineTo(x + 8, y - 4);
	    context.lineTo(x + 8, y - 6);
	    context.lineTo(x + 7, y - 6);
	    context.lineTo(x + 7, y - 7);
	    context.lineTo(x + 7, y - 6);
	    context.lineTo(x + 6, y - 6);
	    context.lineTo(x + 6, y - 4);
	    context.lineTo(x + 1, y - 4);
	    context.lineTo(x + 1, y - 3);
	    context.lineTo(x, y - 3);
	    context.lineTo(x, y);

	    context.fill();
	};

	var initControls = function () {
	    window.addEventListener("keydown", function (event) {
	        switch (event.keyCode) {
	        case 37:
	            laserTurret.moveLeft();
	            break;

	        case 39:
	            laserTurret.moveRight();
	            break;
	        }
	    }, false);

	};

	var clearCanvas = function () {
	    context.clearRect(0, 0, canvas.width, canvas.height);
	};

	var run = function () {
	    clearCanvas();
	    drawLaserTurret();
	};

	var start = function () {
		initControls();

	    intervalId = setInterval(run, 1000 / fps);
	};

	var stop = function () {
	    clearInterval(intervalId);
	};

	return {
		start: start,
		stop: stop
	};
};


var init = function () {
    var canvas = document.getElementById("canvas");

    var game = new ExosphereIntruders(canvas);
    game.start();
};

document.addEventListener("DOMContentLoaded", function () {
    document.removeEventListener("DOMContentLoaded", this, false);
    init();
}, false);
