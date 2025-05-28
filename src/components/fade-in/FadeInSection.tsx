'use client'
import IChildren from '@/interfaces/IChildren';
import { useEffect, useRef, useState } from 'react';

interface IProps extends IChildren {
  className?: string
}
const FadeInSection = (props: IProps) => {
  const { children, className } = props

  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Thay đổi threshold nếu cần thiết
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      //@ts-ignore
      ref={domRef}
      className={`${className} fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
