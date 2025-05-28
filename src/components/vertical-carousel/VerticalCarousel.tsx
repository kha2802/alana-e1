'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import './VerticalCarousel.css';
import IChildren, { IChildrens } from '@/interfaces/IChildren';

interface IVerticalCarouselItem extends IChildren {
    active?: boolean
    classActive?: string
}
export const VerticalCarouselItem = (props: IVerticalCarouselItem) => {
    const { active = false, classActive = '' } = props
    return <div className={`vertical-carousel-item ${active ? classActive + ' active' : ''}`}>
        {props.children}
    </div>
}
let length = 0
const VerticalCarousel = (props: IChildrens) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const handleWheel = (event: any) => {
        if (event.deltaY > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
        }
    };

    useEffect(() => {
        length = props.children.length
        const container = containerRef.current;
        //@ts-ignore
        container.addEventListener('wheel', handleWheel);
        return () => {
            //@ts-ignore
            container.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <div className="vertical-carousel-container" ref={containerRef}>
            <div
                className="vertical-carousel"
                style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
            >
                {props.children.map((child: ReactNode, index: number) => (
                    <VerticalCarouselItem key={index} active={currentIndex === index}>{child}</VerticalCarouselItem>
                ))}
            </div>
        </div>
    );
};

export default VerticalCarousel;
