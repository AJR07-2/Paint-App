function getInput(input) {
    if (input == 'colour') {
        colour = document.getElementById(refreshValues[0]).value;
    } else if (input == 'thickness') {
        if (tool == "Highlighter") {
            opacity = 200 / thickness;
        }
        thickness = document.getElementById(refreshValues[1]).value;
    } else if (input == 'resetCanvas') {
        drawn = [];
        fill(255);
        rect(width / 2, height / 2, width, height);
    } else if (input == 'tool') {
        tool = document.getElementById(refreshValues[2]).value;
        changeTool();
    } else if (input == 'opacity') {
        opacity = document.getElementById(refreshValues[3]).value;
    } else if (input == 'download') {
        saveCanvas(canvas1, "Image", "png")
    } else if (input == 'randomColour') {
        RandomColour();
    } else if (input == 'save') {
        Save();
    } else if (input == 'load') {
        var result = prompt('Are you sure you want to load the previous sketch? Changes in this current one might be lost!(enter "yes" if u are sure)');
        if (result == 'yes') {
            retrieve();
        }
    } else if (input == "width") {
        if (confirmExpansion(document.getElementById("width"), width)) {
            width = document.getElementById("width").value;
            canvas1 = createCanvas(width, height);
        }
    } else if (input == "height") {
        if (confirmExpansion(width, document.getElementById("height"))) {
            height = document.getElementById("height").value;
            canvas1 = createCanvas(width, height);
        }
    } else if (input == "adjustSize") {
        if (confirmExpansion(windowWidth, windowHeight)) {
            height = windowHeight;
            width = windowWidth;
            canvas1 = createCanvas(width, height);
            document.getElementById("width").value = width;
            document.getElementById("height").value = height;
        }
    } else if (input == "clearSaved") {
        clearSaved();
    }
}
