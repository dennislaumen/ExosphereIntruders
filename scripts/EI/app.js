var EI = {};

EI.assets = {};

EI.core = {};

EI.entities = {};

var init = function(scale) {
        var width = 224;
        var height = 260;

        var canvas = document.getElementById("canvas");
        canvas.width = width * scale;
        canvas.height = height * scale;

        var context = canvas.getContext("2d");

        var gameLoop = Object.create(EI.core.gameLoop, {
            gameState: {
                value: Object.create(EI.core.gameState, {
                    height: {
                        value: height
                    },

                    width: {
                        value: width
                    },

                    formation: {
                        value: Object.create(EI.entities.formation)
                    },

                    laserTurret: {
                        value: Object.create(EI.entities.laserTurret)
                    }
                })
            },

            renderer: {
                value: Object.create(EI.core.renderer, {
                    canvas: {
                        value: canvas
                    },

                    context: {
                        value: context
                    },

                    width: {
                        value: width
                    },

                    height: {
                        value: height
                    },

                    scale: {
                        value: scale
                    }
                })
            }
        });

        gameLoop.start();
    };

document.addEventListener("DOMContentLoaded", function() {
    document.removeEventListener("DOMContentLoaded", this, false);
    init(2);
}, false);
