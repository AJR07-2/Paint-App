let colour = "", thickness = 4; //defining the input values
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

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
        ClearCanvas();
    }
}

function drawTemplate() {
    push();
    noStroke();
    if (mouseIsPressed) {
        fill(colour);
        console.log(colour);
        circle(mouseX, mouseY, thickness);
    }
    pop();
}

function ClearCanvas() {
    clear();
}

function draw() {
    background(0, 0);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(width / 2, height / 2, width, height);
    drawTemplate();
}