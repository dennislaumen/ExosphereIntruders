var ExosphereIntruders = function (c) {
	"use strict";

    var canvas = c;
	var context = canvas.getContext("2d");
    var fps = 30;
    /* Scale assumes the height and width of the canvas are a multiple of 224 by
       260. */
    var scale = canvas.width / 224;
    var intervalId;

	var LaserTurret = function () {
		this.width = 14 * scale;
		this.speed = 8 * scale;

        this.x = 105 * scale;
	    this.y = 250 * scale;

        LaserTurret.prototype.fire = function () {
            // TODO add firing capabilities.
        };

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

	    context.lineTo(x + (14 * scale), y);
	    context.lineTo(x + (14 * scale), y - (3 * scale));
	    context.lineTo(x + (13 * scale), y - (3 * scale));
	    context.lineTo(x + (13 * scale), y - (4 * scale));
	    context.lineTo(x + (8 * scale), y - (4 * scale));
	    context.lineTo(x + (8 * scale), y - (6 * scale));
	    context.lineTo(x + (7 * scale), y - (6 * scale));
	    context.lineTo(x + (7 * scale), y - (7 * scale));
	    context.lineTo(x + (7 * scale), y - (6 * scale));
	    context.lineTo(x + (6 * scale), y - (6 * scale));
	    context.lineTo(x + (6 * scale), y - (4 * scale));
	    context.lineTo(x + (1 * scale), y - (4 * scale));
	    context.lineTo(x + (1 * scale), y - (3 * scale));
	    context.lineTo(x, y - (3 * scale));
	    context.lineTo(x, y);

        context.fillStyle = "rgb(124, 252, 0)";
	    context.fill();
	};

	var initControls = function () {
	    window.addEventListener("keydown", function (event) {
	        switch (event.keyCode) {
            case 32:
                laserTurret.fire();
                break;

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
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(0, 0, canvas.width, canvas.height);
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
