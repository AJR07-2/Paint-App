function reloadDrawn() {
    push();
    for (const i of drawn) {
        beginShape();
        noFill();
        colourToUse = color(drawn[0][1][0]);
        colourToUse.setAlpha(drawn[0][1][2]);
        strokeWeight(drawn[0][1][1]);
        stroke(colourToUse);
        for (const j of i[0]) {
            if (j[1] == "Eraser") {
                stroke("white");
                noFill();
            } else if (j[i] == "Line Drawer") {
                vertex(j[0], j[1]);
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