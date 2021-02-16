function reloadDrawn() {
    push();
    for (const i of drawn) {
        beginShape();
        noFill();
        colourToUse = color(i[1][0]);
        colourToUse.setAlpha(i[1][2]);
        strokeWeight(i[1][1]);
        stroke(colourToUse);
        let previousX, previousY;
        for (const j of i[0]) {
            if (j[1] == "Eraser") {
                stroke("white");
                noFill();
            } else if (j[1] == "Line Drawer") {
                vertex(j[0], j[1]);
            } else if (j[1] == "Highlighter") {
                endShape();
                if (previousY != null) {
                    line(previousX + 5, previousY + 5, j[0][0], j[0][1]);
                }
                previousX = j[0][0]; previousY = j[0][1];
                beginShape();
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
    colour = color(colour);
    colour.setAlpha(opacity);
    stroke(colour);
    strokeWeight(thickness);
}

function LoadChanges() {
    for (const i of toBeRun) {
        getInput(i);
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
    document.getElementById("Colour").value = colour;
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
    document.getElementById("Colour").value = colour;
    document.getElementById("Tool").value = tool;
    document.getElementById("Opacity").value = opacity;
    document.getElementById("Thickness").value = thickness;
    document.getElementById("width").value = width;
    document.getElementById("height").value = height;
}