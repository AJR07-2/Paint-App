function changeTool() {
    let toCheck, parentDiv = document.getElementById("Tool Selection");
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    if (tool == "Pen") { toCheck = penReq; }
    else if (tool == "Eraser") { toCheck = eraserReq; }
    else if (tool == "Line Drawer") { toCheck = LineDrawerReq; }
    else if (tool == "Highlighter") {
        alert("This tool should be used as minimally as possible, due to the potential lag it creates. (Note, the thickness automatically adjusts other values (that you are unable to access)")
        toCheck = highlighterReq;
        opacity = 15;}
    else if (tool == "Rect Drawer") {toCheck = rectDrawerReq}
    input = [];
    for (const i of toCheck) {
        input.push(i[0]);
        //label
        let element = document.createElement("label");
        element.setAttribute("for", i[0]);
        element.innerHTML = i[0];
        parentDiv.appendChild(element);
        //Input
        let setupValues = ["id", "value", "type"], counter = 0;
        let inputElement = document.createElement("input");
        for (const j of setupValues) {
            inputElement.setAttribute(j, i[counter]);
            counter++;
        }
        inputElement.setAttribute("onclick", "getInput('" + i[0] + "')");
        parentDiv.appendChild(inputElement);
        //If its colour, random colour generator
        if (i[0] == "colour") {
            let randomColour = document.createElement("input");
            randomColour.setAttribute("type", "button");
            randomColour.setAttribute("value", "Random Colour")
            randomColour.setAttribute("id", "randomColour");
            randomColour.setAttribute("onclick", "getInput('randomColour')")
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
    try {
        line(drawingPoints[0][0][0], drawingPoints[0][0][1], lineStartX, lineStartY);
    } catch {//do nothing
    }
    pop();
}

function Highlighter() {
    push();
    defaultSettings();
    let previousX, previousY;
    for (const line1 of drawingPoints) {
        if (previousX != null) {
            line(previousX + opacity/2, previousY + opacity/2, line1[0][0], line1[0][1]);
        }
        previousX = line1[0][0];
        previousY = line1[0][1];
    }
    pop();
}

function rectDrawer() {
    push();
    ShapeDrawerSettings();
    try {
        rect((lineStartX + drawingPoints[0][0][0])/2, (lineStartY + drawingPoints[0][0][1])/2, lineStartX - drawingPoints[0][0][0], lineStartY  - drawingPoints[0][0][1]);
    } catch {//do nothing
    }
    pop();
}