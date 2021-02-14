function draw() {
    strokeWeight(20);
    canvasBorder(255);
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    } else if (tool == "Eraser") {
        Eraser();
    } else if (tool == "Line Drawer") {
        LineDrawer();
    }
    LoadChanges();
    canvasBorder(0);
}