function mouseDragged() {
    if (tool != "Line Drawer") {
        drawingPoints.push([createVector(mouseX, mouseY), tool]);
    }
}

function mouseReleased() {
    if (tool != "Line Drawer") {
        colourSettings.push([colour, thickness, opacity, tool]);
        drawn.push(drawingPoints);
        drawingPoints = [];
    }
}

function mousePressed() {
    if (tool == "Line Drawer") {
        if (lineDrawerBool) {
            lineDrawerBool = false;
            drawingPoints.push([createVector(mouseX, mouseY), tool, 1]);
            colourSettings.push([colour, thickness, opacity, tool]);
            drawn.push(drawingPoints);
            drawingPoints = [];
        } else {// first point drawn
            lineDrawerBool = true;
            drawingPoints.push([createVector(mouseX, mouseY), tool, 0]);
        }
    }
}
