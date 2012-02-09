/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function() {
    var initializing = false,
        fnTest = /xyz/.test(function() {
            xyz;
        }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function() {};

    // Create a new Class that inherits from this class
    Class.extend = function(prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
                return function() {
                    var tmp = this._super;

                    // Add a new ._super() method that is the same method
                    // but on the super-class
                    this._super = _super[name];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            })(name, prop[name]) : prop[name];
        }

        // The dummy class constructor

        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init) this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
})();

var ExosphereIntruders = function(c) {
    "use strict";

    var width = 224;
    var height = 260;

    var canvas = c;
    var context = canvas.getContext("2d");
    var fps = 120;
	/* Scale assumes the height and width of the canvas are a multiple of 224 by
   	   260. */
    var scale = canvas.width / width;
    var intervalId;

    var GraphicalRectangle = Class.extend({
        init: function(x, y, width, height, color, template) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.template = template;
        },

        left: function() {
            return this.x;
        },

        right: function() {
            return this.x + this.width;
        },

        top: function() {
            return this.y;
        },

        bottom: function() {
            return this.y + this.height;
        },

        draw: function(context) {
            context.fillStyle = this.color;

            return this.template.split(/\n/).forEach(function(pixel, row) {
                return pixel.split('').forEach(function(active, column) {
                    if (active === '#') {
                        return context.fillRect((this.x + column) * scale, (this.y + row) * scale, scale, scale);
                    }
                }, this);
            }, this);
        },

        isIntersectingWith: function(other) {
            return !(this.left() > other.right() || this.right() < other.left() || this.top() > other.bottom() || this.bottom() < other.top());
        }
    });

    var LaserTurret = GraphicalRectangle.extend({
        init: function() {
            this._super(105, 250, 14, 7, "rgb(0, 255, 0)", "       #   \n      ###  \n      ###  \n ############ \n##############\n##############\n##############");
            this.speed = 8;
        },

        fire: function() {
            if (laserBeam === undefined) {
                laserBeam = new LaserBeam(this.x + 7, this.y + 8);
            }

            return laserBeam;
        },

        moveLeft: function() {
            if ((this.x - this.speed) > 0) {
                this.x -= this.speed;
            }

            return this;
        },

        moveRight: function() {
            if ((this.x + this.width + this.speed) < width) {
                this.x += this.speed;
            }

            return this;
        },
    });

    var LaserBeam = GraphicalRectangle.extend({
        init: function(x, y) {
            this._super(x, y, 1, 5, "rgb(255, 255, 255)", "#\n#\n#\n#\n#\n");
            this.speed = 4;
        },

        isOnScreen: function() {
            return this.y > 0;
        },

        step: function() {
            this.y -= this.speed;
            return this;
        }
    });

    var SpaceInvader = GraphicalRectangle.extend({
        init: function(x, y) {
            this._super(x, y, 11, 8, "rgb(255, 255, 255)", "   #     #  \n    #   #   \n   #######  \n  ## ### ## \n ###########\n # ####### #\n # #     # #\n    ## ##   ");
        },
    });
    
    var laserBeam;
    var laserTurret = new LaserTurret();
    var spaceInvader = new SpaceInvader(100, 100);

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
        if (spaceInvader && laserBeam) {
            if (spaceInvader.isIntersectingWith(laserBeam)) {
                console.log("Space Invader shot down!");
                spaceInvader = undefined;
                laserBeam = undefined;
            }
        }

        if (laserBeam) {
            // A player can only shoot one laser beam at a time. We'll make 
            // 'room' for a new laser beam once the previous one is off screen.
            if (laserBeam.isOnScreen()) {
                laserBeam.step();
            } else {
                laserBeam = undefined;
            }
        }
    };

    var redraw = function() {
        clearCanvas();

        laserTurret.draw(context);

        if (laserBeam) {
            laserBeam.draw(context);
        }

        if (spaceInvader) {
            spaceInvader.draw(context);
        }
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
