class ParticleSystem {
    constructor() {
      this.particles = [];
      for (let i = 0; i < 400; i++) {
        this.particles.push(new Particle(random(width), random(height)));
      }
    }
    applyMouseAttraction(center, radius) {
        for (let p of this.particles) {
          let direction = p.pos.copy().sub(center); // 파티클 -> 마우스 벡터
          let distance = direction.mag(); // 거리 계산
          if (distance < radius) {
            direction.normalize(); // 방향만 남기고 크기를 1로 설정
            let strength = map(distance, 0, radius, 1, 0); // 거리 비율에 따라 힘 약화
            let force = direction.mult(-strength * 0.5); // 힘의 크기와 방향 설정
            p.applyForce(force);
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
  
  