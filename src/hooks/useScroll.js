import { useLayoutEffect, useState } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY };
};

export default useScroll;
