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
    } else if (tool == "Line Drawer") {
        toCheck = LineDrawerReq;
    } else if (tool == "Highlighter") {
        alert("This tool should be used as minimally as possible, due to the potential lag it creates")
        toCheck = highlighterReq;
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
        //If its colour, random colour generator
        if (i[0] == "Colour") {
            let randomColour = document.createElement("input");
            randomColour.setAttribute("type", "button");
            randomColour.setAttribute("value", "Random Colour")
            randomColour.setAttribute("id", "RandomColour");
            randomColour.setAttribute("onclick", "getInput('RandomColour')")
            parentDiv.appendChild(randomColour);
        }
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
        vertex(line[0][0], line[0][1]);
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
        vertex(line[0][0], line[0][1]);
    }
    endShape();
    pop();
}

function LineDrawer() {
    push();
    defaultSettings();
    stroke("black");
    beginShape();
    for (const line of drawingPoints) {
        vertex(line[0][0], line[0][1]);
    }
    endShape();
    pop();
}

function Highlighter() {
    push();
    defaultSettings();
    let previousX, previousY;
    for (const line1 of drawingPoints) {
        if (previousX != null) {
            line(previousX + 5, previousY + 5, line1[0][0], line1[0][1]);
        }
        previousX = line1[0][0];
        previousY = line1[0][1];
    }
    pop();
}