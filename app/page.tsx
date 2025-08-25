'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendarAlt, faPlay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// รูปภาพสไลด์ (วางไฟล์ใน public/ci/gallery/)
const images = [
  '/ci/gallery/2024-1.jpg',
  '/ci/gallery/2024-2.jpg',
  '/ci/gallery/2024-3.jpg',
  '/ci/gallery/2024-4.jpg',
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-09-06T07:30:00+07:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl shadow-2xl border border-white/10 hover:border-ci-gold/30 transition-all duration-500">
      <div className="flex justify-center items-center gap-6 md:gap-10">
        {[
          { value: timeLeft.days, label: "วัน" },
          { value: timeLeft.hours, label: "ชั่วโมง" },
          { value: timeLeft.minutes, label: "นาที" },
          { value: timeLeft.seconds, label: "วินาที" }
        ].map((item, index) => (
          <>
            <div className="text-center" key={index}>
              <div className="text-4xl md:text-5xl font-bold text-ci-gold bg-black/20 px-4 py-2 rounded-lg">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/70 mt-2 font-kku">
                {item.label}
              </div>
            </div>
            {index < 3 && <div className="text-2xl text-ci-gold font-bold">:</div>}
          </>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // 4 วิ / รูป
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="section text-center space-y-8">
        <div className="space-y-6 max-w-4xl mx-auto">
          <img
            src="/ci/logo-full.png"
            alt="แบนเนอร์การประกวดดนตรีไทย"
            className="mx-auto max-h-48 object-contain bounce-in"
          />
          <h6 className="text-white/90 text-lg md:text-xl slide-up font-kku leading-relaxed">
            <b>
              ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ
              สยามบรมราชกุมารี<br />
              และถ้วยประทานพระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลี กรมหมื่นสุทธนารีนาถ
            </b>
          </h6>
        </div>

        {/* Countdown Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-ci-gold font-sao flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faClock} className="text-xl" />
            นับถอยหลังสู่วันประกวด
          </h2>
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a href="/schedule"
            className="btn btn-primary scale-in flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
            ดูตารางเวลา
          </a>
          <a href="/finalists"
            className="btn btn-secondary scale-in flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPlay} />
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

      {/* Highlights Section - with improved styling */}
      <section className="section container grid gap-8 md:grid-cols-3">
        {[
          {
            icon: faPlay,
            title: "การแข่งขัน",
            description: "การประกวดเครื่องดนตรีไทยประเภทต่าง ๆ ครอบคลุมทุกระดับ",
            href: "/finalists"
          },
          {
            icon: faCalendarAlt,
            title: "กำหนดการ",
            description: "รวบรวมรายละเอียดวันเวลา และสถานที่จัดงานทั้งหมด",
            href: "/schedule"
          },
          {
            icon: faMapMarkerAlt,
            title: "สถานที่จัดงาน",
            description: "แผนที่และรายละเอียดสถานที่จัดการประกวด",
            href: "/venue"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="card p-6 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm bg-black/30 border border-white/10 hover:border-ci-gold/30"
            onClick={() => window.location.href = item.href}
          >
            <FontAwesomeIcon icon={item.icon} className="text-3xl text-ci-gold mb-4" />
            <h3 className="text-xl font-bold text-ci-gold mb-2">{item.title}</h3>
            <p className="text-white/80">{item.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section - with improved styling */}
      <section className="section text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-sao text-ci-gold">
          ติดตามงานแบบ Real-time
        </h2>
        <p className="text-white/80 text-lg">
          สามารถติดตามข้อมูลการประกวดสดใหม่ตลอดเวลา ทั้งผ่านเว็บไซต์และช่องทางโซเชียลมีเดีย
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a href="/live" className="btn btn-primary flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPlay} />
            เข้าชมถ่ายทอดสด
          </a>
          <a href="/venue" className="btn btn-secondary flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            ดูแผนที่สถานที่จัดงาน
          </a>
        </div>
      </section>
    </div>
  )
}