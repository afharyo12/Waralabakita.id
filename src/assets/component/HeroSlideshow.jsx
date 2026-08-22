import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import slide1 from "../hero_slide_1.jpg";
import slide2 from "../hero_slide_2.png";
import slide3 from "../hero_slide_3.png";
import cta_banner from "../cta_banner.jpg";

// === SLIDE 1: "Waralaba Unggulan" ===
// (Ini adalah Slide1 Anda yang sebelumnya, saya ubah namanya agar lebih jelas)
function HeroSlide1() {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={slide1}
        alt="Waralaba Unggulan"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#32AA97]/70 via-[#FCD53F21]/60 to-[#023347B2]/80"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white py-8">
        <h1 className="text-3xl font-regular mb-4">
          Waralaba Unggulan Bulan Ini
        </h1>
        <p className="text-2xl font-light mb-8 max-w-3xl">
          Temukan pilihan waralaba dengan performa terbaik di bulan ini
        </p>
        <div className="absolute bottom-10 end-10 ">
          <button className="flex items-center h-11 space-x-3 px-8 py-2 border border-white/80 rounded-full text-lg font-medium bg-black/30 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            <span>Lihat Detail</span>
            <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// === SLIDE 2: "Kisah Sukses Mitra" ===
function HeroSlide2() {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={slide3} // Menggunakan slide3.png untuk gambar orang
        alt="Kisah Sukses Mitra"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradien yang lebih gelap untuk Slide 2 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl font-regular mb-4">Kisah Sukses Mitra</h1>
        <p className="text-2xl font-light mb-8 max-w-xl">
          "Kami tak hanya membangun bisnis, tapi membangun kepercayaan."
        </p>
        <button className="flex items-center space-x-3 px-6 py-2 border border-white/80 rounded-full text-lg font-medium bg-black/30 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <span>Baca Kisahnya</span>
          <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
}

// === SLIDE 3: "Tren Peluang Usaha" ===
function HeroSlide3() {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={slide2} // Menggunakan slide2.png untuk gambar grafik
        alt="Tren Peluang Usaha"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl font-bold mb-4">Tren Peluang Usaha</h1>
        <p className="text-2xl mb-8 max-w-3xl">
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

// --- Data Slide Hero ---
const slides = [
  { id: 1, content: <HeroSlide1 /> },
  { id: 2, content: <HeroSlide3 /> },
  { id: 3, content: <HeroSlide2 /> },
];

/**
 * --- Komponen HeroSlideshow (Utama) ---
 */
function HeroSlideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-4">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {slides.map((slide) => (
              <div className="relative basis-full flex-shrink-0" key={slide.id}>
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 my-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={`
              w-4 h-4 transition-all duration-300
              ${
                selectedIndex === index
                  ? "w-17 bg-[#242424] rounded-full"
                  : "w-3 bg-gray-400/70 rounded-full hover:bg-gray-200"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Kita tambahkan 'export' agar bisa diimpor di file lain
export function CtaBanner() {
  return (
    // Menggunakan margin bottom dari kode Anda (mb-14)
    <div className="w-full max-w-screen-xl mx-auto mb-14">
      {/* Menggunakan tinggi dari kode Anda (h-[400px]) dan menghapus div ekstra */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={cta_banner} // Variabel ini sekarang didefinisikan di atas
          alt="Panduan ROI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* === GRADIEN TELAH DIUBAH DI SINI === */}
        {/* Gradien dari kiri-ke-kanan, dari warna hex Anda dengan opasitas 80% ke transparan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023347]/80 to-transparent"></div>

        {/* Konten Teks & Tombol */}
        {/* Menggunakan tata letak flex-col untuk memposisikan tombol dengan benar */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-12 lg:p-16">
          
          {/* Bagian Teks (dibuat 'flex-grow' untuk mendorong tombol ke bawah) */}
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              Panduan Lengkap: Cara Menghitung ROI Waralaba Secara Akurat
            </h1>
            <p className="text-2xl mb-8 max-w-lg">
              “Bingung hitung balik modal waralaba kamu? Yuk, baca panduan ROI
              lengkapnya di sini!”
            </p>
          </div>

          {/* Bagian Tombol (dibuat 'flex justify-end' untuk memposisikan ke kanan) */}
          <div className="w-full flex justify-end">
            <button className="flex items-center space-x-3 px-6 py-2 border-2 border-white rounded-full text-lg font-medium transition-colors hover:bg-white hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              <span>Pelajari Sekarang</span>
              <span className="font-mono tracking-tighter">&gt;&gt;&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ekspor default tetap HeroSlideshow
export default HeroSlideshow;
