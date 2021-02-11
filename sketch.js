/*
Defining variables/Setup
*/
let colour = "black", thickness = 4, tool = "pen"; //defining the input values
let drawingPoints = [], inputValues = ['colour', 'thickness', 'Tool'];
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
    }
}

/*
Own Functions
*/

function LoadChanges() {
    for (const i of inputValues) {
        getInput(i);
    }
}

function canvasBorder() {
    fill(0, 0, 0, 0);
    rect(width / 2, height / 2, width, height);
}
/*
P5 Functions
*/
function mouseDragged() {
    drawingPoints.push(createVector(mouseX, mouseY));
}

function mouseReleased() {
    drawingPoints = [];
}

/*
Tools
*/
function Pen() {
    push();
    stroke(colour);
    strokeWeight(thickness);
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
    Pen();
    LoadChanges();
}