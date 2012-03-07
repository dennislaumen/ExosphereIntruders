EI.entities.spaceInvader = Object.create(EI.core.rectangle, {
    height: {
        value: 8
    },

    width: {
        value: 12
    },

    moveLeft: {
        value: function(speed) {
            this.x -= speed;
            return this;
        }
    },

    moveRight: {
        value: function(speed) {
            this.x += speed;
            return this;
        }
    },

    moveDown: {
        value: function(speed) {
            this.y += speed;
            return this;
        }
    }
});

EI.entities.crab = Object.create(EI.entities.spaceInvader);
EI.entities.octopus = Object.create(EI.entities.spaceInvader);
EI.entities.squid = Object.create(EI.entities.spaceInvader);

