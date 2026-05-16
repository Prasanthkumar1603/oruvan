import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    const moveCursor = (e) => {

      mouseX = e.clientX;
      mouseY = e.clientY;

      // SMALL DOT
      if (dotRef.current) {

        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;

      }

    };

    const animate = () => {

      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;

      if (outlineRef.current) {

        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;

      }

      requestAnimationFrame(animate);

    };

    window.addEventListener('mousemove', moveCursor);

    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };

  }, []);

  return (
    <>
    
      {/* SMALL DOT */}
      <div
        ref={dotRef}
        className="
          hidden md:block
          fixed
          top-0
          left-0
          w-3
          h-3
          bg-red-500
          rounded-full
          pointer-events-none
          z-[9999]
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      {/* OUTLINE / GLOW */}
      <div
        ref={outlineRef}
        className="
          hidden md:block
          fixed
          top-0
          left-0
          w-12
          h-12
          border
          border-red-500/40
          bg-red-500/10
          
          rounded-full
          pointer-events-none
          z-[9998]
          -translate-x-1/2
          -translate-y-1/2
        "
      />

    </>
  );
};

export default CursorEffect;