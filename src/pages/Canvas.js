import React, { useEffect } from 'react';
import './Canvas.css';

const Canvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 800; // Ancho del lienzo
    canvas.height = 600; // Alto del lienzo

    let drawing = false;

    const startDrawing = (e) => {
      drawing = true;
      draw(e);
    };

    const endDrawing = () => {
      drawing = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!drawing) return;
      ctx.lineWidth = 5; // Grosor del pincel
      ctx.lineCap = 'round'; // Pincel redondeado
      ctx.strokeStyle = '#87ceeb'; // Color del pincel

      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', endDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="drawingCanvas"></canvas>
    </div>
  );
};

export default Canvas;
