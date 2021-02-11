import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  // const isMobile = width < 768 ? true : false;
  // const isTablet = width >= 768 ? width < 1440 ? true : false;
  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;

  if (width < 768) {
    isMobile = true;
  } else if (width >= 768 && width < 1440) {
    isTablet = true;
  } else if (width >= 1440) {
    isDesktop = true;
  }

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}