import { useEffect, useState } from 'react';

function useWindowSize(callback) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    length: callback(window.innerWidth),
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        length: callback(window.innerWidth),
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [callback]);

  return windowSize;
}

export default useWindowSize;
