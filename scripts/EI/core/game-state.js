EI.core.gameState = {

    fireLaserBeam: function() {
        // TODO: verify there's only one beam in play.
        if (this.laserBeam === undefined) {
            this.laserBeam = this.laserTurret.fire();
        }

        return this;
    },

    moveLaserTurretLeft: function() {
        if ((this.laserTurret.left() - this.laserTurret.speed) > 0) {
            this.laserTurret.moveLeft();
        }

        return this;
    },

    moveLaserTurretRight: function() {
        if ((this.laserTurret.right() + this.laserTurret.speed) < this.width) {
            this.laserTurret.moveRight();
        }
        return this;
    },

    step: function() {
        // TODO: Loop through 'state' and call step on each entity.
        if (this.spaceInvader && this.laserBeam) {
            if (this.spaceInvader.isIntersectingWith(this.laserBeam)) {
                this.spaceInvader = undefined;
                this.laserBeam = undefined;
            }
        }

        if (this.laserBeam) {
            // A player can only shoot one laser beam at a time. We'll make
            // 'room' for a new laser beam once the previous one is off screen.
            if (this.laserBeam.isOnScreen()) {
                this.laserBeam.step();
            } else {
                this.laserBeam = undefined;
            }
        }
    }
};
