let particleSystem;

function setup() {
  createCanvas(800, 400);
  particleSystem = new ParticleSystem();
}

function draw() {
  background(30, 30, 50, 50);
  let windForce = createVector(map(mouseX, 0, width, -0.5, 0.5), 0);
  let mouseForce = createVector(map(mouseX, 0, width, -1, 1), map(mouseY, 0, height, -1, 1));
  particleSystem.applyForceInRadius(mouseForce, createVector(mouseX, mouseY), 100);
  particleSystem.applyForce(windForce);
  particleSystem.update();
  particleSystem.show();
  
}