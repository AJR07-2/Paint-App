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

//Shape drawing variables
let fillOrNot, colourFill, opacityFill, border, colourBorder, opacityBorder, cornerRadius;

//Tool Properties Requirements
let Sections = [['colour', "#000000", "color"],
['thickness', 10, "number"],
['opacity', "255", "number"], // ^Default 3
["fill", "false", "checkbox"], //For shape drawing
['colour fill', "#000000", "color"],
['opacity fill', '255', 'number'],
['border', "true", "checkbox"],
['colour border', "#000000", "color"],
['opacity border', '255', 'number'],
['corner radius', '0', 'number']
];
let highlighterReq = [Sections[0], Sections[1]];
let eraserReq = [Sections[1]];
let penReq = [Sections[0], Sections[1], Sections[2]];
let LineDrawerReq = [Sections[0], Sections[1], Sections[2]];
let rectDrawerReq = [Sections[3], Sections[4], Sections[5], Sections[6], Sections[7], Sections[8], Sections[1], Sections[9]];
