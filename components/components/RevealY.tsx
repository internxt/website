import React, { useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const RevealY = ({ children, className }: RevealProps) => {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.revealY');

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
        //  else {
        //   reveals[i].classList.remove('active');
        // }
      }
    }

    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  return <div className={`revealY ${className}`}>{children}</div>;
};

export default RevealY;
