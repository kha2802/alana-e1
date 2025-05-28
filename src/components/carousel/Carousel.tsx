'use client'
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import IChildren, { IChildrens } from '@/interfaces/IChildren';

interface ICarouselItem extends IChildren {
    isVisible?: boolean
}
export const CarouselItem = (props: ICarouselItem) => {
    const { isVisible = false, children } = props
    return (<div className={`carousel__slide ${isVisible ? 'carousel__slide--visible' : ''}`}>
        {children}
    </div>)
}


interface IProps extends IChildrens {
    interval?: number
}
const Carousel = (props: IProps) => {
    const { interval = 6000, children } = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                //@ts-ignore
                const rect = carouselRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it initially to set the visibility state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const autoPlay = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, interval);

        return () => clearInterval(autoPlay); // Clean up interval on component unmount
    }, [children.length, interval]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };

    return (
        <div className="carousel-container" ref={carouselRef}>
            <button onClick={prevSlide} className="carousel__button carousel__button--left">‹</button>
            <div className="carousel">
                <div className="carousel__slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {children.map((child: React.ReactNode, index: number) => (
                        <CarouselItem key={index} isVisible={isVisible}> {child}</CarouselItem>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className="carousel__button carousel__button--right">›</button>
        </div>
    );
};
export default Carousel;
