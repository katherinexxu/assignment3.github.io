function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  background(230);
}


function draw() {
if (mouseIsPressed == true) {
    fill(173,216,230)
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    fill(221,160,221)
    rect(mouseX, mouseY, 50, 50);
  }
}


