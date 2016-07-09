/**
 * Created by g on 7/9/16.
 */


// Create a new token that's draggable, with variable size options
function newDraggableToken(name, x, y, preload_string_ref, scalex = 1 , scaley =1 ){
    name = game.add.sprite(x,y, preload_string_ref);
    name.scale.setTo(scalex, scaley);
    name.inputEnabled = true;
    name.input.enableDrag();
    // name.input.onInputUp.add(consoleLog("dropped the piece!"), name);

    return name;
};