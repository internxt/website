import React, { useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
}

const RevealX = ({ children, className, direction }: RevealProps) => {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(direction === 'left' ? '.revealXLeft' : '.revealXRight');

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  return <div className={`${direction === 'left' ? 'revealXLeft' : 'revealXRight'}  ${className}`}>{children}</div>;
};

export default RevealX;
