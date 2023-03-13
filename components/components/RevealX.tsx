import React, { useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const RevealY = ({ children, className }: RevealProps) => {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll('.revealX');

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

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
  return <div className={`revealX ${className}`}>{children}</div>;
};

export default RevealY;
