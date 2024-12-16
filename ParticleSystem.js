class ParticleSystem {
    constructor() {
      this.particles = [];
      for (let i = 0; i < 400; i++) {
        this.particles.push(new Particle(random(width), random(height)));
      }
    }
    applyMouseAttraction(center, radius) {
        let totalFlow = createVector(0, 0);
        for (let p of this.particles) {
            totalFlow.add(p.vel);
          }
        totalFlow.div(this.particles.length);
        for (let p of this.particles) {
          let direction = p.pos.copy().sub(center); 
          let distance = direction.mag(); 
          if (distance < radius && !p.isMouseReactive) {
            direction.normalize();
            let strength = map(distance, 0, radius, 1, 0) * p.followStrength;
            let oppositeFlow = totalFlow.copy().mult(-1);
            let force = direction.mult(-strength * 0.5); 
            p.vel = oppositeFlow.copy().setMag(p.maxSpeed * strength);
            p.applyForce(force);
            p.applyForce(oppositeFlow);
            p.isMouseReactive = true;
            p.followStrength = constrain(p.followStrength - 0.1, 0, 1);
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
  
  