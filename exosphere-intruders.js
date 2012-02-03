"use strict";

// Laser Turret

var LaserTurret = function () {
    this.x = 100;
    this.y = 100;
};

LaserTurret.prototype.moveLeft = function () {
    this.x -= 1;
};

LaserTurret.prototype.moveRight = function () {
    this.x += 1;
};


// Laser Turret Controller

var LaserTurretController = function (controlledTurret) {
    var laserTurret = controlledTurret;

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


// Laser Turret Drawer

var LaserTurretDrawer = function (canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
};

LaserTurretDrawer.prototype.draw = function (laserTurret) {
    var x = laserTurret.x;
    var y = laserTurret.y;

    this.context.beginPath();

    this.context.moveTo(x, y);

    this.context.lineTo(x + 14, y);
    this.context.lineTo(x + 14, y - 3);
    this.context.lineTo(x + 13, y - 3);
    this.context.lineTo(x + 13, y - 4);
    this.context.lineTo(x + 8, y - 4);
    this.context.lineTo(x + 8, y - 6);
    this.context.lineTo(x + 7, y - 6);
    this.context.lineTo(x + 7, y - 7);
    this.context.lineTo(x + 7, y - 6);
    this.context.lineTo(x + 6, y - 6);
    this.context.lineTo(x + 6, y - 4);
    this.context.lineTo(x + 1, y - 4);
    this.context.lineTo(x + 1, y - 3);
    this.context.lineTo(x, y - 3);
    this.context.lineTo(x, y);

    this.context.fill();
};


// Game

var Game = function (canvas) {
    this.canvas = canvas;
    this.fps = 30;
    this.laserTurret = new LaserTurret();
    this.laserTurretController = new LaserTurretController(this.laserTurret);
    this.laserTurretDrawer = new LaserTurretDrawer(canvas);
};

Game.prototype.clearCanvas = function () {
    var context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.run = function () {
    this.clearCanvas();
    this.laserTurretDrawer.draw(this.laserTurret);
};

Game.prototype.start = function () {
    var boundRun = Game.prototype.run.bind(this);
    this.intervalId = setInterval(boundRun, 1000 / this.fps);
};

Game.prototype.stop = function () {
    clearInterval(this.intervalId);
};


// Initialization

var init = function () {
    var canvas = document.getElementById("canvas");

    var game = new Game(canvas);
    game.start();
};

document.addEventListener("DOMContentLoaded", function () {
    document.removeEventListener("DOMContentLoaded", this, false);
    init();
}, false);
