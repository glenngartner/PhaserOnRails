function init() {

    var rPos = 100;
    var rSize = 200;
    var stage = new createjs.Stage("myCanvas");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawRoundRect(rPos, rPos, rSize, rSize, 5);

    stage.addChild(circle);
    stage.update();
}