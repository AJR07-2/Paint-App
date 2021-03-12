//setup and draw in p5
function setup() {
    noFill();
    canvas1 = createCanvas(width, height);
    rectMode(CENTER);
    frameRate(100);
    background(0, 0, 0, 0);
    changeTool();
}

function draw() {
    //simple settings
    loadChanges();
    strokeWeight(20);
    canvasBorder(255);
    reloadDrawn();
    //which tool to process the drawings while its not being pushed to the main draw array to be drawn by reloadDrawn
    if (tool == "Pen") Pen();
    else if (tool == "Eraser") Eraser();
    else if (tool == "Line Drawer") LineDrawer();
    else if (tool == "Highlighter") Highlighter();
    else if (tool == "Rect Drawer") rectDrawer();
    //delay for lag optimization feature
    if (delay < 60) delay++;
    else {
        delay = 0;
        if (document.getElementById("Optimize Lag").checked) optimizeLag();
    }
}