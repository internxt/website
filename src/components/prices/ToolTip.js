import { ReactNode, useRef, useState } from 'react';

export default function Tooltip({ children, title, subtitle, popsFrom, style = 'light', className, delayInMs }) {
  const [visible, setVisible] = useState(true);

  const timeoutRef = useRef < null;

  function show() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  function handleMouseEnter() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    show();
  }
  function handleMouseLeave() {
    if (delayInMs) {
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        hide();
      }, delayInMs);
    } else {
      hide();
    }
  }

  let tooltipPosition = '';
  let trianglePosition = '';
  let triangle = '';

  switch (popsFrom) {
    case 'right':
      tooltipPosition = 'left-full top-1/2 -translate-y-1/2 ml-1.5';
      trianglePosition = 'flex-row-reverse';
      triangle = 'polygon(100% 0%, 100% 100%, 0% 50%)';
      break;
    case 'left':
      tooltipPosition = 'right-full top-1/2 -translate-y-1/2 mr-1.5';
      trianglePosition = 'flex-row';
      triangle = 'polygon(0% 0%, 0% 100%, 100% 50%)';
      break;
    case 'top':
      tooltipPosition = 'bottom-full left-1/2 -translate-x-1/2 mb-1.5 origin-bottom';
      trianglePosition = 'flex-col';
      triangle = 'polygon(0% 0%, 100% 0%, 50% 100%)';
      break;
    case 'bottom':
      tooltipPosition = 'top-full left-1/2 -translate-x-1/2 mt-1.5';
      trianglePosition = 'flex-col-reverse';
      triangle = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      break;
  }

  return (
    <div
      className={`relative w-full xs:w-72 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ lineHeight: 0 }}
    >
      <div
        className={`pointer-events-none absolute  transform ${tooltipPosition} flex items-center ${trianglePosition} transition-all duration-150 ${
          style === 'light' ? 'drop-shadow-tooltip filter' : ''
        } ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
      >
        <div
          className={`flex w-max flex-col rounded-lg px-4 py-1.5 text-center ${
            style === 'dark' ? 'bg-gray-90' : 'bg-primary bg-opacity-10'
          }`}
        >
          <h1 className={`text-base ${style === 'dark' ? 'text-white' : 'text-primary'}`}>
            {title}
            {children}
          </h1>
          {subtitle && (
            <h2 className={`-mt-1 text-sm ${style === 'dark' ? 'text-white opacity-50' : 'text-gray-50'}`}>
              {subtitle}
            </h2>
          )}
        </div>
        <div
          className={`${popsFrom === 'bottom' || popsFrom === 'top' ? 'h-1.5 w-4' : 'h-4 w-1.5'} ${
            style === 'dark' ? 'bg-gray-90' : 'bg-primary bg-opacity-10'
          }`}
          style={{ clipPath: triangle, marginTop: popsFrom === 'top' ? '-1px' : undefined }}
        ></div>
      </div>
    </div>
  );
}
