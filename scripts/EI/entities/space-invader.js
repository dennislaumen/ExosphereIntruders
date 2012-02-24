EI.entities.spaceInvader = Object.create(EI.core.rectangle, {
    height: {
        value: 8
    },

    width: {
        value: 11
    }
});

EI.entities.crab = Object.create(EI.entities.spaceInvader);
EI.entities.octopus = Object.create(EI.entities.spaceInvader);
EI.entities.squid = Object.create(EI.entities.spaceInvader);

