//parses the drawn line details into localStorage for browser
function Store() {
    const localStorage = window.localStorage;
    //get ready data to parse
    let toStore = JSON.stringify([colour, thickness, opacity, tool, width, height, JSON.stringify(drawn)]);
    //request file name
    let name = prompt("What would you like to save this sketch as?"), Sketches = [];
    //add it the current drawings to a different sketch, and then add the sketch name to the sketch name list so it can be accessed later
    try {
        Sketches = JSON.parse(localStorage.getItem('sketches'));
        if (Sketches == null) throw "";
    } catch {
        Sketches = [];
    }
    if (Sketches.indexOf(name) == -1) Sketches.push(name);
    localStorage.setItem('sketches', JSON.stringify(Sketches));
    localStorage.setItem(name, toStore)
    alert("'" + name + "' was saved.");
}

function retrieve() {
    //retrieves drawing from local storage
    //try and catch in case drawing is outdated in the case of an update to the code
    try {
        const localStorage = window.localStorage;
        //load available sketches to retrieve
        let sketchesAvailable = JSON.parse(localStorage.getItem('sketches')), sketchChosen;

        //find a valid sketch to retrieve
        try {
            let string = "", counter = 0;
            for (const i of sketchesAvailable) { counter++; string += counter + ". " + i + "\n";}
            sketchChosen = prompt("Which sketch would you want to retrieve? Here are the stored sketches so far: " + string);
        } catch (error){
            alert("Retrieving cancelled");
            console.log(error)
        }
        if (sketchesAvailable.indexOf(sketchChosen) == -1) {
            alert("That's an invalid sketch. (This is case-sensitive)")
            return null;
        }

        //each retrieves the sketch and sets it to the global variable value
        try {
            let Stored = JSON.parse(localStorage.getItem(sketchChosen)); //parses data
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
    //clears all saved sketches so far
    localStorage = window.localStorage;
    let prompt1 = prompt("Are you sure? All saved sketches will be removed ('Yes' if u are)");
    if (prompt1 == "Yes") localStorage.clear();
}
