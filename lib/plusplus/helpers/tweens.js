/**
 * Minor modifications and wrapped as Impact module by Collin Hover @ collinhover.com
 * @author sole / http://soledadpenades.com
 * @author mrdoob / http://mrdoob.com
 * @author Robert Eisele / http://www.xarg.org
 * @author Philippe / http://philippe.elsass.me
 * @author Robert Penner / http://www.robertpenner.com/easing_terms_of_utse.html
 * @author Paul Lewis / http://www.aerotwist.com/
 * @author lechecacharro
 * @author Josh Faul / http://jocafa.com/
 * @author egraether / http://egraether.com/
 */
ig.module(
        'plusplus.helpers.tweens'
    )
    .requires(
        'plusplus.core.config'
    )
    .defines(function () {
        "use strict";

        var _c = ig.CONFIG;

        var TWEEN = TWEEN || (function () {

            var _tweens = [];
            var _paused = false;

            return {

                REVISION: '9',

                getAll: function () {

                    return _tweens;

                },

                removeAll: function () {

                    _tweens = [];

                },

                add: function (tween) {

                    if (_paused) {

                        tween.pause();

                    }
                    else {

                        tween.unpause();

                    }

                    _tweens.push(tween);

                },

                remove: function (tween) {

                    var i = _tweens.indexOf(tween);

                    if (i !== -1) {

                        _tweens.splice(i, 1);

                    }

                },

                pause: function () {

                    if (!_paused) {

                        _paused = true;

                        for (var i = 0, il = _tweens.length; i < il; i++) {

                            _tweens[ i ].pause();

                        }

                    }

                },

                unpause: function () {

                    if (_paused) {

                        _paused = false;

                        for (var i = 0, il = _tweens.length; i < il; i++) {

                            _tweens[ i ].unpause();

                        }

                    }

                },

                update: function (time) {

                    if (_tweens.length === 0 || _paused) return false;

                    var i = 0, numTweens = _tweens.length;

                    time = time !== undefined ? time : ( ig.global.performance !== undefined && ig.global.performance.now !== undefined ? ig.global.performance.now() : Date.now() );

                    while (i < numTweens) {

                        var tween = _tweens[ i ];

                        if (tween.update(time)) {

                            i++;

                        } else {

                            _tweens.splice(i, 1);

                            tween.cleanup();

                            numTweens--;

                        }

                    }

                    return true;

                }
            };

        })();

        TWEEN.Tween = function (object) {

            var _object = object;
            var _valuesStart = {};
            var _valuesEnd = {};
            var _valuesStartRepeat = {};
            var _duration = _c.DURATION_TWEEN;
            var _repeat = 0;
            var _delayTime = 0;
            var _startTime = null;
            var _paused = false;
            var _pausedAt = 0;
            var _pauseSignaller = null;
            var _easingFunction = TWEEN.Easing.Linear.None;
            var _interpolationFunction = TWEEN.Interpolation.Linear;
            var _chainedTweens = [];
            var _onStartCallback = null;
            var _onStartCallbackFired = false;
            var _onUpdateCallback = null;
            var _onCompleteCallback = null;

            this.to = function (properties, duration) {

                if (duration !== undefined) {

                    _duration = duration;

                }

                _valuesEnd = properties;

                return this;

            };

            this.start = function (time) {

                TWEEN.add(this);

                _onStartCallbackFired = false;

                _startTime = ( time !== undefined ? time : ( ig.global.performance !== undefined && ig.global.performance.now !== undefined ? ig.global.performance.now() : Date.now() ) );
                _startTime += _delayTime;

                for (var property in _valuesEnd) {

                    // This prevents the interpolation of null values or of non-existing properties
                    if (( property in _object ) === false || _object[ property ] === null) {

                        continue;

                    }

                    // check if an Array was provided as property value
                    if (_valuesEnd[ property ] instanceof Array) {

                        if (_valuesEnd[ property ].length === 0) {

                            continue;

                        }

                        // create a local copy of the Array with the start value at the front
                        _valuesEnd[ property ] = [ _object[ property ] ].concat(_valuesEnd[ property ]);

                    }

                    _valuesStart[ property ] = _object[ property ];

                    if (( _valuesStart[ property ] instanceof Array ) == false) {
                        _valuesStart[ property ] *= 1.0; // Ensures we're using numbers, not strings
                    }

                    _valuesStartRepeat[ property ] = _valuesStart[ property ];

                }

                return this;

            };

            this.stop = function () {

                TWEEN.remove(this);

                return this.cleanup();

            };

            this.cleanup = function () {

                return this.pauseSignaller();

            };

            this.pause = function () {

                if (!_paused) {

                    _paused = true;
                    _pausedAt = ig.global.performance !== undefined && ig.global.performance.now !== undefined ? ig.global.performance.now() : Date.now();

                }

                return this;

            };

            this.unpause = function () {

                if (_paused) {

                    _paused = false;
                    _startTime += ( ig.global.performance !== undefined && ig.global.performance.now !== undefined ? ig.global.performance.now() : Date.now() ) - _pausedAt;
                    _pausedAt = 0;

                }

                return this;

            };

            this.pauseSignaller = function (pauseSignaller) {

                if (_pauseSignaller !== pauseSignaller) {

                    // clear previous

                    if (_pauseSignaller && _pauseSignaller.onPaused) {

                        _pauseSignaller.onPaused.remove(this.pause, this);
                        _pauseSignaller.onUnpaused.remove(this.unpause, this);

                    }

                    // store new

                    _pauseSignaller = pauseSignaller;

                    // listen for pauseSignaller's pause / unpause signal
                    // this allows us to reliably pause tweens by pauseSignaller and/or layer

                    if (_pauseSignaller && _pauseSignaller.onPaused) {

                        _pauseSignaller.onPaused.add(this.pause, this);
                        _pauseSignaller.onUnpaused.add(this.unpause, this);

                    }

                }

                return this;

            };

            this.delay = function (amount) {

                _delayTime = amount;
                return this;

            };

            this.repeat = function (times) {

                _repeat = times;
                return this;

            };

            this.easing = function (easing) {

                if (typeof easing === 'function') {

                    _easingFunction = easing;

                }
                return this;

            };

            this.interpolation = function (interpolation) {

                if (typeof easing === 'function') {

                    _interpolationFunction = interpolation;

                }
                return this;

            };

            this.chain = function () {

                _chainedTweens = arguments;
                return this;

            };

            this.onStart = function (callback) {

                _onStartCallback = callback;
                return this;

            };

            this.onUpdate = function (callback) {

                _onUpdateCallback = callback;
                return this;

            };

            this.onComplete = function (callback) {

                _onCompleteCallback = callback;
                return this;

            };

            this.update = function (time) {

                if (_paused || time < _startTime) {

                    return true;

                }

                if (_onStartCallbackFired === false) {

                    if (_onStartCallback) {

                        _onStartCallback.call(_object);

                    }

                    _onStartCallbackFired = true;

                }

                var elapsed = ( time - _startTime ) / _duration;
                elapsed = elapsed > 1 ? 1 : elapsed;

                var value = _easingFunction(elapsed);

                for (var property in _valuesStart) {

                    var start = _valuesStart[ property ];
                    var end = _valuesEnd[ property ];

                    if (end instanceof Array) {

                        _object[ property ] = _interpolationFunction(end, value);

                    } else {

                        _object[ property ] = start + ( end - start ) * value;

                    }

                }

                if (_onUpdateCallback) {

                    _onUpdateCallback.call(_object, value);

                }

                if (elapsed == 1) {

                    if (_repeat > 0) {

                        if (isFinite(_repeat)) {
                            _repeat--;
                        }

                        // reassign starting values, restart by making startTime = now
                        for (var property in _valuesStartRepeat) {
                            _valuesStart[ property ] = _valuesStartRepeat[ property ];
                        }
                        _startTime = time + _delayTime;

                        return true;

                    } else {

                        if (_onCompleteCallback) {

                            _onCompleteCallback.call(_object);

                        }

                        for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {

                            _chainedTweens[ i ].start(time);

                        }

                        return false;

                    }

                }

                return true;

            };

        };

        TWEEN.Easing = {

            Linear: {

                None: function (k) {

                    return k;

                }

            },

            Quadratic: {

                In: function (k) {

                    return k * k;

                },

                Out: function (k) {

                    return k * ( 2 - k );

                },

                InOut: function (k) {

                    if (( k *= 2 ) < 1) return 0.5 * k * k;
                    return -0.5 * ( --k * ( k - 2 ) - 1 );

                }

            },

            Cubic: {

                In: function (k) {

                    return k * k * k;

                },

                Out: function (k) {

                    return --k * k * k + 1;

                },

                InOut: function (k) {

                    if (( k *= 2 ) < 1) return 0.5 * k * k * k;
                    return 0.5 * ( ( k -= 2 ) * k * k + 2 );

                }

            },

            Quartic: {

                In: function (k) {

                    return k * k * k * k;

                },

                Out: function (k) {

                    return 1 - ( --k * k * k * k );

                },

                InOut: function (k) {

                    if (( k *= 2 ) < 1) return 0.5 * k * k * k * k;
                    return -0.5 * ( ( k -= 2 ) * k * k * k - 2 );

                }

            },

            Quintic: {

                In: function (k) {

                    return k * k * k * k * k;

                },

                Out: function (k) {

                    return --k * k * k * k * k + 1;

                },

                InOut: function (k) {

                    if (( k *= 2 ) < 1) return 0.5 * k * k * k * k * k;
                    return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

                }

            },

            Sinusoidal: {

                In: function (k) {

                    return 1 - Math.cos(k * Math.PI / 2);

                },

                Out: function (k) {

                    return Math.sin(k * Math.PI / 2);

                },

                InOut: function (k) {

                    return 0.5 * ( 1 - Math.cos(Math.PI * k) );

                }

            },

            Exponential: {

                In: function (k) {

                    return k === 0 ? 0 : Math.pow(1024, k - 1);

                },

                Out: function (k) {

                    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);

                },

                InOut: function (k) {

                    if (k === 0) return 0;
                    if (k === 1) return 1;
                    if (( k *= 2 ) < 1) return 0.5 * Math.pow(1024, k - 1);
                    return 0.5 * ( -Math.pow(2, -10 * ( k - 1 )) + 2 );

                }

            },

            Circular: {

                In: function (k) {

                    return 1 - Math.sqrt(1 - k * k);

                },

                Out: function (k) {

                    return Math.sqrt(1 - ( --k * k ));

                },

                InOut: function (k) {

                    if (( k *= 2 ) < 1) return -0.5 * ( Math.sqrt(1 - k * k) - 1);
                    return 0.5 * ( Math.sqrt(1 - ( k -= 2) * k) + 1);

                }

            },

            Elastic: {

                In: function (k) {

                    var s, a = 0.1, p = 0.4;
                    if (k === 0) return 0;
                    if (k === 1) return 1;
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else s = p * Math.asin(1 / a) / ( 2 * Math.PI );
                    return -( a * Math.pow(2, 10 * ( k -= 1 )) * Math.sin(( k - s ) * ( 2 * Math.PI ) / p) );

                },

                Out: function (k) {

                    var s, a = 0.1, p = 0.4;
                    if (k === 0) return 0;
                    if (k === 1) return 1;
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else s = p * Math.asin(1 / a) / ( 2 * Math.PI );
                    return ( a * Math.pow(2, -10 * k) * Math.sin(( k - s ) * ( 2 * Math.PI ) / p) + 1 );

                },

                InOut: function (k) {

                    var s, a = 0.1, p = 0.4;
                    if (k === 0) return 0;
                    if (k === 1) return 1;
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else s = p * Math.asin(1 / a) / ( 2 * Math.PI );
                    if (( k *= 2 ) < 1) return -0.5 * ( a * Math.pow(2, 10 * ( k -= 1 )) * Math.sin(( k - s ) * ( 2 * Math.PI ) / p) );
                    return a * Math.pow(2, -10 * ( k -= 1 )) * Math.sin(( k - s ) * ( 2 * Math.PI ) / p) * 0.5 + 1;

                }

            },

            Back: {

                In: function (k) {

                    var s = 1.70158;
                    return k * k * ( ( s + 1 ) * k - s );

                },

                Out: function (k) {

                    var s = 1.70158;
                    return --k * k * ( ( s + 1 ) * k + s ) + 1;

                },

                InOut: function (k) {

                    var s = 1.70158 * 1.525;
                    if (( k *= 2 ) < 1) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
                    return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

                }

            },

            Bounce: {

                In: function (k) {

                    return 1 - TWEEN.Easing.Bounce.Out(1 - k);

                },

                Out: function (k) {

                    if (k < ( 1 / 2.75 )) {

                        return 7.5625 * k * k;

                    } else if (k < ( 2 / 2.75 )) {

                        return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

                    } else if (k < ( 2.5 / 2.75 )) {

                        return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

                    } else {

                        return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

                    }

                },

                InOut: function (k) {

                    if (k < 0.5) return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
                    return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

                }

            }

        };

        TWEEN.Interpolation = {

            Linear: function (v, k) {

                var m = v.length - 1, f = m * k, i = Math.floor(f), fn = TWEEN.Interpolation.Utils.Linear;

                if (k < 0) return fn(v[ 0 ], v[ 1 ], f);
                if (k > 1) return fn(v[ m ], v[ m - 1 ], m - f);

                return fn(v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i);

            },

            Bezier: function (v, k) {

                var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

                for (i = 0; i <= n; i++) {
                    b += pw(1 - k, n - i) * pw(k, i) * v[ i ] * bn(n, i);
                }

                return b;

            },

            CatmullRom: function (v, k) {

                var m = v.length - 1, f = m * k, i = Math.floor(f), fn = TWEEN.Interpolation.Utils.CatmullRom;

                if (v[ 0 ] === v[ m ]) {

                    if (k < 0) i = Math.floor(f = m * ( 1 + k ));

                    return fn(v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i);

                } else {

                    if (k < 0) return v[ 0 ] - ( fn(v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f) - v[ 0 ] );
                    if (k > 1) return v[ m ] - ( fn(v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m) - v[ m ] );

                    return fn(v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i);

                }

            },

            Utils: {

                Linear: function (p0, p1, t) {

                    return ( p1 - p0 ) * t + p0;

                },

                Bernstein: function (n, i) {

                    var fc = TWEEN.Interpolation.Utils.Factorial;
                    return fc(n) / fc(i) / fc(n - i);

                },

                Factorial: (function () {

                    var a = [ 1 ];

                    return function (n) {

                        var s = 1, i;
                        if (a[ n ]) return a[ n ];
                        for (i = n; i > 1; i--) s *= i;
                        return a[ n ] = s;

                    };

                })(),

                CatmullRom: function (p0, p1, p2, p3, t) {

                    var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
                    return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( -3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

                }

            }

        };

        /**
         * Tween library and controller for all active tweens based on TWEENJS.
         * @memberof ig
         * @namespace ig.TWEEN
         */
        ig.TWEEN = TWEEN;

        /**
         * Tween instance based on TWEENJS.
         * @class
         * @memberof ig.TWEEN
         **/
        ig.TWEEN.Tween;

        /**
         * Convenience function to tween an object's properties.
         * @param {Object} object with properties to tween.
         * @param {Object} properties of object to tween.
         * @param {Object} [options] options for tween.
         * @returns {ig.Tween} tween.
         **/
        ig.TWEEN.tween = function (object, properties, options) {

            options = options || {};

            // existing tween passed, stop

            if (options.tween) {

                options.tween.stop();

            }

            // generate new tween

            var tween = new ig.TWEEN.Tween(object)
                .to(properties, options.duration)
                .easing(options.easing)
                .onStart(options.onStart)
                .onUpdate(options.onUpdate)
                .onComplete(options.onComplete)
                .pauseSignaller(options.pauseSignaller);

            if (!options.stopped) {

                tween.start();

            }

            return tween;

        };

    });