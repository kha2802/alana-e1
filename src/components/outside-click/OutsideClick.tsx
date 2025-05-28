import { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ children, onOutsideClick }:any) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
    //@ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
