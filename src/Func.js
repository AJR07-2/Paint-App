function reloadDrawn() {
    push();
    let counter = 0;
    for (const i of drawn) {
        beginShape();
        noFill();
        colourToUse = color(colourSettings[counter][0]);
        colourToUse.setAlpha(colourSettings[counter][2]);
        strokeWeight(colourSettings[counter][1]);
        stroke(colourToUse);
        counter++;
        for (const j of i) {
            if (j[1] == "Eraser") {
                stroke("white");
                noFill();
            }
            vertex(j[0].x, j[0].y);
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