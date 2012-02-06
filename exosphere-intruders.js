var ExosphereIntruders = function(c) {
    "use strict";

    var canvas = c;
    var context = canvas.getContext("2d");
    var fps = 30;
    /* Scale assumes the height and width of the canvas are a multiple of 224 by
       260. */
    var scale = canvas.width / 224;
    var intervalId;
    var laserBeam;

    var LaserTurret = function() {
        this.width = 14 * scale;
        this.speed = 8 * scale;

        this.x = 105 * scale;
        this.y = 250 * scale;

        LaserTurret.prototype.fire = function() {
            if (laserBeam === undefined) {
                var laserBeamX = this.x + (7 * scale);
                var laserBeamY = this.y + (8 * scale);
                laserBeam = new LaserBeam(laserBeamX, laserBeamY);
            }
        };

        LaserTurret.prototype.moveLeft = function() {
            if ((this.x - this.speed) > 0) {
                this.x -= this.speed;
            }
        };

        LaserTurret.prototype.moveRight = function() {
            if ((this.x + this.width + this.speed) < canvas.width) {
                this.x += this.speed;
            }
        };
    };
    
    var LaserBeam = function (x, y) {
        this.x = x;
        this.y = y;
        this.length = 5 * scale;
        this.speed = 16 * scale;
        
        LaserBeam.prototype.step = function() {
            this.y -= this.speed;
        }
    };

    var laserTurret = new LaserTurret();

    var drawLaserBeam = function () {
        if (laserBeam) {
            var x = laserBeam.x;
            var y = laserBeam.y;
            var length = laserBeam.length;

            context.beginPath();

            context.moveTo(x, y);

            context.lineTo(x + (1 * scale), y);
            context.lineTo(x + (1 * scale), y - (length * scale));
            context.lineTo(x, y - (length * scale));
            context.lineTo(x, y);
            
            if (y > (210 * scale)) {
                context.fillStyle = "rgb(0, 255, 0)";    
            } else if (y > (50 * scale)) {
                context.fillStyle = "rgb(255, 255, 255)";
            } else {
                context.fillStyle = "rgb(255, 0, 0)";
            }
            
            context.fill();
        }
    };

    var drawLaserTurret = function() {
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

        context.fillStyle = "rgb(0, 255, 0)";
        context.fill();
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
