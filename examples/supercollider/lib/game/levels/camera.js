ig.module('game.levels.camera')
    .requires('impact.image', 'plusplus.entities.camera-atmosphere', 'plusplus.entities.conversation', 'plusplus.entities.levelchange', 'plusplus.entities.checkpoint', 'plusplus.entities.camera-shake', 'game.entities.villain-friendly', 'plusplus.entities.trigger-reverse-constant', 'plusplus.entities.trigger-constant')
    .defines(function() {
        LevelCamera = /*JSON[*/ {
            "entities": [{
                "type": "EntityCameraAtmosphere",
                "x": 156,
                "y": 120,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 16
                    },
                    "name": "atmosphere",
                    "target": {
                        "1": "atmosphereOnLeft",
                        "2": "atmosphereOnRight",
                        "3": "atmosphereOffLeft",
                        "4": "atmosphereOffRight",
                        "5": "villain"
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 168,
                "y": 44,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "ow! frak! my toe!"
                        }
                    },
                    "size": {
                        "x": 16,
                        "y": 52
                    }
                }
            }, {
                "type": "EntityLevelchange",
                "x": 272,
                "y": 64,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "lighting",
                    "playerSpawnerName": "left"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 240,
                "y": 64,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "right"
                }
            }, {
                "type": "EntityCameraShake",
                "x": 64,
                "y": 32,
                "settings": {
                    "delay": 1.1,
                    "shakeStrength": 16,
                    "shakeDuration": 2,
                    "size": {
                        "x": 76,
                        "y": 64
                    }
                }
            }, {
                "type": "EntityLevelchange",
                "x": 32,
                "y": 64,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "levelName": "player",
                    "playerSpawnerName": "right"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 72,
                "y": 64,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "left"
                }
            }, {
                "type": "EntityConversation",
                "x": 80,
                "y": 80,
                "settings": {
                    "pausing": "true",
                    "delay": 1,
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "you've probably noticed the camera"
                        },
                        "2": {
                            "name": "villain",
                            "text": "it comes with a trap, following, transitions, and it can even..."
                        },
                        "3": {
                            "name": "villain",
                            "text": "BRING DA ROOF DOWN!"
                        }
                    },
                    "participate": {
                        "1": "player"
                    },
                    "autoAdvance": "false"
                }
            }, {
                "type": "EntityVillainFriendly",
                "x": 48,
                "y": 72,
                "settings": {
                    "collides": 0
                }
            }, {
                "type": "EntityTriggerReverseConstant",
                "x": 96,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 8,
                        "y": 64
                    },
                    "target": {
                        "1": "atmosphere"
                    },
                    "name": "atmosphereOffLeft"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 124,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 8,
                        "y": 64
                    },
                    "target": {
                        "1": "atmosphere"
                    },
                    "name": "atmosphereOnLeft"
                }
            }, {
                "type": "EntityTriggerReverseConstant",
                "x": 224,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 8,
                        "y": 64
                    },
                    "target": {
                        "1": "atmosphere"
                    },
                    "name": "atmosphereOffRight"
                }
            }, {
                "type": "EntityTriggerConstant",
                "x": 196,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 8,
                        "y": 64
                    },
                    "target": {
                        "1": "atmosphere"
                    },
                    "name": "atmosphereOnRight"
                }
            }, {
                "type": "EntityConversation",
                "x": 224,
                "y": 44,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "computer! lights!"
                        }
                    },
                    "size": {
                        "x": 8,
                        "y": 52
                    }
                }
            }, {
                "type": "EntityConversation",
                "x": 124,
                "y": 44,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "computer! lights!"
                        }
                    },
                    "size": {
                        "x": 8,
                        "y": 52
                    }
                }
            }],
            "layer": [{
                "name": "collision",
                "width": 20,
                "height": 8,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "walls",
                "width": 20,
                "height": 8,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_walls.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [1, 29, 30, 31, 32, 31, 29, 33, 31, 32, 33, 29, 30, 31, 29, 30, 31, 32, 29, 14],
                    [9, 86, 89, 90, 91, 89, 90, 89, 92, 93, 94, 89, 89, 91, 90, 89, 89, 90, 73, 17],
                    [7, 66, 176, 176, 176, 174, 176, 176, 176, 176, 176, 176, 176, 176, 174, 176, 176, 176, 54, 20],
                    [5, 65, 188, 188, 188, 186, 188, 188, 188, 188, 188, 188, 188, 188, 186, 188, 188, 188, 54, 19],
                    [5, 66, 177, 177, 177, 175, 177, 177, 177, 177, 177, 177, 177, 177, 175, 177, 177, 177, 53, 17],
                    [9, 65, 189, 189, 189, 187, 189, 189, 189, 189, 189, 189, 189, 189, 187, 189, 189, 189, 53, 18],
                    [5, 52, 77, 77, 77, 81, 78, 77, 77, 77, 79, 78, 77, 78, 77, 82, 77, 78, 63, 19],
                    [26, 41, 41, 42, 45, 44, 43, 44, 43, 44, 45, 41, 42, 43, 44, 43, 44, 45, 45, 37]
                ]
            }, {
                "name": "details",
                "width": 20,
                "height": 8,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 0],
                    [0, 79, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 78, 0],
                    [0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 0],
                    [0, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }]
        } /*]JSON*/ ;
        LevelCameraResources = [new ig.Image('media/tileset_walls.png'), new ig.Image('media/tileset_details.png')];
    });
