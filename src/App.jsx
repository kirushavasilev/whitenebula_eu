import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

const MatrixLoader = ({ onComplete }) => {
  useEffect(() => {
    const canvas = document.getElementById('matrixPreloader');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const fontSize = 16;
    let columns, drops;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()-_=+";
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    }
    
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#9dfc03";
      ctx.font = fontSize + "px monospace";
    
      for (let i = 0; i < columns; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();
    
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div 
      id="preloader" 
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex items-center justify-center transition-opacity duration-1000"
    >
      <canvas 
        id="matrixPreloader" 
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 text-center">
        <img src="/logo.png" alt="White Nebula" className="w-20 h-20 mx-auto mb-4 animate-pulse" />
        <div className="text-nebula-green font-mono text-lg">Initializing...</div>
      </div>
    </div>
  );
};

const CursorTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = [];
    
    for (let i = 0; i < 10; i++) {
      const circle = document.createElement("div");
      circle.className = "cursor-trail-circle";
      circle.style.cssText = `
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: #9dfc03;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.9;
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
      `;
      document.body.appendChild(circle);
      circles.push(circle);
      circle.x = 0;
      circle.y = 0;
    }

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 8}px`;
        circle.style.top = `${y - 8}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        circle.style.opacity = `${1 - index * 0.1}`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      circles.forEach(circle => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      });
    };
  }, []);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
