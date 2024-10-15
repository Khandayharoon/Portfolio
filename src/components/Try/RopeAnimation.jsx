import React, { useRef, useEffect } from "react";

// Vector class for mathematical operations
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  add(x, y) {
    if (x instanceof Vector) {
      this.x += x.x;
      this.y += x.y;
    } else {
      this.x += x;
      this.y += y;
    }
    return this;
  }

  mult(value) {
    this.x *= value;
    this.y *= value;
    return this;
  }

  setXY(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  dist(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Mouse class for tracking interactions
class Mouse {
  constructor(canvas) {
    this.pos = new Vector(-1000, -1000);
    this.radius = 40;

    canvas.onmousemove = (e) => this.pos.setXY(e.clientX, e.clientY);
    canvas.ontouchmove = (e) =>
      this.pos.setXY(e.touches[0].clientX, e.touches[0].clientY);
    canvas.ontouchend = canvas.ontouchcancel = () =>
      this.pos.setXY(-1000, -1000);
  }
}

// Rope animation logic
class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldPos = new Vector(x, y);
    this.friction = 0.97;
    this.gravity = new Vector(0, 0.6);
    this.mass = 1;
    this.pinned = false;
  }

  update(mouse) {
    if (this.pinned) return;

    const vel = Vector.sub(this.pos, this.oldPos);
    this.oldPos.setXY(this.pos.x, this.pos.y);

    vel.mult(this.friction).add(this.gravity);

    const direction = Vector.sub(mouse.pos, this.pos);
    const dist = Math.sqrt(direction.x ** 2 + direction.y ** 2);
    direction.mult(1 / dist);

    const force = Math.max((mouse.radius - dist) / mouse.radius, 0);
    if (force > 0.6) this.pos.setXY(mouse.pos.x, mouse.pos.y);
    else this.pos.add(vel).add(direction.mult(force));
  }

  draw(ctx) {
    ctx.fillStyle = "#aaa";
    ctx.fillRect(
      this.pos.x - this.mass,
      this.pos.y - this.mass,
      2 * this.mass,
      2 * this.mass
    );
  }
}

class Stick {
  constructor(p1, p2) {
    this.startPoint = p1;
    this.endPoint = p2;
    this.length = p1.pos.dist(p2.pos);
    this.tension = 0.3;
  }

  update() {
    const dx = this.endPoint.pos.x - this.startPoint.pos.x;
    const dy = this.endPoint.pos.y - this.startPoint.pos.y;
    const dist = Math.sqrt(dx ** 2 + dy ** 2);
    const diff = (dist - this.length) / dist;

    const offsetX = diff * dx * this.tension;
    const offsetY = diff * dy * this.tension;

    const m1 = this.endPoint.mass / (this.startPoint.mass + this.endPoint.mass);
    const m2 =
      this.startPoint.mass / (this.startPoint.mass + this.endPoint.mass);

    if (!this.startPoint.pinned) {
      this.startPoint.pos.x += offsetX * m1;
      this.startPoint.pos.y += offsetY * m1;
    }
    if (!this.endPoint.pinned) {
      this.endPoint.pos.x -= offsetX * m2;
      this.endPoint.pos.y -= offsetY * m2;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#999";
    ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
    ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);
    ctx.stroke();
    ctx.closePath();
  }
}

class Rope {
  constructor({ x, y, segments, gap }) {
    this.dots = Array.from(
      { length: segments },
      (_, i) => new Dot(x, y + i * gap)
    );
    this.sticks = this.dots
      .slice(0, -1)
      .map((dot, i) => new Stick(dot, this.dots[i + 1]));
    this.dots[0].pinned = true;
  }

  update(mouse) {
    this.dots.forEach((dot) => dot.update(mouse));
    this.sticks.forEach((stick) => stick.update());
  }

  draw(ctx) {
    this.dots.forEach((dot) => dot.draw(ctx));
    this.sticks.forEach((stick) => stick.draw(ctx));
  }
}

const RopeAnimation = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef(null);
  const ropesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = new Mouse(canvas);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ropesRef.current = Array.from(
        { length: Math.floor(window.innerWidth * 0.06) },
        () =>
          new Rope({
            x: Math.random() * canvas.width * 0.4 + canvas.width * 0.3,
            y: 0,
            segments: 10,
            gap: Math.random() * 30 + 20,
          })
      );
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ropesRef.current.forEach((rope) => {
        rope.update(mouse);
        rope.draw(ctx);
      });
      requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default RopeAnimation;
