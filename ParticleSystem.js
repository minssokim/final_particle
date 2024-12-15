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
  
  