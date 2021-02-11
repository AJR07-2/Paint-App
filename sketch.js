/*
Defining variables/Setup
*/
let colour = "black", thickness = 4; //defining the input values
let drawingPoints = [];
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
    if (input == 'everything') {
        colour = document.getElementById('colour').value;
        thickness = document.getElementById('thickness').value;
    }
    else if (input == 'colour') {
        colour = document.getElementById('colour').value;
    } else if (input == 'thickness') {
        thickness = document.getElementById('thickness').value;
    } else if (input == 'ResetCanvas') {
        clear();
    }
}

/*
Own Functions
*/

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
    fill(0, 0, 0, 0);
    rect(width / 2, height / 2, width, height);
    Pen();
}