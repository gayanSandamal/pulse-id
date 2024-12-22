'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ImageSliderProps, RadiusMap, SlideProps, SpacerSizeMap, ThemeColors } from '@/types/components';

const Slide = (props: SlideProps) => {
    const { img, images, index, currentIndex, width, setWidth } = props;
    const sliderContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWidth(sliderContainer.current?.clientWidth || 0);
    }, [setWidth]);

    useEffect(() => {
        const handleResize = () => setWidth(sliderContainer.current?.clientWidth || 0);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [img, setWidth]);

    return (
        <div
            key={img.id}
            ref={sliderContainer}
            className="slide flex-shrink-0 flex-grow-0 w-full relative"
            style={{ height: '100%', width: `${100 / images.length}%` }}
        >
            <Image
                src={img.src}
                alt={img.alt || `Slide ${img.id}`}
                fill
                sizes={`${width}px`}
                className="object-cover"
                priority={currentIndex === index}
            />
        </div>
    );
};

const ImageSlider = ({
    images,
    width = '100%',
}: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState<number>(0);

    const sliderRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const goToSlide = useCallback((index: number) => {
        if (index >= 0 && index < images.length) {
            setCurrentIndex(index);
        }
    }, [images.length]);

    const slides = useMemo(() => (
        images.map((img, index) => (
            <Slide
                key={img.id}
                index={index}
                currentIndex={currentIndex}
                img={img}
                images={images}
                width={sliderWidth}
                setWidth={setSliderWidth}
            />
        ))
    ), [images, currentIndex, sliderWidth]);

    const bulletNavigations = useMemo(() => (
        images.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx('rounded-full border border-white', 'transition-colors duration-300')}
                style={{
                    width: 8,
                    height: 8,
                    marginRight: SpacerSizeMap.S8,
                    backgroundColor: currentIndex === index ? ThemeColors.Primary : ThemeColors.Inactive,
                }}
            />
        ))
    ), [images, currentIndex, goToSlide]);

    if (images.length === 0) return null; // nothing to show

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const deltaX = touchStartX.current - touchEndX.current;
            const threshold = 50; // Minimum distance to register as a swipe

            if (deltaX > threshold) {
                // Swipe left (next slide)
                goToSlide(currentIndex + 1);
            } else if (deltaX < -threshold) {
                // Swipe right (previous slide)
                goToSlide(currentIndex - 1);
            }
        }

        // Reset touch positions
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div
            className="relative overflow-hidden"
            style={{ width }}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            <div
                className="w-full h-[300px] overflow-hidden"
                style={{
                    borderRadius: RadiusMap.medium,
                }}
            >
                <div
                    className="flex transition-transform duration-500 h-full"
                    style={{
                        transform: `translateX(-${currentIndex * sliderWidth}px)`,
                        width: `${images.length * 100}%`,
                        borderRadius: RadiusMap.medium,
                    }}
                >
                    {slides}
                </div>
            </div>

            {/* Bullet Navigations */}
            <div
                className="w-full flex justify-center"
                style={{ marginTop: SpacerSizeMap.S12 }}
            >
                {bulletNavigations}
            </div>
        </div>
    );
}

export default ImageSlider;