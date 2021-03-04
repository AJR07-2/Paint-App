function draw() {
    loadChanges();
    strokeWeight(20);
    canvasBorder(255);
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    } else if (tool == "Eraser") {
        Eraser();
    } else if (tool == "Line Drawer") {
        LineDrawer();
    } else if (tool == "Highlighter") {
        Highlighter();
    } else if (tool == "Rect Drawer") {
        rectDrawer();
    }
    if (delay < 60) {
        delay++;
    } else {
        delay = 0;
        if (document.getElementById("Optimize Lag").checked) {
            optimizeLag();
        }
    }
}