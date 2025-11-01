import React from 'react';


/**
 * --- Card 1: TrendingCard ---
 * Digunakan di bagian "Paling Banyak Dilihat Minggu Ini"
 * (image_708a5c.png)
 */
export function TrendingCard({ imageUrl, trendingRank, category, title, viewCount, saveCount }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Bagian Gambar & Lencana */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Lencana Trending */}
        <div className="absolute top-3 left-3 bg-yellow-400 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">

          <span className="text-gray-900 font-bold text-sm">
            Trending #{trendingRank}
          </span>
        </div>
      </div>
      
      {/* Bagian Konten */}
      <div className="p-4">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-xl font-bold text-gray-900 mt-1 truncate" title={title}>
          {title}
        </h3>
        
        {/* Bagian Statistik */}
        <div className="flex items-center gap-4 mt-3 text-gray-600">
          <div className="flex items-center gap-1.5 text-sm">

            <span>dilihat {viewCount}x minggu ini</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">

            <span>disimpan {saveCount}x</span>
          </div>
        </div>
      </div>
    </article>
  );
}


/**
 * --- Card 2: RecommendationCard ---
 * Digunakan di bagian "Rekomendasi"
 * (image_708a97.png)
 */
export function RecommendationCard({ imageUrl, category, title, price }) {
  return (
    // 'group' untuk efek hover pada gambar
    <article className="w-full group">
      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-0.5 truncate" title={title}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Mulai dari <span className="font-semibold">Rp{price}</span>
        </p>
      </div>
    </article>
  );
}


/**
 * --- Card 3: DealCard ---
 * Digunakan di bagian "Peluang Terbatas"
 * (image_708316.png)
 * Ini adalah kartu yang sama dengan yang kita buat di 'OpportunityCard' sebelumnya
 */
export function DealCard({ imageUrl, category, title, price }) {
  return (
    // 'group' untuk efek hover pada gambar
    <article className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
      
      {/* Kontainer Gambar & Lencana Harga */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Lencana Harga */}
        <div className="absolute bottom-0 left-0 bg-yellow-400 px-3 py-1.5 rounded-tr-xl flex items-center gap-1">
  
          <span className="text-gray-900 font-bold text-sm">
            Rp{price}
          </span>
        </div>
      </div>
      
      {/* Konten Teks */}
      <div className="p-4">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-1 truncate" title={title}>
          {title}
        </h3>
      </div>
    </article>
  );
}

/**
 * --- Card 4: CatalogCard ---
 * Digunakan di bagian "Jelajahi Semua Peluang"
 * (image_b7789e.png)
 */
export function CatalogCard({ imageUrl, category, title, price }) {
  return (
    <article className="w-full group">
      {/* Kontainer Gambar */}
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Tombol Hati (Favorit) */}
        <button 
          className="absolute top-3 right-3 bg-gray-900/40 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-gray-900/60 transition-colors"
          aria-label="Simpan ke favorit"
        >
          {/* Ikon hati terisi seperti di gambar */}

        </button>
      </div>
      
      {/* Konten Teks */}
      <div className="pt-3">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-0.5 truncate" title={title}>
          {title}
        </h3>
        {/* Styling harga yang sedikit berbeda agar sesuai dengan gambar */}
        <p className="text-gray-500 text-sm mt-1">
          Mulai dari <span className="font-bold text-gray-800">Rp{price}</span>
        </p>
      </div>
    </article>
  );
}