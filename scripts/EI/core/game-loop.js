EI.core.gameLoop = {
    fps: 120,

    start: function() {
        var input = Object.create(EI.core.input).init(this.gameState);

        var run = function() {
                this.gameState.step();
                this.renderer.render(this.gameState);
            };

        var boundRun = run.bind(this);

        this.intervalId = setInterval(boundRun, 1000 / this.fps);
    },

    stop: function() {
        clearInterval(this.intervalId);
    }
};
