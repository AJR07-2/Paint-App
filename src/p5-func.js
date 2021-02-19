let lineDrawerBool = false;
function mouseDragged() {
    if (tool != NoDrag[0]) {
        drawingPoints.push([[mouseX, mouseY], tool]);
    } else if (tool == NoDrag[0]) {
        drawingPoints = [];
        drawingPoints.push([[mouseX, mouseY], tool]);
    }
}

function mouseReleased() {
    if (tool != NoDrag[0]) {
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        drawingPoints = [];
    } else if (tool == NoDrag[0]) {
        drawingPoints.push([[mouseX, mouseY], tool]);
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        console.log("Test")
        //drawingPoints = [];
    }
}
/*
function mousePressed() {
    if (tool == NoDrag[0]) {
        drawingPoints.push([[mouseX, mouseY], tool]);
        if (lineDrawerBool) {
            lineDrawerBool = false;
            drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
            drawingPoints = [];
        } else { lineDrawerBool = true; }
    }
}

*/