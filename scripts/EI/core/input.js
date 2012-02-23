EI.core.input = {
    init: function(gameState) {
        window.addEventListener("keydown", function(event) {
            switch (event.keyCode) {
            case 32:
                gameState.fireLaserBeam();
                break;

            case 37:
                gameState.moveLaserTurretLeft();
                break;

            case 39:
                gameState.moveLaserTurretRight();
                break;
            }
        }, false);
    }
};
