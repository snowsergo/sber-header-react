import { useEffect } from "react";

function useClosingSize(callback) {
    useEffect(() => {
      function handleResize() {
        callback(false);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, [callback]);
  }

  export default useClosingSize