function Save() {
    const localStorage = window.localStorage;
    localStorage.setItem('Drawn', JSON.stringify(drawn)); 
    localStorage.setItem('Colour', colour);
    localStorage.setItem('Thickness', thickness);
    localStorage.setItem('Opacity', opacity);
    localStorage.setItem('Tool', tool);
}

function retrieve() {
    const localStorage = window.localStorage;
    try {
        
        drawn = JSON.parse(localStorage.getItem('Drawn'));
        colour = localStorage.getItem('Colour');
        document.getElementById('Colour').value = colour;
        thickness = localStorage.getItem('Thickness');
        document.getElementById('Thickness').value = thickness;
        opacity = localStorage.getItem('Opacity');
        document.getElementById('Opacity').value = opacity;
        tool = localStorage.getItem('Tool');
        document.getElementById('Tool').value = tool;
    } catch (error) {
        console.log(error + " , probably because u haven't saved anything before")
    }
}