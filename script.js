var matrix = [];
var side = 7;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];  
var waterArr = [];
var fireArr = [];
matrix_length = 75;
matrix_hight = 75;
function setup() {
 for (var i = 0; i < matrix_length; i++) {
      matrix[i] = [];
   for (var j = 0; j < matrix_hight; j++) {
      matrix[i][j] = random(0,4.5) | 0;
      }
 }
    matrix[5][45] = 5;
    matrix[45][5] = 5;
    matrix[5][5] = 5;
    matrix[45][45] = 5;
   frameRate(10);
   createCanvas(matrix[0].length * side, matrix.length * side);
   strokeWeight(0.1);
   background('#acacac');
   for (var y = 0; y < matrix.length; y++)
      for (var x = 0; x < matrix[y].length; x++)
      {
         if (matrix[y][x] == 1) {
            var gr = new Grass(x, y);
            grassArr.push(gr);
         }
         else if (matrix[y][x] == 2 || matrix[y][x] == -1) {
            var xt = new xotaker(x, y);
            xotakerArr.push(xt);
         }
         else if (matrix[y][x] == 3){
            var gish = new gishatich(x, y);
            gishatichArr.push(gish);
         }
         else if (matrix[y][x] == 4){
            var wt = new water(x, y);
            waterArr.push(wt);
         }
         else if (matrix[y][x] == 5){
            var fire1 = new fire(x, y);
            fireArr.push(fire1);
         }
      }
}
function draw() {
   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] == 1) {
           fill("green");
           rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 0) {
           fill("#acacac");
           rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 2){
            fill("yellow");
            rect(x*side, y*side, side, side);
         }
         else if (matrix[y][x] == 3){
            fill("orange");
            rect(x*side, y*side, side, side);
         } 
         else if (matrix[y][x] == 4){
            fill("blue");
            rect(x*side, y*side, side, side);
         } 
         else if (matrix[y][x] == 5){
            fill("red");
            rect(x*side, y*side, side, side);
         } 
       }
  }
  for (var i in grassArr) {
    grassArr[i].bazmanal();
  }
  for (var i in xotakerArr) {
      xotakerArr[i].utel();
      xotakerArr[i].sharjvel();
      xotakerArr[i].bazmanal();
      xotakerArr[i].mahanal();
  }
  for (var i in gishatichArr) {
      gishatichArr[i].utel();
      gishatichArr[i].sharjvel();
      gishatichArr[i].bazmanal();
      gishatichArr[i].mahanal();
  }
  for (var i in waterArr) {
      waterArr[i].utel();
      waterArr[i].sharjvel();
      waterArr[i].mah();
  }
  for (var i in fireArr) {
      fireArr[i].utel();
      fireArr[i].mah();
  }
}

