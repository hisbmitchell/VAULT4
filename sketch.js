var video;
var image1;
var gifHeight;
var imgArray = [];
var millisecond;

 
function preload() {
  image1 = createImg("meltingRed.gif");

}
function setup() {
  
   if (windowWidth > 900){
   gifHeight = windowHeight * 1.5; 
  } else {
    gifHeight = windowHeight;
  }
  
  
  image1.position(0,0);
  image1.size(windowWidth, gifHeight);
  
  //   for (var i = 0; i < 579; i++){ 

  // var imgPath = 'melting/' + i + '.png';
  // var createdImage = createImg(imgPath);
  // var newImg = new imageCreate(createdImage, -600, -600);
   
  // imgArray.push(newImg);
   
  //millisecond = millis();
  
  //println(millisecond);
   
  
    
  //}
  
   
  
}
  



  
// function imageCreate(element, x, y) {
//   element.position(x,y);
//   //element.size(windowWidth, gifHeight);
  
//   this.changePos = function(someX, someY) {
//     x = someX; 
//     y = someY; 
//     element.size(windowWidth, gifHeight);
//     element.position(x,y);
// }
// }
   
 
  

 
 //image1.size(windowWidth, gifHeight);
  //image1 = createImg("melt.gif");



function draw() {

  
}

function mousePressed(){
  
  //image(IMAGES[1],50 ,50);
  println('CLICKED!');
  //imgArray[120].changePos(0,0);
  
  // for (var i = 0; i < 179; i++){
  //   imgArray[i].changePos(0,0);
  //   println('Image!');
    
  // }
  
}
