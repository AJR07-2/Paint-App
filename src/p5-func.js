let lineDrawerBool = false, lineStartX = 0, lineStartY = 0;
function mouseDragged() {
    if (tool != NoDrag[0]) {
        drawingPoints.push([[mouseX, mouseY], tool]);
    } else if (tool == NoDrag[0]) {
        drawingPoints = [];
        drawingPoints.push([[mouseX, mouseY], tool]);
    }
}

function mousePressed() {
    if (tool == NoDrag[0]) {
        lineStartX = mouseX;
        lineStartY = mouseY;
    }
}

function mouseReleased() {
    if (tool != NoDrag[0]) {
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        drawingPoints = [];
    } else if (tool == NoDrag[0]) {
        drawingPoints.push([[lineStartX, lineStartY], tool]);
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        //drawingPoints = [];
    }
}