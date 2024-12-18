let particleSystem;

function setup() {
  createCanvas(800, 600);
  noCursor();
  particleSystem = new ParticleSystem();

}
function draw() {
  background(30, 30, 50, 50);
  particleSystem.applyMouseAttraction(createVector(mouseX, mouseY), 30);
  let windForce = createVector(map(mouseX, 0, width, -0.5, 0.5), 0);
  particleSystem.applyForce(windForce);
  particleSystem.update();
  particleSystem.show();
  
}