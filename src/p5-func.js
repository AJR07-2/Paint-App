let lineDrawerBool = false, lineStartX = 0, lineStartY = 0;
function mouseDragged() {
    if (tool != NoDrag[0] && tool != NoDrag[1]) {
        drawingPoints.push([[mouseX, mouseY], tool]);
    } else {
        drawingPoints = [];
        drawingPoints.push([[mouseX, mouseY], tool]);
    } 
}

function mousePressed() {
    if (tool == NoDrag[0] || tool == NoDrag[1]) {
        lineStartX = mouseX;
        lineStartY = mouseY;
    }
}

function mouseReleased() {
    if (tool != NoDrag[0] && tool != NoDrag[1]) {
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        drawingPoints = [];
    } else if (tool == NoDrag[1]) {
        drawingPoints.push([[lineStartX, lineStartY], tool]);
        drawn.push([drawingPoints, [fillOrNot, colourFill, opacityFill, border, colourBorder, opacityBorder, thickness, cornerRadius]]);
        drawingPoints = [];
    }else if(tool == NoDrag[0]){
        drawingPoints.push([[lineStartX, lineStartY], tool]);
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        drawingPoints = [];
    }
}