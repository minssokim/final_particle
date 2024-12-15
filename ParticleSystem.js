class ParticleSystem {
    constructor() {
      this.particles = [];
      for (let i = 0; i < 200; i++) {
        this.particles.push(new Particle(random(width), random(height)));
      }
    }
  
    applyForce(force) {
      for (let p of this.particles) {
        p.applyForce(force);
      }
    }
    applyForceInRadius(force, center, radius) {
        for (let p of this.particles) {
          let distance = p.pos.dist(center); 
          if (distance < radius) {
            let scaledForce = force.copy().mult(1 - distance / radius); 
            p.applyForce(scaledForce);
          }
        }
      }
  
    update() {
      for (let p of this.particles) {
        p.update();
        p.edges();
      }
    }
  
    show() {
      for (let p of this.particles) {
        p.show();
      }
    }
  }
  
  