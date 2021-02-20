//Input Values
let colour = "black";
let thickness = 10;
let tool = "Pen";
let opacity = 255;
let width = 400;
let height = 400;
let refreshValues = ['colour', 'thickness', 'tool', 'opacity', 'width', 'height']

//Canvas drawing points array
let canvas1;
let drawingPoints = [], drawn = [], undo = [];
let NoDrag = ["Line Drawer", "Rect Drawer"]
let input = ["colour", "thickness", "opacity", "height", "width"]



//Tool Properties Requirements
let Sections = [['colour', "#000000", "color"],
    ['thickness', 10, "number"],
    ['opacity', "255", "number"], // ^Default 3
    ["fill", "", "checkbox"],
    ['colour Fill', "#000000", "color"],
    ['corder', "", "checkbox"],
    ['colour Border', "#000000", "color"],
];
let highlighterReq = [Sections[0], Sections[1]];
let eraserReq = [Sections[1]];
let penReq = [Sections[0], Sections[1], Sections[2]];
let LineDrawerReq = [Sections[0], Sections[1], Sections[2]];
let rectDrawerReq = [Sections[3], Sections[4], Sections[5], Sections[6]];
