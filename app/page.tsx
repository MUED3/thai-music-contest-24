'use client'
import { useEffect, useState } from 'react'

// รูปภาพสไลด์ (วางไฟล์ใน public/ci/gallery/)
const images = [
  '/ci/gallery/2024-1.jpg',
  '/ci/gallery/2024-2.jpg',
  '/ci/gallery/2024-3.jpg',
  '/ci/gallery/2024-4.jpg',
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // 4 วิ / รูป
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="section text-center space-y-6 fade-in">
        <img
          src="/ci/logo-full.png"
          alt="แบนเนอร์การประกวดดนตรีไทย"
          className="mx-auto max-h-40 object-contain bounce-in"
        />
        <h6 className="text-white/80 max-w-3xl mx-auto slide-up font-kku">
          <b>
            ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ
            สยามบรมราชกุมารี<br />
            และถ้วยประทานพระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลี กรมหมื่นสุทธนารีนาถ
          </b>
        </h6>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a href="/schedule" className="btn btn-primary scale-in">
            ดูตารางเวลา
          </a>
          <a href="/finalists" className="btn btn-secondary scale-in">
            รายชื่อผู้เข้ารอบ
          </a>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="section container">
        <h4 className="text-center font-sao text-ci-gold fade-in margin-bottom-2" style={{ marginBottom: '1rem' }}>
          ภาพบรรยากาศการประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๓
        </h4>
        <div className="relative overflow-hidden rounded-lg shadow-lg group h-[300px] md:h-[500px]">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`ภาพการประกวด ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100 fade-in-slow' : 'opacity-0'
                }`}
            />
          ))}
          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition ${i === index ? 'bg-ci-gold scale-125' : 'bg-white/50 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section container grid gap-6 md:grid-cols-3">
        <div className="card slide-up" onClick={() => window.location.href = '/finalists'}>
          <h3 className="text-ci-gold">🎼 การแข่งขัน</h3>
          <p className="text-white/80 text-sm">
            การประกวดเครื่องดนตรีไทยประเภทต่าง ๆ ครอบคลุมทุกระดับ
          </p>
        </div>
        <div className="card slide-up delay-200" onClick={() => window.location.href = '/schedule'}>
          <h3 className="text-ci-gold">📅 กำหนดการ</h3>
          <p className="text-white/80 text-sm">
            รวบรวมรายละเอียดวันเวลา และสถานที่จัดงานทั้งหมด
          </p>
        </div>
        <div className="card slide-up delay-400" onClick={() => window.location.href = '/live' }>
          <h3 className="text-ci-gold">🎥 ถ่ายทอดสด</h3>
          <p className="text-white/80 text-sm">
            รับชมการถ่ายทอดสดออนไลน์ตลอดการประกวด
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center space-y-4 fade-in">
        <h2 className="text-2xl font-bold font-sao text-ci-gold">
          ติดตามงานแบบ Real-time
        </h2>
        <p className="text-white/70 max-w-xl mx-auto">
          สามารถติดตามข้อมูลการประกวดสดใหม่ตลอดเวลา ทั้งผ่านเว็บไซต์และช่องทางโซเชียลมีเดีย
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/live" className="btn btn-primary">เข้าชมถ่ายทอดสด</a>
          <a href="/venue" className="btn btn-secondary">ดูแผนที่สถานที่จัดงาน</a>
        </div>
      </section>
    </div>
  )
}