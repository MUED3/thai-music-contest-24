"use client";

import { useState } from "react";

export default function Venue() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const venues = [
    {
      title: "แผนที่สถานที่",
      description: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
      type: "map",
      src: "https://www.google.com/maps?q=Faculty%20of%20Fine%20and%20Applied%20Arts%2C%20Khon%20Kaen%20University&output=embed",
      icon: "🗺️"
    },
    {
      title: "ผังห้องประกวด",
      description: "โรงละครฯ PAS1 PAS 2 และ FAG",
      type: "image",
      src: "/venue/room-plan.png",
      icon: "🏛️"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in p-4">
      <h1 className="text-3xl font-bold text-ci-gold text-center">สถานที่จัดงาน</h1>

      <div className="flex flex-col gap-4">
        {venues.map((venue, index) => (
          <div 
            key={index}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4 p-4">
              <div className="text-4xl">{venue.icon}</div>
              <div className="flex-grow">
                <h2 className="font-semibold text-lg">{venue.title}</h2>
                <p className="text-sm text-white/80">{venue.description}</p>
              </div>
              {venue.type === "image" ? (
                <button 
                  onClick={() => setSelectedImage(venue.src)}
                  className="px-4 py-2 bg-ci-gold/20 hover:bg-ci-gold/40 rounded-full text-sm transition-colors"
                >
                  ดูภาพ
                </button>
              ) : (
                <button 
                  onClick={() => window.open(venue.src.replace('&output=embed', ''), '_blank')}
                  className="px-4 py-2 bg-ci-gold/20 hover:bg-ci-gold/40 rounded-full text-sm transition-colors"
                >
                  เปิดแผนที่
                </button>
              )}
            </div>
            {venue.type === "map" && (
              <div className="p-4 pt-0">
                <iframe
                  className="w-full h-[160px] rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={venue.src}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal with fade animation */}
      {/* Modal with fade animation and backdrop blur */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4 animate-scale-in">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}