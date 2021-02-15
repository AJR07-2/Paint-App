function mouseDragged() {
    if (tool != "Line Drawer") {
        drawingPoints.push([[mouseX, mouseY], tool]);
    }
}

function mouseReleased() {
    if (tool != "Line Drawer") {
        drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
        drawingPoints = [];
    }
}

function mousePressed() {
    if (tool == "Line Drawer") {
        drawingPoints.push([[mouseX, mouseY], tool]);
        if (lineDrawerBool) {
            lineDrawerBool = false;
            drawn.push([drawingPoints, [colour, thickness, opacity, tool]]);
            drawingPoints = [];
        } else { lineDrawerBool = true; }
    }
}
