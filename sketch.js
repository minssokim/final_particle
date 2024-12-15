let particleSystem;

function setup() {
  createCanvas(800, 400);
  particleSystem = new ParticleSystem();
}
function draw() {
  background(30, 30, 50, 50);
  particleSystem.applyMouseAttraction(createVector(mouseX, mouseY), 100);
  let windForce = createVector(map(mouseX, 0, width, -0.5, 0.5), 0);
  particleSystem.applyForce(windForce);
  particleSystem.update();
  particleSystem.show();
  
}