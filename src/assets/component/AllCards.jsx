import React from 'react';
import { useState } from 'react';
// TAMBAHKAN IMPOR INI
import { IoFlame, IoEye, IoHeart, IoHeartOutline, IoPricetagOutline } from 'react-icons/io5';

/**
 * --- Card 1: TrendingCard ---
 */
export function TrendingCard({ imageUrl, trendingRank, category, title, viewCount, saveCount }) {
  return (
    // 1. UBAH DI SINI:
    //    - 'overflow-hidden' dihapus (tidak lagi diperlukan)
    //    - 'p-3' ditambahkan untuk membuat jarak/padding di dalam kartu
    <article className="bg-white rounded-lg shadow-lg transition-all duration-300 p-5">
      
      {/* Bagian Gambar & Lencana */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          // 2. UBAH DI SINI: 'rounded-md' ditambahkan agar gambar memiliki sudut bulat
          className="w-full h-48 object-cover rounded-md" 
        />
        {/* Lencana Trending (Tidak berubah, tetapi posisinya akan sedikit menyesuaikan karena padding) */}
        <div className="absolute top-3 left-3 bg-yellow-400 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
          <IoFlame className="text-orange-600" />
          <span className="text-gray-900 font-bold text-sm">
            Trending #{trendingRank}
          </span>
        </div>
      </div>
      
      {/* Bagian Konten */}
      {/* 3. UBAH DI SINI: 'p-4' diubah menjadi 'pt-4' (hanya padding atas)
             karena padding samping (px) sudah ditangani oleh 'p-3' pada <article> */}
      <div className="pt-4">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-xl font-bold text-gray-900 mt-1 truncate" title={title}>
          {title}
        </h3>
        
        {/* Bagian Statistik (Tidak berubah) */}
        <div className="flex items-center gap-4 mt-3 text-gray-600">
          <div className="flex items-center gap-1.5 text-sm">
            <IoEye />
            <span>dilihat {viewCount}x minggu ini</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <IoHeart />
            <span>disimpan {saveCount}x</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * --- Card 2: RecommendationCard ---
 */
export function RecommendationCard({ imageUrl, category, title, price }) {
  // ... (Tidak ada perubahan di sini, sudah benar) ...
  return (
    <article className="w-full group">
      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p className="text-[#32AA97] text-sm font-medium">{category}</p>
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
 */
export function DealCard({ imageUrl, category, title, price }) {
  return (
    <article className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-yellow-400 px-3 py-1.5 rounded-tr-xl flex items-center gap-1">
          {/* Tambahkan ikon lencana harga */}
          <IoPricetagOutline className="text-gray-900" />
          <span className="text-gray-900 font-bold text-sm">
            Rp{price}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#32AA97] text-sm font-medium">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-1 truncate" title={title}>
          {title}
        </h3>
      </div>
    </article>
  );
}

/**
 * --- Card 4: CatalogCard ---
 */
export function CatalogCard({ imageUrl, category, title, price }) {
  // Gunakan useState untuk melacak status favorit
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <article className="w-full group">
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 bg-gray-900/40 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-gray-900/60 transition-colors"
          aria-label="Simpan ke favorit"
        >
          {/* Ganti antara ikon hati terisi dan outline */}
          {isFavorited ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
        </button>
      </div>
      
      <div className="pt-3">
        <p className="text-teal-600 text-sm font-medium">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mt-0.5 truncate" title={title}>
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Mulai dari <span className="font-bold text-gray-800">Rp{price}</span>
        </p>
      </div>
    </article>
  );
}