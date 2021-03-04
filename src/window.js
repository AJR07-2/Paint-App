window.addEventListener('keydown', (event) => {
    try {
        if (event.key === 'd') {//default
            thickness = 10;
             document.getElementById("thickness").value = 10;
             colour = "#000000";
             document.getElementById("colour").value = "#000000";
             opacity = 255;
             document.getElementById("opacity").value = 255;
        } else if (event.key === 'h') {
            alert("Go to https://github.com/AJR07-2/Paint-App and read the README.md file :)")
            help = document.getElementById("Help");
            help.parentNode.removeChild(help);
        } else if (event.key === 'z') {
            try {
                if (drawn[drawn.length - 1] == undefined) throw "Trying to redo nothing eh?";
                undo.push(drawn[drawn.length - 1]);
                drawn.pop();
            } catch (error) { console.log("It's either something weird (error: " + error + ") happened, or u were trying to undo nothing"); }
        } else if (event.key === 'r') {
            try {
                if (undo[undo.length - 1] == undefined) throw "Trying to redo nothing eh?";
                drawn.push(undo[undo.length - 1]);
                undo.pop();
            } catch (error) { console.log("It's either something weird (error: " + error + ") happened, or u were trying to undo nothing"); }
        } else if (event.key === 'c') {
            getInput('randomColour');
        }
    } catch (error) {
        console.log("Error " + error + " ocurred, please report this at the git repository 'issues' section.");
    }
})

window.onbeforeunload = function (Warn) {
    return("Have you saved your sketch?");
}

document.onkeydown = function (event) {
    if (event.keyCode === 37) {//smaller
        thickness -= 10;
        document.getElementById("thickness").value -= 10;
    } else if (event.keyCode === 39) { 
        thickness += 10;
        document.getElementById("thickness").value -= -10;
    } 
}