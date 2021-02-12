/*
Defining variables/Setup
*/
let colour = "black", thickness = 4, tool = "Pen", opacity = 50; //defining the input values
let drawingPoints = [], inputValues = ['Colour', 'Thickness', 'Tool', 'Opacity'], drawn = [], colourSettings = [], toBeRun = [], canvas1;
let eraserReq = [['Thickness', '10', 'number']], penReq = [['Colour', "#000000", "color"], ['Thickness', "1", "number"], ['Opacity', "255", "number"]];
function setup() {
    noFill();
    canvas1 = createCanvas(500, 500);
    rectMode(CENTER);
    frameRate(100);
    background(0, 0, 0, 0);
    changeTool();
}

/*
HTML-Javascript Inputs
*/


function getInput(input) {
    if (input == 'Colour') {
        colour = document.getElementById(inputValues[0]).value;
    } else if (input == 'Thickness') {
        thickness = document.getElementById(inputValues[1]).value;
    } else if (input == 'ResetCanvas') {
        drawn = [];
        fill(255);
        rect(width / 2, height / 2, width, height);
    } else if (input == 'Tool') {
        tool = document.getElementById(inputValues[2]).value;
        changeTool();
    } else if (input == 'Opacity') {
        opacity = document.getElementById(inputValues[3]).value;
    } else if (input == 'Download') {
        saveCanvas(canvas1, "Image", "png")
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

/*
Own Functions
*/
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
/*
P5 Functions
*/
function mouseDragged() {
    drawingPoints.push([createVector(mouseX, mouseY), tool]);
}

function mouseReleased() {
    colourSettings.push([colour, thickness, opacity, tool]);
    drawn.push(drawingPoints);
    drawingPoints = [];
}

/*
Tools
*/
function changeTool() {
    console.log(tool);
    let toCheck, parentDiv = document.getElementById("Tool Selection");
    toBeRun = [];
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    if (tool == "Pen") {
        toCheck = penReq;
    } else if (tool == "Eraser") {
        toCheck = eraserReq;
    }
    for (const i of toCheck) {
        toBeRun.push(i[0]);
        //label
        let element = document.createElement("label");
        element.setAttribute("for", i[0]);
        element.innerHTML = i[0];
        parentDiv.appendChild(element);
        //Input
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", i[2]);
        inputElement.setAttribute("id", i[0]);
        inputElement.setAttribute("value", i[1]);
        inputElement.setAttribute("onclick", "getInput(" + i[0] + ")");
        parentDiv.appendChild(inputElement);
        //backspace
        let backSpace = document.createElement("br");
        parentDiv.appendChild(backSpace);
        let backSpace1 = document.createElement("br");
        parentDiv.appendChild(backSpace1);
    }
}

function Pen() {
    push();
    defaultSettings();
    beginShape();
    for (const line of drawingPoints) {
        vertex(line[0].x, line[0].y);
    }
    endShape();
    pop();
}

function Eraser() {
    push();
    defaultSettings();
    stroke("white");
    beginShape();
    for (const line of drawingPoints) {
        vertex(line[0].x, line[0].y);
    }
    endShape();
    pop();
}
/*
Runtime
*/
function draw() {
    strokeWeight(20);
    canvasBorder(255);
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    } else if (tool == "Eraser") {
        Eraser();
    }
    LoadChanges();
    canvasBorder(0);
}