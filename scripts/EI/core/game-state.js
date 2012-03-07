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
        if (this.laserBeam) {
            for (index in this.formation.spaceInvaders) {
                var spaceInvader = this.formation.spaceInvaders[index];
                if (spaceInvader.isIntersectingWith(this.laserBeam)) {
                    this.formation.spaceInvaders.splice(index, 1);
                    this.laserBeam = undefined;
                }
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

        switch (this.formation.direction) {
            case EI.entities.direction.left:
                if ((this.formation.x - this.formation.speed) < 0) {
                    this.formation.direction = EI.entities.direction.down;
                }
                break;
            case EI.entities.direction.right:
                if ((this.formation.x + this.formation.width + this.formation.speed) > this.width) {
                    this.formation.direction = EI.entities.direction.down;
                }
                break;
            case EI.entities.direction.down:
                if ((this.formation.y % 14) === 0) {
                    if (this.formation.x < 14) { // 14 being space invader width plus buffer width, UGLY!
                        this.formation.direction = EI.entities.direction.right;
                    } else {
                        this.formation.direction = EI.entities.direction.left;
                    }
                }
                break;
        }

        this.formation.step();
    }
};
