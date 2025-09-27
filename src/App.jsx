import './App.css'
import logo from './assets/up-arrow.svg?react';

function App() {

  return (
    // Mengganti fragment (<>) dan body dengan div sebagai pembungkus utama
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full h-20 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        {/* Menambahkan h-full agar div ini mengisi tinggi nav, memungkinkan items-center bekerja */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="font-merriweather self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex gap-x-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Toggle diubah untuk menggunakan div anak, bukan pseudo-element, 
              agar bisa berisi SVG atau komponen lain.
              'group' ditambahkan ke parent agar bisa menggunakan 'group-hover' pada anak.
            */}
            <div className="group relative w-30 h-12 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors 
              hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)] 
              dark:hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)]
              focus:outline-none focus:ring-0">
              {/* Teks "Daftar" yang dianimasikan */}
              <span className="absolute top-0 start-5 h-full flex items-center ps-5 font-semibold text-black 
                              opacity-100 -translate-x-4 group-hover:text-white
                              group-hover:opacity-100 group-hover:translate-x-4
                              transition-all duration-300 ease-in-out">
                Daftar
              </span>
              {/* Lingkaran dalam dengan ikon panah */}
              <div className="absolute top-1 end-1 bg-cyan-950 border rounded-full h-10 w-10 transition-all duration-300 
                              ease-in-out group-hover:-translate-x-18 group-hover:bg-teal-500 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                </svg>
              </div>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button" 
              className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                          md:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                {/* Atribut SVG diubah ke camelCase */}
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            Masuk
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className=" block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang Kami</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Benefit</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Katalog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App