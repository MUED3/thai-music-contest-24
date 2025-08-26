"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBuilding, faExternalLinkAlt, faImage } from "@fortawesome/free-solid-svg-icons";

export default function Venue() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const venues = [
    {
      title: "แผนที่สถานที่",
      description: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
      type: "map",
      src: "https://www.google.com/maps?q=Faculty%20of%20Fine%20and%20Applied%20Arts%2C%20Khon%20Kaen%20University&output=embed",
      icon: faMapMarkerAlt
    },
    {
      title: "ผังห้องประกวด",
      description: "โรงละครฯ PAS1 PAS 2 และ FAG",
      type: "image",
      src: "/venue/room-plan.png",
      icon: faBuilding
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-in p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao">
          สถานที่จัดงาน
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          ข้อมูลสถานที่จัดการประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ 24
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {venues.map((venue, index) => (
          <div 
            key={index}
            className="card hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm bg-black/20"
          >
            <div className="flex items-start gap-4 p-6">
              <div className="text-ci-gold text-2xl">
                <FontAwesomeIcon icon={venue.icon} />
              </div>
              <div className="flex-grow space-y-2">
                <h2 className="font-semibold text-lg md:text-xl text-ci-gold">
                  {venue.title}
                </h2>
                <p className="text-sm md:text-base text-white/80">
                  {venue.description}
                </p>
                {venue.type === "image" ? (
                  <button 
                    onClick={() => setSelectedImage(venue.src)}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-ci-gold/20 hover:bg-ci-gold/40 rounded-full text-sm transition-all hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faImage} className="text-xs" />
                    ดูภาพ
                  </button>
                ) : (
                  <button 
                    onClick={() => window.open(venue.src.replace('&output=embed', ''), '_blank')}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-ci-gold/20 hover:bg-ci-gold/40 rounded-full text-sm transition-all hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    เปิดแผนที่
                  </button>
                )}
              </div>
            </div>
            {venue.type === "map" && (
              <div className="px-6 pb-6">
                <div className="relative w-full rounded-lg overflow-hidden bg-white/5">
                  <iframe
                    className="w-full h-[200px] md:h-[250px] rounded-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={venue.src}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Modal with responsive image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-black/80 flex items-center justify-center z-50 animate-fade-in p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl animate-scale-in">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all hover:scale-110 z-10"
            >
              ✕
            </button>
            <div className="relative rounded-xl overflow-hidden bg-black/40 p-2">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}