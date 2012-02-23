EI.entities.laserTurret = Object.create(EI.core.rectangle, {
    x: {
        value: 105
    },

    y: {
        value: 250
    },

    width: {
        value: 14
    },

    height: {
        value: 7
    },

    speed: {
        value: 8
    },

    fire: {
        value: function() {
            return laserBeam = Object.create(EI.entities.laserBeam, {
                x: {
                    value: this.left() + (this.width / 2),
                    writable: true
                },

                y: {
                    value: this.top() - EI.entities.laserBeam.height,
                    writable: true
                }
            });
        }
    },

    moveLeft: {
        value: function() {
            this.x -= this.speed;
            return this;
        }
    },

    moveRight: {
        value: function() {
            this.x += this.speed;
            return this;
        }
    }
});
