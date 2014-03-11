ig.module('game.levels.obstacles')
    .requires('impact.image', 'plusplus.entities.ability-enable', 'plusplus.entities.slime', 'plusplus.entities.checkpoint', 'plusplus.entities.levelchange', 'game.entities.destructable-grate', 'game.entities.door-usable-right', 'game.entities.destructable-door-left', 'plusplus.entities.switch', 'game.entities.door-right', 'game.entities.door-triggered-left', 'game.entities.villain-friendly', 'plusplus.entities.conversation', 'plusplus.entities.trigger-kill')
    .defines(function() {
        LevelObstacles = /*JSON[*/ {
            "entities": [{
                "type": "EntityAbilityEnable",
                "x": 352,
                "y": 64,
                "settings": {
                    "size": {
                        "x": 80,
                        "y": 48
                    },
                    "abilityName": "melee"
                }
            }, {
                "type": "EntitySlime",
                "x": 444,
                "y": 160,
                "settings": {
                    "size": {
                        "x": 56,
                        "y": 16
                    },
                    "triggerable": "false",
                    "animationType": "SURFACE"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 64,
                "y": 80,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "left"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 32,
                "y": 80,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "particles",
                    "playerSpawnerName": "right"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 592,
                "y": 80,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "conversations",
                    "playerSpawnerName": "left"
                }
            }, {
                "type": "EntityDestructableGrate",
                "x": 288,
                "y": 112
            }, {
                "type": "EntityDoorUsableRight",
                "x": 240,
                "y": 64,
                "settings": {
                    "name": "interactiveDoor"
                }
            }, {
                "type": "EntityDestructableDoorLeft",
                "x": 384,
                "y": 64
            }, {
                "type": "EntityDestructableGrate",
                "x": 448,
                "y": 112
            }, {
                "type": "EntitySwitch",
                "x": 480,
                "y": 132,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "target": {
                        "1": "doorSwitched",
                        "2": "conversationSwitchKiller"
                    },
                    "autoBreak": "true"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 560,
                "y": 80,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "right"
                }
            }, {
                "type": "EntityAbilityEnable",
                "x": 264,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 80
                    },
                    "abilityName": "melee",
                    "abilityEnabling": "false"
                }
            }, {
                "type": "EntityDoorRight",
                "x": 176,
                "y": 64
            }, {
                "type": "EntityAbilityEnable",
                "x": 496,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 80
                    },
                    "abilityName": "melee",
                    "abilityEnabling": "false"
                }
            }, {
                "type": "EntitySlime",
                "x": 444,
                "y": 176,
                "settings": {
                    "size": {
                        "x": 56,
                        "y": 52
                    }
                }
            }, {
                "type": "EntityDestructableGrate",
                "x": 288,
                "y": 156
            }, {
                "type": "EntityDoorTriggeredLeft",
                "x": 528,
                "y": 64,
                "settings": {
                    "name": "doorSwitched"
                }
            }, {
                "type": "EntitySlime",
                "x": 284,
                "y": 160,
                "settings": {
                    "size": {
                        "x": 56,
                        "y": 16
                    },
                    "triggerable": "false",
                    "animationType": "SURFACE"
                }
            }, {
                "type": "EntityDestructableGrate",
                "x": 448,
                "y": 156,
                "settings": {
                    "triggerable": "false"
                }
            }, {
                "type": "EntitySlime",
                "x": 284,
                "y": 176,
                "settings": {
                    "size": {
                        "x": 56,
                        "y": 52
                    }
                }
            }, {
                "type": "EntityVillainFriendly",
                "x": 204,
                "y": 88
            }, {
                "type": "EntityConversation",
                "x": 72,
                "y": 96,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "so..."
                        },
                        "2": {
                            "name": "villain",
                            "text": "how do you feel about deadly slime?"
                        }
                    },
                    "delay": 1,
                    "target": {
                        "1": "villain"
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 304,
                "y": 32,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "did I mention that these grates can't support us?"
                        }
                    },
                    "size": {
                        "x": 16,
                        "y": 80
                    },
                    "name": "conversationGrate"
                }
            }, {
                "type": "EntityConversation",
                "x": 352,
                "y": 72,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "player",
                            "text": "this door looks weak..."
                        }
                    },
                    "size": {
                        "x": 80,
                        "y": 40
                    },
                    "target": {
                        "1": "conversationGrateKiller"
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 512,
                "y": 64,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "player",
                            "text": "there must be a switch around here..."
                        }
                    },
                    "size": {
                        "x": 16,
                        "y": 48
                    },
                    "name": "conversationSwitch"
                }
            }, {
                "type": "EntitySwitch",
                "x": 560,
                "y": 84,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "target": {
                        "1": "doorSwitched",
                        "2": "conversationSwitchKiller"
                    },
                    "autoBreak": "true"
                }
            }, {
                "type": "EntityTriggerKill",
                "x": 528,
                "y": 140,
                "settings": {
                    "name": "conversationSwitchKiller",
                    "target": {
                        "1": "conversationSwitch"
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 220,
                "y": 64,
                "settings": {
                    "autoAdvance": "false",
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "the last was automatic, but this one needs a tap to open and close"
                        }
                    },
                    "size": {
                        "x": 56,
                        "y": 48
                    }
                }
            }, {
                "type": "EntityTriggerKill",
                "x": 384,
                "y": 144,
                "settings": {
                    "name": "conversationGrateKiller",
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "target": {
                        "1": "conversationGrate"
                    }
                }
            }],
            "layer": [{
                "name": "collision",
                "width": 40,
                "height": 16,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "walls",
                "width": 40,
                "height": 16,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_walls.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 1, 29, 29, 32, 33, 30, 32, 33, 30, 13, 0, 0, 2, 29, 32, 33, 30, 29, 32, 33, 30, 14, 0, 2, 29, 32, 33, 29, 32, 33, 30, 30, 13, 0, 0, 0, 0, 0],
                    [0, 0, 6, 85, 89, 89, 89, 89, 89, 89, 74, 19, 0, 0, 8, 86, 89, 89, 89, 89, 89, 89, 73, 17, 0, 6, 85, 89, 89, 89, 89, 89, 89, 73, 17, 0, 0, 0, 0, 0],
                    [1, 31, 3, 65, 152, 151, 152, 152, 151, 152, 53, 15, 31, 29, 3, 65, 181, 182, 181, 181, 182, 183, 53, 15, 31, 3, 65, 181, 181, 181, 181, 182, 183, 53, 15, 29, 32, 33, 30, 14],
                    [8, 86, 89, 134, 154, 154, 154, 154, 154, 154, 121, 89, 89, 89, 89, 135, 181, 181, 182, 181, 182, 183, 121, 89, 89, 89, 134, 181, 181, 182, 183, 181, 183, 122, 89, 89, 89, 89, 73, 18],
                    [5, 65, 154, 154, 155, 154, 154, 154, 154, 154, 154, 154, 127, 128, 128, 129, 183, 182, 181, 181, 181, 182, 183, 181, 181, 181, 181, 181, 182, 183, 181, 182, 183, 127, 128, 128, 128, 129, 53, 20],
                    [6, 65, 163, 163, 163, 164, 165, 165, 166, 163, 163, 163, 127, 128, 128, 129, 181, 182, 183, 181, 181, 182, 181, 182, 181, 183, 181, 181, 181, 182, 181, 182, 181, 127, 128, 128, 128, 129, 53, 18],
                    [9, 65, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 139, 140, 140, 141, 181, 181, 181, 182, 181, 182, 181, 182, 183, 181, 181, 181, 181, 181, 181, 182, 183, 139, 142, 143, 144, 141, 53, 18],
                    [5, 49, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 110, 181, 182, 182, 97, 77, 77, 77, 77, 77, 110, 181, 182, 182, 99, 77, 77, 77, 77, 77, 77, 62, 20],
                    [25, 41, 43, 45, 42, 41, 44, 41, 43, 45, 41, 43, 45, 42, 41, 44, 27, 65, 181, 181, 182, 53, 39, 43, 45, 42, 27, 65, 181, 181, 182, 53, 39, 41, 43, 45, 42, 41, 44, 37],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 65, 181, 181, 182, 53, 17, 0, 0, 0, 5, 65, 181, 181, 182, 53, 17, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 65, 181, 182, 181, 53, 19, 0, 0, 0, 8, 65, 181, 182, 181, 53, 19, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 65, 181, 182, 181, 53, 18, 0, 0, 0, 8, 65, 181, 182, 181, 53, 18, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 65, 181, 181, 181, 53, 20, 0, 0, 0, 5, 65, 181, 181, 181, 53, 20, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 65, 181, 181, 182, 53, 18, 0, 0, 0, 6, 65, 181, 181, 182, 53, 18, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 113, 102, 102, 102, 116, 18, 0, 0, 0, 9, 114, 102, 102, 102, 115, 18, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 43, 43, 45, 42, 41, 38, 0, 0, 0, 25, 42, 41, 43, 45, 41, 37, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "details",
                "width": 40,
                "height": 16,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 87, 87, 86, 87, 90, 0, 0, 0, 0, 0, 0, 105, 87, 86, 87, 87, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 52, 53, 56, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 62, 0, 0, 0, 69, 70, 73, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 87, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 0],
                    [0, 79, 0, 0, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 130, 0, 0, 78, 0],
                    [0, 96, 0, 0, 29, 30, 31, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 92, 92, 123, 109, 0, 0, 0, 95, 0],
                    [0, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 0, 0, 0, 0, 0, 0, 0, 112, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "shadows",
                "width": 40,
                "height": 16,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 137, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 154, 154, 154, 154, 154, 154, 154, 0, 0, 0, 0, 0, 154, 154, 154, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 137, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 154, 154, 154, 154, 154, 154, 154, 0, 0, 0, 0, 0, 154, 154, 154, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 137, 137, 137, 137, 137, 137, 137, 137, 138, 0, 0, 0, 0, 157, 154, 154, 154, 154, 154, 154, 154, 159, 0, 157, 154, 154, 154, 154, 154, 154, 154, 159, 0, 0, 139, 137, 0, 0],
                    [0, 0, 137, 137, 137, 137, 137, 137, 137, 137, 137, 138, 0, 0, 0, 0, 157, 154, 154, 154, 154, 154, 159, 0, 0, 0, 157, 154, 154, 154, 154, 154, 159, 0, 0, 139, 137, 137, 0, 0],
                    [0, 0, 137, 137, 137, 137, 137, 137, 137, 137, 137, 137, 138, 0, 0, 0, 0, 157, 154, 154, 154, 159, 0, 0, 0, 0, 0, 157, 154, 154, 154, 159, 0, 0, 139, 137, 137, 137, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }]
        } /*]JSON*/ ;
        LevelObstaclesResources = [new ig.Image('media/tileset_walls.png'), new ig.Image('media/tileset_details.png'), new ig.Image('media/tileset_details.png')];
    });
