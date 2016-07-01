var game = new Phaser.Game(innerWidth, innerHeight, Phaser.CANVAS, 'phaser-example', { create: create, update: update });

var circle, roundRec;

function create() {

    //  Create a Circle
    // circle = new Phaser.Circle(game.world.centerX, game.world.centerY, 500);
    recWidth = 100;
    // roundRec = new Phaser.RoundedRectangle(game.world.centerX-recWidth/2, game.world.centerY, recWidth,recWidth,10);
    // roundRec.inputEnabled = true;
    // roundRec.input.enableDrag(true);

     //  And display our circle on the top
    var graphics = game.add.graphics(0, 0);
    graphics.beginFill(0xFF0000);
    graphics.lineStyle(1, 0x00ff00, 1);
    // graphics.drawCircle(circle.x, circle.y, circle.diameter);

    graphics.drawRoundedRect(game.world.centerX-recWidth/2, game.world.centerY, recWidth, recWidth, 10);

}

function update () {



}