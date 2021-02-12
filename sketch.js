/*
Defining variables/Setup
*/
let colour = "black", thickness = 4, tool = "Pen", opacity = 50; //defining the input values
let drawingPoints = [], inputValues = ['Colour', 'Thickness', 'Tool', 'Opacity'], drawn = [], colourSettings = [], toBeRun = [];
let eraserReq = [['Thickness', '1', 'number'], ['Opacity', "255", "number"]], penReq = [['Colour', "#000000", "color"], ['Thickness', "1", "number"], ['Opacity', "255", "number"]];
function setup() {
    noFill();
    createCanvas(500, 500);
    rectMode(CENTER);
    frameRate(100);
    background(0, 0);
    changeTool("Pen");
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
        changeTool(tool);
    } else if (input == 'Opacity') {
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
            if (j[1] == "Eraser") {
                stroke(255, 255, 255, opacity);
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

function canvasBorder() {
    fill(255, 255, 255, 0);
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
function changeTool(Tool) {
    console.log(Tool);
    const myNode = document.getElementById("Tool Selection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        
    }
    if (Tool == "Pen") {
        toBeRun = [];
        for (const i of penReq) {
            toBeRun.push(i[0]);
            //label
            let parentDiv = document.getElementById("Tool Selection");
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
    } else if (Tool == "Eraser") {
        toBeRun = [];
        for (const i of eraserReq) {
            console.log(i);
            toBeRun.push(i[0]);
            //label
            let parentDiv = document.getElementById("Tool Selection");
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
    stroke(255, 255, 255, opacity);
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
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    } else if (tool == "Eraser") {
        Eraser();
    }
    LoadChanges();
    canvasBorder();
}