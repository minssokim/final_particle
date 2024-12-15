class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(random(-1, 1), random(-1, 1));
      this.acc = createVector(0, 0);
      this.maxSpeed = 2;
      this.followStrength = 1;
    }
  
    applyForce(force) {
      this.acc.add(force); 
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed); 
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.followStrength = constrain(this.followStrength + 0.01, 0, 1);
    }
  
    edges() {
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  
    show() {
      noStroke();
      fill(200, 200, 255, 150);
      ellipse(this.pos.x, this.pos.y, 4);
    }
  }
  