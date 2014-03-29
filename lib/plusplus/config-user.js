ig.module(
  'plusplus.config-user'
)
.defines(function () {
  'use strict';

  /**
   * User configuration of Impact++.
   * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
   * @example
   * // in order to add your own custom configuration to Impact++
   * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
   * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
   * // ig.CONFIG_USER is automatically merged over Impact++'s config
   * @static
   * @readonly
   * @memberof ig
   * @namespace ig.CONFIG_USER
   * @author Collin Hover - collinhover.com
   **/
    ig.CONFIG_USER = {

      /**
       * Set to true for top down games
       */
      TOP_DOWN: true,

      /**
       * Fullscreen!
       */
      GAME_WIDTH_PCT: 1,
      GAME_HEIGHT_PCT: 1,

      /**
       * Dynamic scaling based on dimensions in view.
       */
      GAME_WIDTH_VIEW: 300,
      GAME_HEIGHT_VIEW: 100,

      /**
       * Camera trap and smoothness. This helps with motion sickness.
       */
      CAMERA: {
        // we don't want to keep perfectly centered
        KEEP_CENTERED: false,
        // but if we did, we can use the lerp to smooth
        LERP: 0.025,
        // when we use the trap
        // we want to keep it as a percent of the screen
        BOUNDS_TRAP_AS_PCT: true,
        // the percents are 20% on either side of center X
        // the percents are 30% on either side of center Y
        BOUNDS_TRAP_PCT_MINX: -0.2,
        BOUNDS_TRAP_PCT_MINY: -0.3,
        BOUNDS_TRAP_PCT_MAXX: 0.2,
        BOUNDS_TRAP_PCT_MAXY: 0.3,
        // make sure camera doesn't go outside our level
        KEEP_INSIDE_LEVEL: true
      },

      /**
       * Character movement speed
       */
      CHARACTER: {
        MAX_VEL_GROUNDED_X: 70,
        MAX_VEL_GROUNDED_Y: 0
      },

      /**
       * Special fonts.
       */
      FONT: {
        MAIN_NAME: "font_04b03_white_16.png",
        ALT_NAME: "font_04b03_white_8.png",
        CHAT_NAME: "font_04b03_black_8.png"
      }

    };

});
