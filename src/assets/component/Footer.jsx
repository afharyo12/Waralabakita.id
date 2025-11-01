
import "../../App.css";
import instagram from "../ig.png";
import whatsapp from "../wa.png";

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

export default Footer;