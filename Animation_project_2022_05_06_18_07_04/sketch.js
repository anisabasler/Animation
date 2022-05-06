 
var r; 
function setup() {
  createCanvas(800, 620);
  noStroke();
}

function draw() {
 //every 30 seconds the background color will change from dark to light blue 
  if (second()<30){
    background(115, 201, 255);
  }
  else{background(250, 177, 100);
      }
  

house();
cloud();
//making the sun move 8 units down every minute 
  //if the function "winky" is true, the sun will wink, if its false, it wont blink. 
  
  translate(0, 8*minute())
if(winky()){
			sun(true);
		}
		else{
			sun(false);
		}
  
}

function house(){
    //house
  fill(237, 212, 123);
  rect(420, 400, 215, 215);
  triangle(420, 400, 530, 300, 635, 400);
  fill(117, 74, 30);
  rect(485, 500, 75, 110);
  fill(0);
  ellipse(542,565,15);
  
}

function cloud(){
  fill(255);
r=70;
 //for loop to made 3 circles for each cloud
  for (var x= 10; width> x; x= x + 113){
  ellipse(x, 50, r);
  for (var z= 30; width> z; z = z +113){
     ellipse(z, 50, r);
    for (var w = 50; width> w; w = w +113){ 
    ellipse(w, 50, r);
    }
  }
}
}
//sun with parameter blink
function sun(blink){
 fill(252, 197, 45);
  ellipse(100, 80, 200);
  fill(194, 154, 10);
  rect(55, 45, 15, 35);
  
  // when blink is true, the right eye of the sun will close
  if(blink){
      rect(120, 55, 30, 15);
  } else {
   rect(120, 45, 15, 35);
  }
  arc(90, 110, 70, 70, 0, PI);
}

// function saying that every 30 seconds the sun will blink 
function winky(){
	var result;
  if (second()<30) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

