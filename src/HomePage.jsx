import "./App.css";
// 1. Impor 'useRef' dan 'forwardRef'
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
} from "react"; // <-- UBAH
import useEmblaCarousel from "embla-carousel-react";

// --- Impor Aset ---
// (Tidak ada perubahan)
import network from "./assets/network_pic.png";
import shield from "./assets/shield.png";
import graph from "./assets/graph.png";
import cluster from "./assets/cluster.png";
import people_dark from "./assets/people.png";
import people_light from "./assets/people-white.png";
import check_light from "./assets/check.png";
import check_dark from "./assets/check-dark.png";
import stonk from "./assets/stonk.png";
import people2 from "./assets/people-check.png";
import cooperation from "./assets/cooperation.png";
import food from "./assets/stash_burger.png";
import coffee from "./assets/coffee-cup.png";
import education from "./assets/toga.png";
import makeup from "./assets/make-up.png";
import shop from "./assets/shop.png";
import star from "./assets/star.png";
import people3 from "./assets/vector.png";
import shop2 from "./assets/vector-plus.png";
import target from "./assets/target.png";

import catalogue1 from "./assets/test_catalogue/catalogue_1.jpg";
import catalogue2 from "./assets/test_catalogue/catalogue_2.jpg";
import catalogue3 from "./assets/test_catalogue/catalogue_3.jpg";
import catalogue4 from "./assets/test_catalogue/catalogue_4.jpg";

// --- Impor Komponen ---
import Footer from "./assets/component/Footer.jsx";
import HomePageNavbar from "./assets/component/Navbar.jsx";
import HeroSlideshow, { CtaBanner } from "./assets/component/HeroSlideshow.jsx";
import CategoryListSection from "./assets/component/CategoryList.jsx";
import {
  TrendingCard,
  RecommendationCard,
  DealCard,
  CatalogCard,
} from "./assets/component/AllCards.jsx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// --- Data Mockup ---
// (Tidak ada perubahan)
const testData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Jasa Kebersihan",
    trendingRank: 2,
    title: "Washy Laundry",
    price: "70.000.000",
    viewCount: 120,
    saveCount: 45,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    category: "Makanan Cepat Saji",
    trendingRank: 3,
    title: "Hambulgel",
    price: "170.000.000",
    viewCount: 80,
    saveCount: 40,
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1628&q=80",
    category: "Makanan Cepat Saji",
    trendingRank: 1,
    title: "Pizza Hot",
    price: "170.000.000",
    viewCount: 70,
    saveCount: 40,
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Layanan Kreatif",
    trendingRank: 4,
    title: "Photos - Photobooth",
    price: "70.000.000",
    viewCount: 60,
    saveCount: 30,
  },
];

const catalogData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1517093912852-2f34b23d6a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Kecantikan",
    title: "Barberbox",
    price: "370.000.000",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1579693852102-f3fbc50732b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Makanan",
    title: "Chi Fry Crispy Snack",
    price: "30.000.000",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1594498801931-3221a8ba4c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Jasa Kebersihan",
    title: "HD CAR CARE",
    price: "1.250.000.000",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-c33e03102600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Minuman",
    title: "Lemon Fresh",
    price: "8.900.000",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1517093912852-2f34b23d6a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Kecantikan",
    title: "Barberbox",
    price: "370.000.000",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1579693852102-f3fbc50732b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Makanan",
    title: "Chi Fry Crispy Snack",
    price: "30.000.000",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1594498801931-3221a8ba4c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Jasa Kebersihan",
    title: "HD CAR CARE",
    price: "1.250.000.000",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-c33e03102600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Minuman",
    title: "Lemon Fresh",
    price: "8.900.000",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    category: "Makanan",
    title: "Burger Baru",
    price: "50.000.000",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Layanan Kreatif",
    title: "Foto Kilat",
    price: "65.000.000",
  },
];

// --- Komponen Bagian Halaman ---

const TrendingSection = () => {
  // ... (Tidak ada perubahan di sini)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#32AA97]">
          Paling Banyak Dilihat Minggu Ini
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Slide sebelumnya"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Slide berikutnya"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex">
          {testData.map((item) => (
            <div
              className="relative basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0 p-3"
              key={item.id}
            >
              <TrendingCard
                imageUrl={item.imageUrl}
                trendingRank={item.trendingRank}
                category={item.category}
                title={item.title}
                viewCount={item.viewCount}
                saveCount={item.saveCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DealsSection = () => (
  // ... (Tidak ada perubahan di sini)
  <div className="w-full max-w-7xl mx-auto px-4 mb-14">
    <div className="flex items-center text-[#32AA97] flex-col text-center">
      <h1 className="text-2xl font-regular mb-4">Peluang Terbatas</h1>
      <p className="text-xl font-light mb-8 max-w-3xl">
        Jangan Lewatkan Peluang Franchise Eksklusif minggu ini !
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <h3 className="text-xl font-bold text-gray-900">
              3 Slot Tersisa di Jakarta
            </h3>
          </div>
          <a
            href="#"
            className="flex items-center text-sm text-gray-500 hover:text-gray-900"
          >
            <span>Lihat Semua</span>
            <IoChevronForward className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testData.slice(0, 2).map((item) => (
            <DealCard
              key={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📜</span>
            <h3 className="text-xl font-bold text-gray-900">
              Berakhir dalam 15 hari
            </h3>
          </div>
          <a
            href="#"
            className="flex items-center text-sm text-gray-500 hover:text-gray-900"
          >
            <span>Lihat Semua</span>
            <IoChevronForward className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testData.slice(0, 2).map((item) => (
            <DealCard
              key={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const RecommendSection = () => (
  // Div ini masih mengatur lebar maksimum dan centering
  <div className="w-full max-w-7xl mx-auto px-4">
    
    {/* --- AWAL PERSEGI PANJANG LUAR YANG BARU --- */}
    {/* Div ini menambahkan latar belakang putih, sudut membulat, dan bayangan */}
    <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl">
    
      {/* Header Bagian (tidak berubah) */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-teal-600 text-3xl font-bold mb-1">Rekomendasi</p>
          <h2 className="text-2xl">
            <span className="font-light text-teal-600">Untuk Anda, </span><span className="font-bold">Budi Santosa</span> 
          </h2>
        </div>
        <a href="#" className="flex items-center text-lg text-gray-600 hover:text-gray-900 transition-colors">
          <span>Lihat Semua</span>
          <IoChevronForward className="ml-1" />
        </a>
      </div>
      
      {/* Grid untuk Kartu (tidak berubah) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {testData.map(item => (
          <RecommendationCard
            key={item.id}
            imageUrl={item.imageUrl}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>

    </div> 
    {/* --- AKHIR PERSEGI PANJANG LUAR YANG BARU --- */}

  </div>
);

// --- KOMPONEN PAGINATION (DIPERBARUI) ---
// Terima prop 'sectionRef' baru
const Pagination = ({ currentPage, totalPages, onPageChange, sectionRef }) => {
  // <-- UBAH

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);

    // --- INI ADALAH PERBAIKANNYA ---
    // Hapus window.scrollTo(0, 0);
    // window.scrollTo(0, 0); // <-- HAPUS BARIS INI

    // Tambahkan ini:
    if (sectionRef && sectionRef.current) {
      // Scroll dengan mulus ke atas 'CatalogueSection'
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // --- AKHIR PERBAIKAN ---
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      if (currentPage > 2) pages.push(currentPage - 1);
      if (currentPage !== 1 && currentPage !== totalPages)
        pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push(currentPage + 1);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return [...new Set(pages)];
  };

  const pages = getPageNumbers();

  return (
    <nav className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50"
        aria-label="Halaman sebelumnya"
      >
        <IoChevronBack />
      </button>

      {pages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={`flex items-center justify-center w-9 h-9 rounded-full font-medium ${
              currentPage === page
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            className="flex items-center justify-center w-9 h-9 text-gray-500"
          >
            ...
          </span>
        )
      )}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50"
        aria-label="Halaman berikutnya"
      >
        <IoChevronForward />
      </button>
    </nav>
  );
};

// --- KOMPONEN CATALOGUESECTION (DIPERBARUI) ---
const ITEMS_PER_PAGE = 8;

// 2. Bungkus komponen dengan forwardRef
const CatalogueSection = forwardRef((props, ref) => {
  // <-- UBAH
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(catalogData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = catalogData.slice(startIndex, endIndex);

  return (
    // 3. Lampirkan 'ref' ke elemen 'div' teratas dari bagian ini
    <div ref={ref} className="w-full max-w-7xl mx-auto px-4 py-12">
      {" "}
      {/* <-- UBAH */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-teal-600">
          Jelajahi Semua Peluang
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Mulai perjalanan bisnismu bersama kami hari ini
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {currentItems.map((item) => (
          <CatalogCard
            key={item.id}
            imageUrl={item.imageUrl}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      {/* 4. Teruskan 'sectionRef' ke Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        sectionRef={ref} // <-- UBAH
      />
    </div>
  );
}); // <-- UBAH

// --- Komponen Utama Halaman ---
function HomePage() {
  // 5. Buat ref di sini
  const catalogueRef = useRef(null); // <-- UBAH

  return (
    <div>
      <HomePageNavbar />
      <HeroSlideshow />
      <CategoryListSection />
      <DealsSection />
      <TrendingSection />
      <CtaBanner />
      <RecommendSection />
      <CatalogueSection ref={catalogueRef} /> 
      <Footer />
    </div>
  );
}

export default HomePage;
