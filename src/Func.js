function reloadDrawn() {
    push();
    for (const i of drawn) {
        beginShape();
        try {
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
            } else {
                throw "."
            }
        } catch {
            noFill();
            colourToUse = color(i[1][0]);
            colourToUse.setAlpha(i[1][2]);
            strokeWeight(i[1][1]);
            stroke(colourToUse);
        }
        let previousX, previousY;
        for (const j of i[0]) {
            //exclusive configs for each tool when reloading drawn
            if (j[1] == "Eraser") {
                stroke("white");
                noFill();
            } else if (j[1] == "Highlighter") {
                endShape();
                if (previousY != null) {
                    line(previousX + i[1][2] / 2, previousY + i[1][2] / 2, j[0][0], j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                beginShape();
                continue;
            } else if (j[i] == "Line Drawer") {
                endShape();
                if (previousY != null) {
                    line(previousX, previousY, j[0][0], j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                beginShape();
                continue;
            } else if (j[1] == "Rect Drawer") {
                beginShape();
                if (previousY != null) {
                    rect((previousX + j[0][0]) / 2, (previousY + j[0][1]) / 2, previousX - j[0][0], previousY - j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                endShape();
                continue;
            }
            vertex(j[0][0], j[0][1]);
        }
        endShape();
    }
    pop();
}

function defaultSettings() {
    noFill();
    let preColour = colour;
    colour = color(colour);
    colour.setAlpha(opacity);
    stroke(colour);
    colour = preColour;
    strokeWeight(thickness);
}

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

function canvasBorder(opacity) {
    fill(255, 255, 255, opacity);
    rect(width / 2, height / 2, width, height);
}

//taken from https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

function RandomColour() {
    let letters = '0123456789ABCDEF'; colour = '#';
    for (var i = 0; i < 6; i++) colour += letters[Math.floor(Math.random() * 16)];
    document.getElementById("colour").value = colour;
}

function confirmExpansion(width1, height1) {
    if (width1 > 600 || height1 > 600) {
        let result = prompt('If you expand to a big size, you might lag the website quite badly. Are you sure? (yes if u are)');
        if (result == "yes") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function syncJStoHTML() {
    document.getElementById("colour").value = colour;
    document.getElementById("tool").value = tool;
    document.getElementById("opacity").value = opacity;
    document.getElementById("thickness").value = thickness;
    document.getElementById("width").value = width;
    document.getElementById("height").value = height;
}

function loadChanges() {
    for (const i of input) {
        getInput(i);
    }
}