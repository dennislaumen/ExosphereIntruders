EI.entities.laserBeam = Object.create(EI.core.rectangle, {
    width: {
        value: 1
    },

    height: {
        value: 5
    },

    speed: {
        value: 4
    },

    // TODO: refactor this into the game state. The laser beam does not know whether it's on screen.
    isOnScreen: {
        value: function() {
            return this.bottom() > 0;
        }
    },

    step: {
        value: function() {
            this.y = this.y - this.speed;
            return this;
        }
    }
});
