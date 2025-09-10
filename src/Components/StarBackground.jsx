import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.002 + 0.001,
    }));

    const meteors = [];
    let bgGradient = null;

    function updateGradient() {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0a1f3f");
      gradient.addColorStop(1, "#000010");
      bgGradient = gradient;
    }

    function generateStars() {
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.002 + 0.001,
      }));
    }

    function drawStars() {
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.alpha += star.speed;
        const flicker = Math.abs(Math.sin(star.alpha * Math.PI));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${flicker})`;
        ctx.fill();
      });
    }

    function drawMeteors() {
      meteors.forEach((meteor, i) => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.len *= 0.992;

        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.vx * meteor.len,
          meteor.y - meteor.vy * meteor.len
        );
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "transparent");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.vx * meteor.len,
          meteor.y - meteor.vy * meteor.len
        );
        ctx.stroke();

        if (meteor.x > width + 50 || meteor.y > height + 50 || meteor.len < 10) {
          meteors.splice(i, 1);
        }
      });
    }

    function loop() {
      drawStars();
      drawMeteors();
      requestAnimationFrame(loop);
    }

    function spawnMeteor() {
      meteors.push({
        x: Math.random() * width * 0.8,
        y: -50,
        vx: Math.random() * 2 + 4,
        vy: Math.random() * 1 + 3,
        len: Math.random() * 80 + 80,
      });
    }

    const meteorInterval = setInterval(spawnMeteor, 2500);

    updateGradient();
    loop();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateGradient();
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(meteorInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};
