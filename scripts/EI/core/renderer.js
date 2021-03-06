EI.core.renderer = {
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "rgb(0, 0, 0)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    draw: function(rectangle, template) {
        this.context.fillStyle = template.color;

        return template.shape.split(/\n/).forEach(function(pixel, row) {
            return pixel.split('').forEach(function(active, column) {
                if (active === '#') {
                    return this.context.fillRect((rectangle.x + column) * this.scale, (rectangle.y + row) * this.scale, this.scale, this.scale);
                }
            }, this);
        }, this);
    },

    render: function(gameState) {
        this.clear();

        this.draw(gameState.laserTurret, EI.assets.laserTurretTemplate);

        if (gameState.laserBeam) {
            this.draw(gameState.laserBeam, EI.assets.laserBeamTemplate);
        }

        for (var invaderIndex in gameState.formation.spaceInvaders) {
            var invader = gameState.formation.spaceInvaders[invaderIndex];
            var template;

            // TODO: fix this, incredibly ugly!!!
            if (EI.entities.crab.isPrototypeOf(invader)) {
                template = EI.assets.crabTemplate;    
            } else if (EI.entities.squid.isPrototypeOf(invader)) {
                template = EI.assets.squidTemplate;
            } else if (EI.entities.octopus.isPrototypeOf(invader)) {
                template = EI.assets.octopusTemplate;
            }

            this.draw(invader, template);
        }
        
    },
};
