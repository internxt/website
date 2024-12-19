import { useEffect, useState } from 'react';

const hasFocus = () => typeof document !== 'undefined' && document.hasFocus();

const useWindowFocus = () => {
  const [focused, setFocused] = useState(hasFocus); // Focus for first render

  useEffect(() => {
    setFocused(hasFocus()); // Focus for additional renders

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    window.document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        onBlur();
      } else {
        onFocus();
      }
    });

    return () => {
      window.document.removeEventListener('visibilitychange', () => {
        //
      });
    };
  }, []);

  return focused;
};

export default useWindowFocus;
