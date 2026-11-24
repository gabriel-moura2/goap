function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("aqua");
  translate(100, 250);
  let angle = frameCount * 0.01;
  rotate(angle);
  textSize(60);
  text("🗡️", -50, 30);
}