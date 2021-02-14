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

function LineDrawer() {
    push();
    defaultSettings();
    stroke("black");
    beginShape();
    for (const line of drawingPoints) {
        vertex(line[0].x, line[0].y);
    }
    endShape();
    pop();
}