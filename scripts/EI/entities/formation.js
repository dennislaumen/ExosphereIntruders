EI.entities.direction = {
    left: { value: 0 },
    right: { value: 1 },
    down: { value: 2 }
};

// The following 66 Object.create's are extremely dumb, but I'm sticking to this prototypal thing for now.
EI.entities.formation = {
    x: 70,

    y: 2,

    width: 152,

    speed: 0.25,

    direction: EI.entities.direction.left,

    spaceInvaders: [
        Object.create(EI.entities.octopus, {
            x: {
                value: 70,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }),
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 84,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }),
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 98,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }),
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 112,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }),
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 126,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.octopus, {
            x: {
                value: 140,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 154,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.octopus, {
            x: {
                value: 168,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 182,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 196,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.octopus, {
            x: {
                value: 210,
                writable: true
            },

            y: {
                value: 2,
                writable: true
            }
        }),

        Object.create(EI.entities.crab, {
            x: {
                value: 70,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 84,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 98,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 112,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 126,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.crab, {
            x: {
                value: 140,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 154,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.crab, {
            x: {
                value: 168,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 182,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 196,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 210,
                writable: true
            },

            y: {
                value: 14,
                writable: true
            }
        }),
    
        Object.create(EI.entities.crab, {
            x: {
                value: 70,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 84,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 98,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 112,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }),
        
        Object.create(EI.entities.crab, {
            x: {
                value: 126,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.crab, {
            x: {
                value: 140,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 154,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.crab, {
            x: {
                value: 168,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 182,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 196,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.crab, {
            x: {
                value: 210,
                writable: true
            },

            y: {
                value: 26,
                writable: true
            }
        }),    

        Object.create(EI.entities.squid, {
            x: {
                value: 70,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 84,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 98,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 112,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 126,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.squid, {
            x: {
                value: 140,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 154,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.squid, {
            x: {
                value: 168,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 182,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 196,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 210,
                writable: true
            },

            y: {
                value: 38,
                writable: true
            }
        }),
    
        Object.create(EI.entities.squid, {
            x: {
                value: 70,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 84,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 98,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 112,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }),
        
        Object.create(EI.entities.squid, {
            x: {
                value: 126,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.squid, {
            x: {
                value: 140,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 154,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
 
        Object.create(EI.entities.squid, {
            x: {
                value: 168,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 182,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 196,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
        
        Object.create(EI.entities.squid, {
            x: {
                value: 210,
                writable: true
            },

            y: {
                value: 50,
                writable: true
            }
        }), 
    ],

    moveLeft: function() {
        this.x -= this.speed;

        for (index in this.spaceInvaders) {
            this.spaceInvaders[index].moveLeft(this.speed);
        }
    },

    moveRight: function() {
        this.x += this.speed;

        for (index in this.spaceInvaders) {
            this.spaceInvaders[index].moveRight(this.speed);
        }
    },

    moveDown: function() {
        this.y += this.speed;

        for (index in this.spaceInvaders) {
            this.spaceInvaders[index].moveDown(this.speed);
        }
    },

    step: function() {
        switch (this.direction) {
            case EI.entities.direction.left: 
                this.moveLeft();
                break;
            case EI.entities.direction.right:
                this.moveRight();
                break;
            case EI.entities.direction.down:
                this.moveDown();
                break;
        }
    }
};

