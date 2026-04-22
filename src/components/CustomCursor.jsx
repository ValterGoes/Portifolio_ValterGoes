import { useState, useEffect, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    const target = e.target;
    const isClickable =
      target.closest('a, button, [role="button"], input, textarea, select, label[for]') ||
      window.getComputedStyle(target).cursor === 'pointer';
    setIsPointer(!!isClickable);
  }, [isVisible]);

  useEffect(() => {
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [onMouseMove]);

  // Hide on touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot (inner) */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-normal"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full bg-[#66d9ed] transition-transform duration-100"
          style={{
            width: isClicking ? 6 : 8,
            height: isClicking ? 6 : 8,
            transform: isPointer ? 'scale(0)' : 'scale(1)',
          }}
        />
      </div>

      {/* Ring (outer) */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-normal"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.15s ease-out, opacity 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full border-2 border-[#66d9ed] transition-all duration-200"
          style={{
            width: 40,
            height: 40,
            transform: isPointer
              ? `scale(1.5)${isClicking ? ' scale(1.2)' : ''}`
              : isClicking
                ? 'scale(0.8)'
                : 'scale(1)',
            backgroundColor: isPointer ? 'rgba(102,217,237,0.15)' : 'transparent',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
