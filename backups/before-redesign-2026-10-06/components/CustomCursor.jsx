'use client';
import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dotEl = dotRef.current;

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dotEl.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseEnterLink = () => cursor.classList.add('cursor-hover');
    const onMouseLeaveLink = () => cursor.classList.remove('cursor-hover');

    const animate = () => {
      dot.current.x += (pos.current.x - dot.current.x) * 0.12;
      dot.current.y += (pos.current.y - dot.current.y) * 0.12;
      cursor.style.transform = `translate(${dot.current.x - 20}px, ${dot.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', onMouseMove);

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
