import { memo, useEffect, useRef } from 'react';

const TWO_PI = Math.PI * 2;

/** A quiet, pointer-reactive canvas texture used behind each surface. */
const DotField = memo(function DotField({ dark = true, dotRadius = 1.2, dotSpacing = 20 }) {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, previousX: -9999, previousY: -9999, speed: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = canvas.getContext('2d');
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const buildDots = () => {
      const step = dotRadius + dotSpacing;
      const columns = Math.ceil(width / step);
      const rows = Math.ceil(height / step);
      dotsRef.current = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = column * step + step / 2;
        const y = row * step + step / 2;
        return { anchorX: x, anchorY: y, x, y };
      });
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildDots();
    };

    let activeUntil = 0;
    let isDrawing = false;

    const onPointerMove = event => {
      const rect = parent.getBoundingClientRect();
      const mouse = mouseRef.current;
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.speed = Math.hypot(mouse.x - mouse.previousX, mouse.y - mouse.previousY);
      mouse.previousX = mouse.x;
      mouse.previousY = mouse.y;
      activeUntil = performance.now() + 220;
      if (!isDrawing) {
        isDrawing = true;
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    const draw = () => {
      const mouse = mouseRef.current;
      const radius = 270;
      const radiusSquared = radius * radius;
      const baseRadius = dotRadius / 2;
      context.clearRect(0, 0, width, height);
      /* Slightly brighter dots on the dark canvas for visibility */
      context.fillStyle = 'rgba(255, 255, 255, 0.10)';
      context.beginPath();
      dotsRef.current.forEach(dot => {
        const dx = mouse.x - dot.anchorX;
        const dy = mouse.y - dot.anchorY;
        const distanceSquared = dx * dx + dy * dy;
        let x = dot.anchorX;
        let y = dot.anchorY;
        let size = baseRadius;
        if (distanceSquared < radiusSquared && mouse.speed > 0.15) {
          const distance = Math.sqrt(distanceSquared) || 1;
          const influence = Math.pow(1 - distance / radius, 2);
          const push = influence * 30;
          x -= (dx / distance) * push;
          y -= (dy / distance) * push;
          size += influence * 1.4;
        }
        dot.x += (x - dot.x) * 0.14;
        dot.y += (y - dot.y) * 0.14;
        context.moveTo(dot.x + size, dot.y);
        context.arc(dot.x, dot.y, size, 0, TWO_PI);
      });
      context.fill();
      mouse.speed *= 0.86;
      if (performance.now() < activeUntil || mouse.speed > 0.1) {
        frameRef.current = requestAnimationFrame(draw);
      } else {
        isDrawing = false;
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    parent.addEventListener('pointermove', onPointerMove, { passive: true });
    resize();
    draw();
    return () => {
      observer.disconnect();
      parent.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [dark, dotRadius, dotSpacing]);

  return <canvas ref={canvasRef} className="dot-field" aria-hidden="true" />;
});

export default DotField;
