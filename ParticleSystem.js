class ParticleSystem {
    constructor() {
      this.particles = [];
      for (let i = 0; i < 400; i++) {
        this.particles.push(new Particle(random(width), random(height)));
      }
    }
    applyMouseAttraction(center, radius) {
        for (let p of this.particles) {
          let direction = p.pos.copy().sub(center); 
          let distance = direction.mag(); 
          if (distance < radius) {
            direction.normalize(); 
            let strength = map(distance, 0, radius, 1, 0); 
            let force = direction.mult(-strength * 0.5); 
            p.applyForce(force);
            this.followStrength = constrain(this.followStrength + 0.01, 0, 1);
          }
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
  
  