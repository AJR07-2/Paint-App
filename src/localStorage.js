function Save() {
    const localStorage = window.localStorage;
    let toStore = JSON.stringify([colour, thickness, opacity, tool, width, height, JSON.stringify(drawn)]);
    let name = prompt("What would you like to save this sketch as?"), Sketches = [];
    try {
        Sketches = JSON.parse(localStorage.getItem('sketches'));
        if (Sketches == null) {
            throw "";
        }
    } catch {
        Sketches = [];
    }
    if (Sketches.indexOf(name) == -1) {
        Sketches.push(name);
    }
    localStorage.setItem('sketches', JSON.stringify(Sketches));
    localStorage.setItem(name, toStore)
    alert("(" + name + ") was saved.");
    console.log(drawn);
}

function retrieve() {
    try {
        const localStorage = window.localStorage;
        let sketchesAvailable = JSON.parse(localStorage.getItem('sketches')), sketchChosen;
        try {
            let string = "", counter = 0;
            for (const i of sketchesAvailable) { counter++; string += counter + ". " + i + "\n";}
            sketchChosen = prompt("Which sketch would you want to retrieve? Here are the stored sketches so far: " + string);
        } catch {
            alert("Retrieving cancelled")
        }
        if (sketchesAvailable.indexOf(sketchChosen) == -1) {
            alert("That's an invalid sketch. (This is case-sensitive)")
            return null;
        }
        try {
            let Stored = JSON.parse(localStorage.getItem(sketchChosen));
            colour = Stored[0];
            thickness = Stored[1];
            opacity = Stored[2];
            tool = Stored[3];
            width = Stored[4];
            height = Stored[5];
            drawn = JSON.parse(Stored[6]);
            syncJStoHTML();
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error + " happened, please raise this as an issue on github issues.")
    }
}

function clearSaved() {
    localStorage = window.localStorage;
    prompt("Are you sure? All saved sketches will be removed (yes if u are)");
    if (prompt == "Yes") {
        localStorage.clear("sketches");
    }
}
