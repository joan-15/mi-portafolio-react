import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Canvas</h1>
      <ReactSketchCanvas
        style={{
          border: '1px solid #000',
          width: '800px',
          height: '600px',
        }}
        strokeWidth={4}
        strokeColor="#000"
      />
    </div>
  );
};

export default Canvas;
