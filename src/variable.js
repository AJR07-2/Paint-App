let colour = "black", thickness = 4, tool = "Pen", opacity = 50; //defining the input values
let drawingPoints = [], inputValues = ['Colour', 'Thickness', 'Tool', 'Opacity'], drawn = [], toBeRun = [], canvas1, undo = [];
let eraserReq = [['Thickness', 10, 'number']], penReq = [['Colour', "#000000", "color"], ['Thickness', 10, "number"], ['Opacity', "255", "number"]], LineDrawerReq = penReq;
let lineDrawerBool = false;