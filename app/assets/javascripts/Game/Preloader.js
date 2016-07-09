/**
 * Created by g on 7/8/16.
 */

Game.Preloader = function (game) {
    this.preLoadBar = null;

};

Game.Preloader.prototype = {
    preload: function () {

        this.preLoadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

        this.preLoadBar.anchor.setTo(0.5, 0.5);

        this.time.advancedTiming = true;

        this.load.setPreloadSprite(this.preLoadBar);

        // Load all assets

    },

    create: function () {

        this.state.start('Level1'); 
    }
}