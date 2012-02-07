var ExosphereIntruders = function(c) {
    "use strict";

    var width = 224;

    var canvas = c;
    var context = canvas.getContext("2d");
    var fps = 30;
    /* Scale assumes the height and width of the canvas are a multiple of 224 by
       260. */
    var scale = canvas.width / 224;
    var intervalId;
    var laserBeam;

    var LaserTurret = function() {
        this.width = 14;
        this.speed = 8;

        this.x = 105;
        this.y = 250;

        LaserTurret.prototype.fire = function() {
            if (laserBeam === undefined) {
                var laserBeamX = this.x + 7;
                var laserBeamY = this.y + 8;
                laserBeam = new LaserBeam(laserBeamX, laserBeamY);
            }
        };

        LaserTurret.prototype.moveLeft = function() {
            if ((this.x - this.speed) > 0) {
                this.x -= this.speed;
            }
        };

        LaserTurret.prototype.moveRight = function() {
            if ((this.x + this.width + this.speed) < width) {
                this.x += this.speed;
            }
        };
    };

    var LaserBeam = function (x, y) {
        this.x = x;
        this.y = y;
        this.length = 5;
        this.speed = 16;

        LaserBeam.prototype.step = function() {
            this.y -= this.speed;
        };
    };

    var laserTurret = new LaserTurret();

    var drawFromTemplate = function(x, y, template, color) {
       context.fillStyle = color;

        return template.split(/\n/).forEach(function(pixel, row) {
            return pixel.split('').forEach(function(active, column) {
                if (active === 'x') {
                    return context.fillRect((x + column) * scale, (y + row) * scale, scale, scale);
		        }
		    });
		});
    };

    var drawLaserBeam = function () {
        if (laserBeam) {
            var template = "x\nx\nx\nx\nx\n";

            var color = "rgb(255, 0, 0)";

            if (laserBeam.y > 210) {
                color = "rgb(0, 255, 0)";
            } else if (laserBeam.y > 50) {
                color = "rgb(255, 255, 255)";
            }

            drawFromTemplate(laserBeam.x, laserBeam.y, template, color);
        }
    };

    var drawLaserTurret = function() {
        var template = "       x       \n      xxx      \n      xxx      \n xxxxxxxxxxxx \nxxxxxxxxxxxxxx\nxxxxxxxxxxxxxx\nxxxxxxxxxxxxxx";
        var color = "rgb(0, 255, 0)";

        drawFromTemplate(laserTurret.x, laserTurret.y, template, color);
    };

    var initControls = function() {
        window.addEventListener("keydown", function(event) {
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

    var clearCanvas = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    var step = function() {
       if (laserBeam) {
           if (laserBeam.y > 0) {
               laserBeam.step();
           } else {
               laserBeam = undefined;
           }
       }
    };

    var redraw = function() {
        clearCanvas();
        drawLaserTurret();
        drawLaserBeam();
    };

    var run = function() {
        step();
        redraw();
    };

    var start = function() {
        initControls();

        intervalId = setInterval(run, 1000 / fps);
    };

    var stop = function() {
        clearInterval(intervalId);
    };

    return {
        start: start,
        stop: stop
    };
};


var init = function() {
    var canvas = document.getElementById("canvas");

    var game = new ExosphereIntruders(canvas);
    game.start();
};

document.addEventListener("DOMContentLoaded", function() {
    document.removeEventListener("DOMContentLoaded", this, false);
    init();
}, false);
