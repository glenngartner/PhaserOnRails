// Creates a new game object for moving around the board

function GamePiece(loadStringRef, xPos, yPos) {
    this.preloadRef = loadStringRef;
    this.x = xPos;
    this.y = yPos;

    console.log("new string name is" + this.preloadRef);

    this.object = game.add.sprite(this.x, this.y, this.preloadRef);
    this.object.inputEnabled = true;
    this.object.input.enableDrag();

}
