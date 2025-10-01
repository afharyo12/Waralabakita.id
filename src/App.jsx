import "./App.css";
import { useRef } from "react";
import { useState } from "react";
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
import instagram from "./assets/ig.png";
import whatsapp from "./assets/wa.png";
import food from "./assets/stash_burger.png";
import coffee from "./assets/coffee-cup.png";
import education from "./assets/toga.png";
import makeup from "./assets/make-up.png";
import shop from "./assets/shop.png";
import star from "./assets/star.png";
import people3 from "./assets/vector.png";
import shop2 from "./assets/vector-plus.png";
import target from "./assets/target.png";
// I've removed the unused 'logo' import to clean up the code.

function Header({ section1, section2, section3, section4, scrollToSection }) {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full h-20 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      {/* ... your nav content remains the same ... */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="title-company self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Waralabakita.id
          </span>
        </a>
        <div className="flex gap-x-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            className="group relative w-30 h-12 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors 
              hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)] 
              dark:hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)]
              focus:outline-none focus:ring-0 cursor-pointer"
          >
            <span
              className="absolute top-0 start-5 h-full flex items-center ps-5 font-semibold text-black 
                              opacity-100 -translate-x-4 group-hover:text-white
                              group-hover:opacity-100 group-hover:translate-x-4
                              transition-all duration-300 ease-in-out"
            >
              Daftar
            </span>
            <div
              className="absolute top-1 end-1 bg-cyan-950 border rounded-full h-10 w-10 transition-all duration-300 
                              ease-in-out group-hover:-translate-x-18 group-hover:bg-teal-500 flex items-center justify-center"
            >
              <svg
                className="w-4.5 h-4.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                          md:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          Masuk
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="cursor-pointer flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={() => scrollToSection(section1)}
                className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section2)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section3)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Benefit
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section4)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Katalog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-cyan-950 text-white">
      <div className="w-full">
        {/* Removed max-w-7xl, mx-auto, and changed p-10 to py-10 */}
        <div className="flex flex-col md:flex-row gap-10 justify-between text-left px-30 py-20">
          {/* Link columns */}
          <div className="flex w-full justify-center gap-20">
            <div>
              <h2 className="mb-6 text-xl font-bold text-teal-500">Perusahaan</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Tentang Waralabakita.id
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Sejarah
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold text-teal-500">Produk</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Eksplore Bisnis
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Kategori
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact column */}
          <div className="border-t-2 w-200 md:border-t-0 md:border-l-2 border-white pt-6 md:pt-0 md:pl-10">
            <span className="title-company text-2xl font-reguler italic mb-3 bloc text-teal-500">
              Waralabakita.id
            </span>
            <p className="italic mt-1 mb-4">
              “Ekosistem Waralaba Terpercaya di Indonesia”
            </p>
            <p className="font-reguler mb-3 text-teal-500">Kontak Kami</p>
            <div className="flex gap-x-2 text-sm">
              <div className="flex gap-x-1 items-center">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                @WaralabaKita.id
              </div>
              <div className="flex gap-x-1 items-center">
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                0890-0000-0000
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - removed px-4 */}
        <div className="flex items-center justify-center py-6 bg-[#002737]">
          <span className="text-xs text-gray-300 sm:text-center">
            © 2025 WaralabaKita.id. PT Inovasi Digital Nusantara. All Rights
            Reserved..
          </span>
        </div>
      </div>
    </footer>
  );
}

const CalonInvestorBenefit = () => (
  <div className="flex flex-col gap-y-10 animate-slide-up">
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={stonk} alt="Stonk icon" className="w-5 h-4" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3">
        <div className="font-bold">Analisis Mendalam</div>
        <p>
          Bandingkan metrik investasi kunci seperti modal, royalti, dan estimasi
          BEP dalam format terstruktur. Ambil keputusan berdasarkan data, bukan
          hanya janji pemasaran.
        </p>
      </div>
    </div>
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={people2} alt="Stonk icon" className="w-5 h-5" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3 rounded-lg">
        <div className="font-bold">Hanya Mitra Terverifikasi</div>
        <p>
          Kami melakukan proses verifikasi untuk setiap mitra yang terdaftar.
          Investasi Anda menjadi lebih aman dari risiko penipuan dan informasi
          yang tidak akurat.
        </p>
      </div>
    </div>
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={star} alt="Stonk icon" className="w-5 h-4" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3 rounded-lg">
        <div className="font-bold">Temukan Peluang dalam Hitungan Menit.</div>
        <p>
          Gunakan filter canggih kami untuk menyaring ratusan pilihan
          berdasarkan budget, kategori, dan lokasi Anda. Hemat waktu berharga
          Anda untuk fokus pada pilihan terbaik.
        </p>
      </div>
    </div>
  </div>
);

const PemilikWaralabaBenefit = () => (
  <div className="flex flex-col gap-y-10 animate-slide-up">
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={people3} alt="Stonk icon" className="w-5 h-4" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3">
        <div className="font-bold">Jangkau Calon Mitra yang Lebih Serius</div>
        <p>
          Platform kami menarik audiens yang berpikir analitis dan siap
          berinvestasi. Dapatkan prospek yang sudah teredukasi tentang model
          bisnis dan keuangan Anda
        </p>
      </div>
    </div>
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={shop2} alt="Stonk icon" className="w-5 h-5" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3 rounded-lg">
        <div className="font-bold">
          Tampilkan Bisnis Anda Secara Profesional
        </div>
        <p>
          Sajikan waralaba Anda dengan antarmuka sekelas platform finansial.
          Tingkatkan citra merek dan bangun kepercayaan calon mitra sejak
          pandangan pertama.
        </p>
      </div>
    </div>
    <div className="flex items-stretch gap-x-3 w-full">
      {/* Kolom untuk Lingkaran dan Garis */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 bg-teal-500 border-teal-500 flex-shrink-0">
          <img src={target} alt="Stonk icon" className="w-5 h-4" />
        </div>
        <div className="w-[1px] h-full bg-teal-500"></div>
      </div>
      <div className="text-xl text-left pl-3 rounded-lg">
        <div className="font-bold">Pemasaran Efisien & Terukur</div>
        <p>
          Lupakan biaya pameran yang mahal. Dapatkan visibilitas berkelanjutan
          dan pantau performa listing Anda melalui dasbor analitik yang mudah
          dipahami.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // 'useState' hook to keep track of which view is active. 'batik' is the default.
  const [activeView, setActiveView] = useState('calon_investor');

  // Helper function to generate button classes based on the active state.
  // This makes the UI clearly indicate which section is being viewed.
  const getButtonClasses = (viewName) => {
    const baseClasses = "flex flex-none items-center rounded-full gap-x-2 p-3 cursor-pointer";
    if (activeView === viewName) {
      return `${baseClasses} bg-teal-500 `;
    }
    return `${baseClasses} text-black border-2 border-black bg-white `;
  };

  return (
    // Mengganti fragment (<>) dan body dengan div sebagai pembungkus utama
    <div ref={section1}>
      <Header
        section1={section1}
        section2={section2}
        section3={section3}
        section4={section4}
        scrollToSection={scrollToSection}
      />

      {/* Main content with sections */}
      {/* Section 1 */}
      <div
        className="h-200 flex flex-col items-center bg-white px-30 gap-y-10"
      >
        {/* Mengganti 'w-60' dengan 'max-w-2xl' agar lebih mudah dibaca */}
        <div className="max-w-screen-xl flex text-left mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mb-7 text-4xl font-bold text-teal-500">
              Investasi Waralaba Lebih Cerdas, Transparan, dan Terpercaya
            </h1>
            <p className="text-xl leading-normal mb-10">
              WaralabaKita.id adalah platform analisis dan direktori waralaba
              pertama di Indonesia yang menyajikan data investasi secara
              mendalam untuk membantu Anda mengambil keputusan bisnis yang lebih
              baik
            </p>
            <div
              className="group relative w-64 h-12 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors 
              hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)] 
              dark:hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)]
              focus:outline-none focus:ring-0 cursor-pointer"
            >
              <span
                className="absolute top-0 start-5 h-full flex items-center ps-5 font-semibold text-black 
                              opacity-100 -translate-x-4 group-hover:text-white
                              group-hover:opacity-100 group-hover:translate-x-6
                              transition-all duration-300 ease-in-out"
              >
                Lihat Katalog Waralaba
              </span>
              <div
                className="absolute top-1 end-1 bg-cyan-950 border rounded-full h-10 w-10 transition-all duration-300 
                              ease-in-out group-hover:-translate-x-52 group-hover:bg-teal-500 flex items-center justify-center"
              >
                <svg
                  className="w-4.5 h-4.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
          <img src={cooperation} alt="" />
        </div>

        {/* The main container for the stats bar */}
        <div className="w-full max-w-8xl mx-auto bg-gradient-to-r from-cyan-950 to-teal-700 rounded-2xl  shadow-2xl shadow-teal-500/40 p-8  text-white">
          {/* Flex container for the three stats, with vertical dividers */}
          <div className="flex flex-col md:flex-row text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
            {/* Stat 1: 1000+ */}
            <div className="flex-1 py-4 md:py-0 px-4">
              <div className="text-4xl md:text-5xl font-bold">1000+</div>
              <div className="text-base md:text-lg mt-2 opacity-90">
                Waralaba Terverifikasi
              </div>
            </div>

            {/* Stat 2: 5000+ */}
            <div className="flex-1 py-4 md:py-0 px-4">
              <div className="text-4xl md:text-5xl font-bold">5000+</div>
              <div className="text-base md:text-lg mt-2 opacity-90">
                Calon Mitra Terdaftar
              </div>
            </div>

            {/* Stat 3: 98% */}
            <div className="flex-1 py-4 md:py-0 px-4">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-base md:text-lg mt-2 opacity-90">
                Tingkat Kepuasan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: UPDATED */}
      <div
        ref={section2}
        className="min-h-screen flex lg:flex-col text-white items-center justify-center bg-cyan-950 p-6"
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-x-8 items-center">
          {/* Image on the left */}
          <div className="flex items-center justify-center">
            <img
              src={network}
              alt="Network"
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>

          {/* Text content on the right, vertically centered */}
          <div className="text-left">
            <p className="text-xl font-reguler ">Tentang Kami</p>
            <h1 className="text-4xl font-bold my-2">
              Mendemokratisasi Peluang, Membangun Kepercayaan.
            </h1>
            <p className="text-xl leading-normal font-extralight mt-5 mb-10">
              Banyak calon wirausahawan ragu karena kurang transparansi data,
              sementara bisnis waralaba kesulitan menjangkau mitra yang tepat.
              WaralabaKita.id hadir menyediakan ekosistem tepercaya yang
              menghubungkan modal dan peluang usaha terverifikasi lewat data
              serta analisis yang mudah dipahami.
            </p>
            <div class="flex text-xl text-white flex-wrap gap-x-2 gap-y-4">
              <div class=" flex flex-none items-center border-2 border-white rounded-full gap-x-2 bg-neutral-900 p-3">
                <img src={shield} alt="Graph icon" className="w-6 h-6" />
                Data Terverifikasi
              </div>
              <div class=" flex flex-none items-center border-2 border-white rounded-full gap-x-2 bg-neutral-900 p-3">
                <img src={cluster} alt="CLuster icon" className="w-6 h-6" />
                Analisis Mendalam
              </div>
              <div class="flex flex-none items-center border-2 border-white rounded-full gap-x-2 bg-neutral-900 p-3">
                <img src={graph} alt="Graph icon" className="w-6 h-6" />
                Ekosistem Terpercaya
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={section3}
        className="min-h-screen flex items-center gap-x-3 justify-center bg-white p-3"
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex-auto text-left">
            <h1 className="mb-20 text-4xl font-bold">
              Sebuah Platform yang Memberdayakan Setiap Pihak.
            </h1>
            <h1 className="font-bold text-4xl mb-5 text-teal-500">untuk Anda, </h1>
            <div class="flex text-xl text-white flex-wrap gap-x-2">
              <div onClick={() => setActiveView('calon_investor')} class={getButtonClasses('calon_investor')}>
                <img src={activeView === 'calon_investor' ? check_light : check_dark} alt="Check icon" className="w-5 h-5" />
                Calon Investor
              </div>
              <div onClick={() => setActiveView('pemilik_waralaba')}  class={getButtonClasses('pemilik_waralaba')}>
                <img src={activeView === 'pemilik_waralaba' ? people_light : people_dark} alt="People icon" className="w-5 h-5" />
                Pemilik Waralaba
              </div>
            </div>
          </div>
          {activeView === 'calon_investor' ? <CalonInvestorBenefit /> : <PemilikWaralabaBenefit />}
        </div>
      </div>

      <div
        ref={section4}
        className="min-h-screen  flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 pt-2"
      >
        <div className="max-w-xl mb-7">
          <h1 className="text-4xl font-bold text-center text-teal-500">
            Mulai Eksplorasi Ratusan Peluang Anda.
          </h1>
        </div>
        <div className="max-w-6xl mb-15">
          <p className="text-xl font-light">
            Temukan berbagai jenis waralaba yang sedang tren dan berkembang di
            seluruh Indonesia.
          </p>
        </div>
        <div className="max-w-6xl flex gap-8 items-center justify-center mb-10">
          <div className="flex-auto h-auto ">
            <div className="w-50 h-50 text-center flex items-center justify-center bg-gray-200 mb-3 rounded-2xl shadow-md">
              <img src={food} alt="Food" className="w-25 h-25 object-cover" />
            </div>
            <p className="text-xl font-bold mb-4">Makanan cepat saji</p>
            <p className="text-xl">67 bisnis</p>
          </div>
          <div className="flex-auto h-auto ">
            <div className="w-50 h-50 text-center flex items-center justify-center bg-gray-200 mb-3 rounded-2xl shadow-md">
              <img
                src={coffee}
                alt="Coffee"
                className="w-25 h-25 object-cover"
              />
            </div>
            <p className="text-xl font-bold mb-4">Kopi Kekinian</p>
            <p className="text-xl">67 bisnis</p>
          </div>
          <div className="flex-auto h-auto ">
            <div className="w-50 h-50 text-center flex items-center justify-center bg-gray-200 mb-3 rounded-2xl shadow-md">
              <img
                src={education}
                alt="Education"
                className="w-25 h-25 object-cover"
              />
            </div>
            <p className="text-xl font-bold mb-4">Jasa & Pendidikan</p>
            <p className="text-xl">67 bisnis</p>
          </div>
          <div className="flex-auto h-auto ">
            <div className="w-50 h-50 text-center flex items-center justify-center bg-gray-200 mb-3 rounded-2xl shadow-md">
              <img
                src={makeup}
                alt="Make Up"
                className="w-25 h-25 object-cover"
              />
            </div>
            <p className="text-xl font-bold mb-4">Kecantikan</p>
            <p className="text-xl">67 bisnis</p>
          </div>
          <div className="flex-auto h-auto ">
            <div className="w-50 h-50 text-center flex items-center justify-center bg-gray-200 mb-3 rounded-2xl shadow-md">
              <img src={shop} alt="Shop" className="w-25 h-25 object-cover" />
            </div>
            <p className="text-xl font-bold mb-4">Ritel & Minimarket</p>
            <p className="text-xl">67 bisnis</p>
          </div>
        </div>
        <div
          className="group relative w-57 h-12 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors 
              hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)] 
              dark:hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)]
              focus:outline-none focus:ring-0 cursor-pointer"
        >
          <span
            className="absolute top-0 start-5 h-full flex items-center ps-5 font-semibold text-black 
                              opacity-100 -translate-x-4 group-hover:text-white
                              group-hover:opacity-100 group-hover:translate-x-6
                              transition-all duration-300 ease-in-out"
          >
            Lihat Selengkapnya
          </span>
          <div
            className="absolute top-1 end-1 bg-cyan-950 border rounded-full h-10 w-10 transition-all duration-300 
                              ease-in-out group-hover:-translate-x-45 group-hover:bg-teal-500 flex items-center justify-center"
          >
            <svg
              className="w-4.5 h-4.5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Add more sections as needed */}
      <Footer />
    </div>
  );
}

export default App;
