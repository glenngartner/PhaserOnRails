
function preload(){
    game.load.image('board_tile', '../assets/board_tile.svg');
    game.load.image('reward_smile', '../assets/reward_smile.svg');
}

function create() {

    var sprite1 = game.add.sprite(5, 100, 'board_tile');
    var sprite2 = game.add.sprite(0, 0, 'board_tile').alignTo(sprite1, Phaser.RIGHT_CENTER, 2);
    var sprite3 = game.add.sprite(0, 0, 'board_tile').alignTo(sprite2, Phaser.RIGHT_CENTER, 2);
    var sprite4 = game.add.sprite(0, 0, 'board_tile').alignTo(sprite3, Phaser.RIGHT_CENTER, 2);
    var sprite5 = game.add.sprite(0, 0, 'board_tile').alignTo(sprite4, Phaser.RIGHT_CENTER, 2);
    var sprite6 = game.add.sprite(0, 0, 'board_tile').alignTo(sprite5, Phaser.RIGHT_CENTER, 2);

    var rSmile = game.add.sprite(game.world.centerX, game.world.centerY, 'reward_smile');
    rSmile.scale.setTo(2,2);
    rSmile.inputEnabled = true;
    rSmile.input.enableDrag();
    rSmile.events.onDragStart.add(onDragStart, this);
    rSmile.events.onDragStop.add(onDragStop, this);

}

function update () {



}

function arrayOfTiles(){

}