ig.module('game.levels.abilities')
    .requires('impact.image', 'plusplus.entities.trigger-constant', 'plusplus.entities.levelchange', 'plusplus.entities.checkpoint', 'game.entities.bubble-plant', 'plusplus.entities.dummy', 'plusplus.entities.trigger-controller', 'plusplus.entities.ability-enable', 'game.entities.villain-friendly', 'plusplus.entities.ability-upgrade', 'plusplus.entities.conversation', 'game.entities.tutorial-spam')
    .defines(function() {
        LevelAbilities = /*JSON[*/ {
            "entities": [{
                "type": "EntityTriggerConstant",
                "x": 128,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "meleeController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 32,
                "y": 48,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "core",
                    "playerSpawnerName": "right"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 896,
                "y": 128,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "creatures",
                    "playerSpawnerName": "left"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 864,
                "y": 128,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "right",
                    "target": {
                        "1": "disableAll"
                    }
                }
            }, {
                "type": "EntityBubblePlant",
                "x": 784,
                "y": 144
            }, {
                "type": "EntityDummy",
                "x": 352,
                "y": 136
            }, {
                "type": "EntityTriggerController",
                "x": 312,
                "y": 240,
                "settings": {
                    "name": "grenadeController",
                    "target": {
                        "1": "enableGrenadeLauncher",
                        "2": "disableMelee",
                        "3": "disableLaserGun",
                        "4": "disableMimic"
                    },
                    "size": {
                        "x": 16,
                        "y": 16
                    }
                }
            }, {
                "type": "EntityAbilityEnable",
                "x": 380,
                "y": 216,
                "settings": {
                    "abilityName": "laserGun",
                    "name": "enableLaserGun",
                    "suicidal": "false",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityDummy",
                "x": 568,
                "y": 32,
                "settings": {
                    "angle": 3.14
                }
            }, {
                "type": "EntityTriggerController",
                "x": 312,
                "y": 216,
                "settings": {
                    "name": "laserController",
                    "target": {
                        "1": "enableLaserGun",
                        "2": "disableMelee",
                        "3": "disableGrenadeLauncher",
                        "4": "disableMimic"
                    }
                }
            }, {
                "type": "EntityAbilityEnable",
                "x": 428,
                "y": 216,
                "settings": {
                    "abilityName": "laserGun",
                    "name": "disableLaserGun",
                    "abilityEnabling": "false",
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityVillainFriendly",
                "x": 96,
                "y": 56
            }, {
                "type": "EntityAbilityEnable",
                "x": 380,
                "y": 240,
                "settings": {
                    "abilityName": "grenadeLauncher",
                    "name": "enableGrenadeLauncher",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 64,
                "y": 48,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "left",
                    "target": {
                        "1": "disableAll"
                    }
                }
            }, {
                "type": "EntityAbilityUpgrade",
                "x": 720,
                "y": 112,
                "settings": {
                    "abilityRank": 1,
                    "abilityType": "MIMIC",
                    "size": {
                        "x": 16,
                        "y": 48
                    }
                }
            }, {
                "type": "EntityDummy",
                "x": 544,
                "y": 56
            }, {
                "type": "EntityDummy",
                "x": 176,
                "y": 56,
                "settings": {
                    "name": "punchDummy"
                }
            }, {
                "type": "EntityDummy",
                "x": 592,
                "y": 56
            }, {
                "type": "EntityAbilityEnable",
                "x": 380,
                "y": 192,
                "settings": {
                    "abilityName": "melee",
                    "name": "enableMelee",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityDummy",
                "x": 376,
                "y": 136
            }, {
                "type": "EntityAbilityEnable",
                "x": 428,
                "y": 192,
                "settings": {
                    "abilityName": "melee",
                    "name": "disableMelee",
                    "abilityEnabling": "false",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityDummy",
                "x": 328,
                "y": 136
            }, {
                "type": "EntityAbilityEnable",
                "x": 428,
                "y": 240,
                "settings": {
                    "abilityName": "grenadeLauncher",
                    "name": "disableGrenadeLauncher",
                    "abilityEnabling": "false",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityTriggerController",
                "x": 312,
                "y": 192,
                "settings": {
                    "name": "meleeController",
                    "target": {
                        "1": "enableMelee",
                        "2": "disableLaserGun",
                        "3": "disableGrenadeLauncher",
                        "4": "disableMimic"
                    }
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 208,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "meleeController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 288,
                "y": 112,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "laserController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 432,
                "y": 112,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "laserController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 512,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "grenadeController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 624,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "grenadeController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 312,
                "y": 288,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "name": "disableAll",
                    "target": {
                        "1": "disableMelee",
                        "2": "disableLaserGun",
                        "3": "disableGrenadeLauncher",
                        "4": "disableMimic"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityDummy",
                "x": 400,
                "y": 136
            }, {
                "type": "EntityConversation",
                "x": 72,
                "y": 64,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "MOVE IT SOLDIER!"
                        }
                    },
                    "target": {
                        "1": "villain"
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 144,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "PUNCH PUNCH PUNCH!"
                        }
                    },
                    "size": {
                        "x": 64,
                        "y": 48
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 240,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "CLIMB!"
                        }
                    },
                    "size": {
                        "x": 32,
                        "y": 128
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 464,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "CLIMB!"
                        }
                    },
                    "size": {
                        "x": 32,
                        "y": 128
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 656,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "CLIMB!"
                        }
                    },
                    "size": {
                        "x": 32,
                        "y": 128
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 324,
                "y": 112,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "SHOOT EM UP!"
                        }
                    },
                    "size": {
                        "x": 92,
                        "y": 48
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 548,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "KABLOOIE!"
                        }
                    },
                    "size": {
                        "x": 60,
                        "y": 48
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityConversation",
                "x": 704,
                "y": 112,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "that was fun!"
                        },
                        "2": {
                            "name": "villain",
                            "text": "we've made abilities modular"
                        },
                        "3": {
                            "name": "villain",
                            "text": "and built in things like casting, effects, failure reasons, and easy cloning"
                        },
                        "4": {
                            "name": "villain",
                            "text": "in fact, you can mimic this plant's abilities"
                        },
                        "5": {
                            "name": "villain",
                            "text": "but your ability rank is too low right now"
                        },
                        "6": {
                            "name": "villain",
                            "text": "run over to the green up arrow to upgrade, then try mimicking the plant"
                        }
                    },
                    "size": {
                        "x": 152,
                        "y": 48
                    },
                    "autoAdvance": "false",
                    "lockingPlayer": "true",
                    "participate": {
                        "1": "player"
                    }
                }
            }, {
                "type": "EntityAbilityEnable",
                "x": 380,
                "y": 264,
                "settings": {
                    "abilityName": "mimic",
                    "name": "enableMimic",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityAbilityEnable",
                "x": 428,
                "y": 264,
                "settings": {
                    "abilityName": "mimic",
                    "name": "disableMimic",
                    "abilityEnabling": "false",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "suicidal": "false",
                    "target": {
                        "1": "player"
                    },
                    "once": "false"
                }
            }, {
                "type": "EntityTriggerController",
                "x": 312,
                "y": 264,
                "settings": {
                    "name": "mimicController",
                    "target": {
                        "1": "enableMimic",
                        "2": "disableMelee",
                        "3": "disableLaserGun",
                        "4": "disableGrenadeLauncher"
                    }
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 736,
                "y": 112,
                "settings": {
                    "size": {
                        "x": 12,
                        "y": 48
                    },
                    "target": {
                        "1": "mimicController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 840,
                "y": 112,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "target": {
                        "1": "mimicController"
                    },
                    "autoToggle": "true"
                }
            }, {
                "type": "EntityTutorialSpam",
                "x": 144,
                "y": 48,
                "settings": {
                    "size": {
                        "x": 64,
                        "y": 32
                    },
                    "spawnTarget": {
                        "1": "punchDummy"
                    },
                    "isolate": {
                        "1": "villain",
                        "2": "punchDummy"
                    }
                }
            }],
            "layer": [{
                "name": "collision",
                "width": 59,
                "height": 12,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 46, 46, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 46, 46, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 46, 46, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 47, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 47, 47, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 47, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "walls",
                "width": 59,
                "height": 12,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_walls.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [2, 29, 33, 32, 29, 30, 31, 32, 30, 32, 31, 32, 33, 29, 29, 31, 32, 30, 14, 0, 0, 0, 0, 0, 0, 0, 0, 2, 29, 33, 32, 29, 30, 29, 33, 32, 29, 30, 31, 32, 30, 32, 31, 32, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [5, 85, 89, 89, 90, 89, 89, 89, 90, 89, 89, 89, 90, 89, 89, 89, 90, 73, 21, 0, 0, 0, 0, 0, 0, 0, 0, 5, 86, 89, 89, 90, 90, 89, 90, 89, 89, 89, 90, 89, 89, 89, 90, 75, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [7, 65, 152, 152, 152, 152, 151, 152, 152, 152, 152, 151, 152, 152, 152, 127, 129, 53, 18, 0, 0, 0, 0, 0, 0, 0, 0, 7, 65, 127, 129, 152, 152, 151, 152, 152, 152, 152, 151, 152, 152, 127, 129, 53, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [6, 65, 163, 167, 163, 164, 165, 166, 163, 163, 164, 165, 166, 167, 163, 127, 129, 53, 19, 0, 0, 0, 0, 0, 0, 0, 0, 7, 66, 127, 129, 163, 164, 165, 166, 163, 163, 164, 165, 166, 167, 127, 129, 53, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [7, 66, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 127, 129, 53, 17, 0, 0, 0, 0, 0, 0, 0, 0, 7, 66, 127, 129, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 127, 129, 53, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [8, 49, 77, 77, 78, 78, 77, 78, 78, 77, 77, 78, 77, 78, 110, 127, 129, 54, 15, 32, 29, 32, 29, 30, 29, 33, 32, 3, 66, 127, 129, 100, 77, 77, 78, 78, 77, 77, 78, 78, 111, 127, 129, 54, 15, 29, 33, 32, 29, 30, 31, 32, 30, 32, 31, 32, 31, 32, 14],
                    [26, 41, 43, 45, 44, 41, 43, 42, 43, 44, 45, 41, 42, 27, 65, 127, 129, 122, 89, 89, 90, 91, 89, 90, 89, 89, 90, 91, 133, 127, 129, 53, 39, 41, 44, 41, 42, 41, 43, 27, 65, 127, 129, 121, 89, 89, 89, 90, 89, 89, 89, 89, 90, 90, 90, 89, 90, 73, 21],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 65, 127, 129, 152, 152, 152, 151, 152, 152, 152, 152, 151, 152, 152, 152, 127, 129, 53, 21, 0, 0, 0, 0, 0, 0, 5, 65, 127, 129, 152, 152, 152, 151, 152, 152, 152, 152, 151, 152, 152, 152, 152, 152, 53, 18],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 66, 127, 129, 163, 163, 164, 165, 166, 163, 163, 164, 165, 166, 167, 163, 127, 129, 54, 18, 0, 0, 0, 0, 0, 0, 7, 66, 127, 129, 167, 163, 164, 165, 166, 163, 163, 164, 165, 166, 167, 163, 163, 163, 54, 19],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 66, 127, 129, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 127, 129, 54, 19, 0, 0, 0, 0, 0, 0, 6, 66, 127, 129, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 54, 17],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 49, 77, 77, 78, 77, 77, 77, 77, 77, 78, 78, 77, 77, 78, 78, 77, 78, 62, 17, 0, 0, 0, 0, 0, 0, 7, 50, 77, 77, 78, 77, 78, 77, 77, 77, 77, 78, 77, 77, 77, 78, 77, 78, 62, 17],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 41, 43, 41, 43, 44, 43, 41, 43, 45, 44, 41, 43, 42, 43, 44, 45, 41, 42, 37, 0, 0, 0, 0, 0, 0, 26, 41, 43, 45, 44, 41, 43, 42, 43, 44, 45, 41, 42, 42, 43, 44, 45, 41, 42, 37]
                ]
            }, {
                "name": "details",
                "width": 59,
                "height": 12,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 79, 130, 0, 0, 108, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 142, 0, 0, 0, 171, 172, 173, 0, 171, 172, 173, 0, 0, 0, 0, 61, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 98, 188, 189, 190, 0, 188, 189, 190, 0, 0, 0, 130, 78, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 206, 207, 0, 205, 206, 207, 0, 0, 0, 0, 95, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "shadows",
                "width": 59,
                "height": 12,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 219, 220, 185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 219, 220, 187, 0, 0, 0, 0, 0, 0, 0, 0, 186, 219, 220, 185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }]
        } /*]JSON*/ ;
        LevelAbilitiesResources = [new ig.Image('media/tileset_walls.png'), new ig.Image('media/tileset_details.png'), new ig.Image('media/tileset_details.png')];
    });
