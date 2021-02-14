window.addEventListener('keydown', (event) => {
    try {
        if (event.ctrlKey) {
            if (event.key === 't') { //thicker
                thickness += 10;
                document.getElementById("Thickness").value -= -10;
            } else if (event.key === 's') {//smaller
                thickness -= 10;
                document.getElementById("Thickness").value -= 10;
            } else if (event.key === 'd') {//default
                thickness = 10;
                document.getElementById("Thickness").value = 10;
                colour = "#000000";
                document.getElementById("Colour").value = "#000000";
                opacity = 255;
                document.getElementById("Opacity").value = 255;
            } else if (event.key === 'h') {
                let README = readTextFile("README.md");
                window.alert(README);
            } else if (event.key === 'z') {
                try {
                    if (drawn[drawn.length - 1] == undefined) throw "Trying to redo nothing eh?";
                    undo.push(drawn[drawn.length - 1]);
                    drawn.pop();
                    undoColours.push(colourSettings[colourSettings.length - 1]);
                    colourSettings.pop();
                } catch (error){
                    console.log("It's either something weird (error: " + error + ") happened, or u were trying to undo nothing")
                }
            } else if (event.key === 'r') {
                try {
                    if (undo[undo.length - 1] == undefined) throw "Trying to redo nothing eh?";
                    drawn.push(undo[undo.length - 1]);
                    undo.pop();
                    colourSettings.push(undoColours[undoColours.length - 1]);
                    undoColours.pop();
                } catch (error) {
                    console.log("It's either something weird (error: " + error + ") happened, or u were trying to redo nothing")
                }
            }
        }
    } catch (error) {
        console.log("Error " + error + " ocurred, please report this at the git repository 'issues' section.");
    }
})

