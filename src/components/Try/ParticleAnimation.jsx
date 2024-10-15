import React, { useRef, useEffect } from "react";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);

  // Particle class to create and manage each particle's properties
  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Boundary check: Reset particle if it goes off-canvas
      if (this.x > window.innerWidth || this.x < 0) this.velocity.x *= -1;
      if (this.y > window.innerHeight || this.y < 0) this.velocity.y *= -1;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 1;
        const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 0.7)`;
        const velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        };
        particlesArray.current.push(new Particle(x, y, size, color, velocity));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" , width:"98vw"}} />;
};

export default ParticleAnimation;
