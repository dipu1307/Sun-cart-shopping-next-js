'use client';

import { Button } from '@heroui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import slides from '@/data/heroSlides';

const HeroBanner = () => {

    const [currentSlide, setCurrentSlide]= useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=> (prev === slides.length-1? 0: prev+1));
        }, 5000);
        return () => clearInterval(timer);
    }, [])
    const slide = slides[currentSlide];
    const nextSlide=()=>{
        setCurrentSlide((prev)=>(prev === slides.length -1 ? 0: prev+1));
    }
    const previousSlide=()=>{
        setCurrentSlide((prev)=> (prev === 0 ? slides.length -1 : prev -1 ));
    }
    return (
      <section className="relative mx-auto w-full overflow-hidden bg-gradient-to-r from-[#FFF4B8] via-[#FFF8D6] to-[#A8E9DF]">
        {/* Unified container with gradient covering both sides smoothly */}
        <div className="relative grid min-h-[80vh] items-center bg-gradient-to-r from-[#FFF4B8] via-[#FFF8D6] to-[#A8E9DF] md:min-h-[320px] md:grid-cols-[1fr_1fr] lg:min-h-[600px]">
          {/* Left Content */}
          <div className="relative z-10 px-6 py-10 md:py-8 md:pl-10 lg:pl-16">
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#174C3E]">
              {slide.subtitle}
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-[#174C3E] md:text-4xl lg:text-5xl">
              {slide.title}
              <span className="block mt-1">
                {slide.offerPrefix}
                <span className="text-[#FF5C5C]">{slide.offerHighlight}</span>
              </span>
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-700 lg:text-base">
              {slide.description}
            </p>

            <div className="mt-5">
              <Button className="rounded-lg bg-[#FF5C5C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#E84A4A]">
                {slide.buttonText} →
              </Button>
            </div>
          </div>

          {/* Right Image with a subtle gradient overlay to merge edges */}
          <div className="relative min-h-[260px] self-stretch md:min-h-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-72 bg-gradient-to-r from-[#FFF8D6] to-transparent md:block" />
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-25 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#174C3E] shadow-md hover:bg-[#F9D66B] transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-25 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#174C3E] shadow-md hover:bg-[#F9D66B] transition-all"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots centered relative to the whole section */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {slides.key
            ? null
            : slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-6 bg-[#168778]"
                      : "w-2 bg-gray-400/70"
                  }`}
                />
              ))}
        </div>
      </section>
    );
};

export default HeroBanner;