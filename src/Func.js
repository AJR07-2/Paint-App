//reloads the drawn things so far (very beeg and important)
function reloadDrawn() {
    //"rests" the canvas for drawing
    clear();
    canvasBorder(255);
    push();
    for (const i of drawn) {
        //sets the colours/opacity/thickness or any other attributes of the tool that is used based on the array data
        if (i[0][0][1] == "Rect Drawer") {
            if (i[1][0] == false) {
                noFill();
            } else {
                let preColour = i[1][1];
                i[1][1] = color(i[1][1]);
                i[1][1].setAlpha(i[1][2]);
                fill(i[1][1]);
                i[1][1] = preColour;
            }
            if (i[1][3] == false) {
                noStroke();
            } else {
                let preBorder = i[1][4];
                i[1][4] = color(i[1][4]);
                i[1][4].setAlpha(i[1][5]);
                stroke(i[1][4]);
                strokeWeight(i[1][6]);
                i[1][4] = preBorder;
            }
        } else if (i[0][0][1] == "Eraser") {
            stroke("white");
            noFill();
        }else {
            noFill();
            colourToUse = color(i[1][0]);
            colourToUse.setAlpha(i[1][2]);
            strokeWeight(i[1][1]);
            stroke(colourToUse);
        }
        //main function to process drawings
        let previousX, previousY; //these variables allow the functions to draw from the previous position saved to current position
        for (const j of i[0]) {
            //exclusive configs for each tool when reloading drawn
            if (j[1] == "Pen" || j[1] == "Eraser") { //Pen and Eraser is drawn using lines
                line(j[0][0], j[0][1], previousX, previousY);
                previousX = j[0][0];
                previousY = j[0][1];
                continue;
            } else if (j[1] == "Highlighter") { //highlighter also drawn using lines but slightly differently
                if (previousY != null) {
                    line(previousX + i[1][2] / 2, previousY + i[1][2] / 2, j[0][0], j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                continue;
            } else if (j[i] == "Line Drawer") { //also using lines but needing previousY
                if (previousY != null) {
                    line(previousX, previousY, j[0][0], j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                continue;
            } else if (j[1] == "Rect Drawer") { //drawn using rectangle and needing previousY
                if (previousY != null) {
                    rect((previousX + j[0][0]) / 2, (previousY + j[0][1]) / 2, previousX - j[0][0], previousY - j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                continue;
            }
        }
    }
    pop();
}

//the default settings of the tools
function defaultSettings() {
    noFill();
    let preColour = colour;
    colour = color(colour);
    colour.setAlpha(opacity);
    stroke(colour);
    colour = preColour;
    strokeWeight(thickness);
}

//default settings but for tools that are shapes (needing fills/strokes and others)
function ShapeDrawerSettings() {
    if (fillOrNot == false) {
        noFill();
    } else {
        let preColour = colourFill;
        colourFill = color(colourFill);
        colourFill.setAlpha(opacityFill);
        fill(colourFill);
        colourFill = preColour;
    }
    if (border == false) {
        noStroke();
    } else {
        let preBorder = colourBorder;
        colourBorder = color(colourBorder);
        colourBorder.setAlpha(opacityBorder);
        stroke(colourBorder);
        strokeWeight(thickness);
        colourBorder = preBorder
    }
}

//draw canvas border
function canvasBorder(opacity) {
    fill(255, 255, 255, opacity);
    noStroke();
    rect(width / 2, height / 2, width, height);
}

//generate random colour
function RandomColour() {
    let letters = '0123456789ABCDEF'; colour = '#';
    for (var i = 0; i < 6; i++) colour += letters[Math.floor(Math.random() * 16)];
    document.getElementById("colour").value = colour;
}

//expansion of the canvas size
function confirmExpansion(width1, height1) {
    document.getElementById("width").value = width;
    document.getElementById("height").value = height;
    previousWidth = width1;
    previousHeight = height1;
    return false;
}

//syncs js and html values (vue could be used for future improvements)
function syncJStoHTML() {
    document.getElementById("colour").value = colour;
    document.getElementById("tool").value = tool;
    document.getElementById("opacity").value = opacity;
    document.getElementById("thickness").value = thickness;
    document.getElementById("width").value = width;
    document.getElementById("height").value = height;
}

//refresh inputs (if html didn't catch the input for some reason)
function loadChanges() {
    for (const i of input) {
        getInput(i);
    }
}

//Optimization of Lag (currently only reduces frame rate if needed, but more could be added in the future)
function optimizeLag() {
    //checks the amount of time needed to run draw()
    let previousTime = performance.now();
    draw();
    let currentTime = performance.now(), calculatedTime = currentTime - previousTime;
    //decides on frameRate based on the performance
    if (calculatedTime > 30) {
        frameRateVal /= 2;
        frameRate(frameRateVal);
        trimDrawing();
    } else {
        frameRateVal = 60;
        frameRate(frameRateVal);
    }
}
