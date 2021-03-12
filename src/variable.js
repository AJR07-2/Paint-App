//Default values
let colour = "black";
let thickness = 10;
let tool = "Pen";
let opacity = 255;
let width = 400, previousWidth = 400;
let height = 400, previousHeight = 400;
let refreshValues = ['colour', 'thickness', 'tool', 'opacity', 'width', 'height']
let frameRateVal = 60;
let delay = 0;
let canvas1;

//Arrays storing points that have been drawn
let drawingPoints = [], drawn = [], undo = [];

//tools that should not have lines drawn when mouseDragged
let NoDrag = ["Line Drawer", "Rect Drawer"]

//inputs
let input = ["colour", "thickness", "opacity", "height", "width"]

//Shape drawing variables
let fillOrNot, colourFill, opacityFill, border, colourBorder, opacityBorder, cornerRadius;

//Tool Properties Requirements (for easy changing of HTML via JS)
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

