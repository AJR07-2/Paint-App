/*
Defining variables/Setup
*/
let colour = "black", thickness = 4, tool = "Pen", opacity = 50; //defining the input values
let drawingPoints = [], inputValues = ['colour', 'thickness', 'Tool', 'opacity'], drawn = [], colourSettings = [];
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    frameRate(100);
    background(0, 0);
}

/*
HTML-Javascript Inputs
*/

function getInput(input) {
    if (input == 'colour') {
        colour = document.getElementById(inputValues[0]).value;
    } else if (input == 'thickness') {
        thickness = document.getElementById(inputValues[1]).value;
    } else if (input == 'ResetCanvas') {
        clear();
    } else if (input == 'Tool') {
        tool = document.getElementById(inputValues[2]).value;
    } else if (input == 'opacity') {
        opacity = document.getElementById(inputValues[3]).value;
    }
}

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
            vertex(j.x, j.y);
        }
        endShape();
    }
    pop();
}

/*
Own Functions
*/
function defaultSettings() {
    colour = color(colour);
    colour.setAlpha(opacity);
    stroke(colour);
    strokeWeight(thickness);
}

function LoadChanges() {
    for (const i of inputValues) {
        getInput(i);
    }
}

function canvasBorder() {
    fill(255);
    rect(width / 2, height / 2, width, height);
}
/*
P5 Functions
*/
function mouseDragged() {
    drawingPoints.push(createVector(mouseX, mouseY));
}

function mouseReleased() {
    colourSettings.push([colour, thickness, opacity, tool]);
    drawn.push(drawingPoints);
    drawingPoints = [];
}

/*
Tools
*/
function Pen() {
    push();
    defaultSettings();
    noFill();
    beginShape();
    for (const line of drawingPoints) {
        vertex(line.x, line.y);
    }
    endShape();
    pop();
}

/*
Runtime
*/
function draw() {
    strokeWeight(20);
    canvasBorder();
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    }
    LoadChanges();
}