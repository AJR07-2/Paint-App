window.addEventListener('keydown', (event) => {
    try {
        if (event.key === 'd') { //sets the current settings back to the default settings 
            thickness = 10;
            document.getElementById("thickness").value = 10;
            colour = "#000000";
            document.getElementById("colour").value = "#000000";
            opacity = 255;
            document.getElementById("opacity").value = 255;
        } else if (event.key === 'h') { //removes the "Help" tab
            let help = document.getElementById("Help");
            help.parentNode.removeChild(help);
        } else if (event.key === 'z') { //undo drawing
            try {
                if (drawn[drawn.length - 1] == undefined) throw "Trying to redo nothing eh?";
                undo.push(drawn[drawn.length - 1]);
                drawn.pop();
            } catch (error) { console.log("It's either something weird (error: " + error + ") happened, or u were trying to undo nothing"); }
        } else if (event.key === 'r') { //redo drawing
            try {
                if (undo[undo.length - 1] == undefined) throw "Trying to redo nothing eh?";
                drawn.push(undo[undo.length - 1]);
                undo.pop();
            } catch (error) { console.log("It's either something weird (error: " + error + ") happened, or u were trying to undo nothing"); }
        } else if (event.key === 'c') { //generate a random colour
            getInput('randomColour');
        } else if (event.key === 's') { //decreases thickness
            thickness -= 10;
            document.getElementById("thickness").value -= 10;
        } else if (event.key === "t") { //increases thickness
            thickness += 10;
            document.getElementById("thickness").value -= -10;
        }
    } catch (error) { //console.logs error (errors occur because the default settings/random colour might not be able to access the colour (eg if its rect Drawer it will not work))
        console.log("Error " + error + " ocurred, please report this at the git repository 'issues' section.");
    }
})

//sets a confirmation message to close this page to avoid accidentally closing
window.onbeforeunload = function (Warn) {
    return("Have you saved your sketch?");
}