
var hr , min, sc ;
var mnAngle,hrAngle,scAngle;


function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);

    
    sc = second()
    scAngle = map(sc , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let e = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();

    hr = hour()
    hrAngle = map(hr%12 , 0 , 12 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(hrAngle);
    stroke(255,10,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();

    mn = minute()
    mnAngle = map(mn , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let b = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(mnAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();

  
  drawSprites();
  }