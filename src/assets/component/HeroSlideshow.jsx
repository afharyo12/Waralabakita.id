import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import slide1 from '../hero_slide_1.jpg';
import slide2 from '../hero_slide_2.png';
import slide3 from '../hero_slide_3.png';
/*
  ... (Slide1, Slide2, and Slide3 components remain exactly the same as before) ...
*/
// === SLIDE 2: "Waralaba Unggulan" ===
function Slide1() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src={slide1}
        alt="Waralaba Unggulan"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800/70 via-blue-900/60 to-blue-950/80"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Waralaba Unggulan Bulan Ini
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Temukan pilihan waralaba dengan performa terbaik di bulan ini
        </p>
        <button className="flex items-center space-x-3 px-6 py-2 border border-white/80 rounded-lg text-lg font-medium bg-black/30 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <span>Lihat Detail</span>
          <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
}

// === SLIDE 1: "Kisah Sukses Mitra" ===
function Slide2() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src={slide2}
        alt="Kisah Sukses Mitra"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Kisah Sukses Mitra
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          “Kami tidak hanya membangun bisnis, kami membangun kepercayaan.”
        </p>
        <button className="flex items-center space-x-3 px-6 py-2 border border-white/80 rounded-lg text-lg font-medium bg-black/30 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <span>Baca Kisahnya</span>
          <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
}


// === SLIDE 3: "Tren Peluang Usaha" ===
function Slide3() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src= {slide3}
        alt="Tren Peluang Usaha"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Tren Peluang Usaha
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          Tren Waralaba Kopi Diprediksi Tumbuh 25% di 2026
        </p>
        <button className="flex items-center space-x-3 px-6 py-2 border-2 border-white rounded-full text-lg font-medium transition-colors hover:bg-white hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <span>Jelajahi Sekarang</span>
          <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
}


// --- Slide Data (Unchanged) ---
const slides = [
  { id: 1, content: <Slide1 /> },
  { id: 2, content: <Slide2 /> },
  { id: 3, content: <Slide3 /> },
];

/**
 * Main Hero Slideshow Component
 */function HeroSlideshow() {
  // --- Hooks (Unchanged) ---
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);
  
  return (
    // 1. CHANGED: max-w-7xl -> max-w-screen-xl (much wider)
    <div className="w-full max-w-screen-xl mx-auto">
      
      {/* 2. Slideshow container */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        
        {/* Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          
          {/* Container */}
          <div className="flex">
            {slides.map((slide) => (
              <div className="relative basis-full flex-shrink-0" key={slide.id}>
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 3. Pagination dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            // I've also removed the comment from inside the class string, just in case.
            className={`
              h-3 transition-all duration-300
              ${selectedIndex === index ? 'w-12 bg-blue-900 rounded-full' : 'w-3 bg-gray-400/70 rounded-full hover:bg-gray-200'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div> // End of new parent div
  );
}

export default HeroSlideshow;