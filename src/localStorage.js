function Save() {
    const localStorage = window.localStorage;
    localStorage.setItem('Drawn', drawn);
    localStorage.setItem('Colour', colour);
    localStorage.setItem('Thickness', thickness);
    localStorage.setItem('Opacity', opacity);
    localStorage.setItem('Tool', tool);
    localStorage.setItem('ColourSettings', colourSettings);
    console.log(colourSettings);
}

function retrieve() {
    const localStorage = window.localStorage;
    try {
        drawn = localStorage.getItem('Drawn');
        colourSettings = localStorage.getItem('ColourSettings');
        colour = localStorage.getItem('Colour');
        document.getElementById('Colour').value = colour;
        thickness = localStorage.getItem('Thickness');
        document.getElementById('Thickness').value = thickness;
        opacity = localStorage.getItem('Opacity');
        document.getElementById('Opacity').value = opacity;
        tool = localStorage.getItem('Tool');
        document.getElementById('Tool').value = tool;
        console.log(colourSettings);
    } catch (error) {
        console.log(error + " , probably because u haven't saved anything before")
    }
}