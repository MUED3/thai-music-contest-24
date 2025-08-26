"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, faClock, faUser, faMusic, 
  faAward, faUtensils, faMapMarkerAlt 
} from "@fortawesome/free-solid-svg-icons";

export default function Schedule() {
  const schedules = [
    {
      date: "วันเสาร์ 6 กันยายน 2568",
      location: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
      events: [
        { 
          time: "07.30", 
          icon: faUser, 
          text: "ลงทะเบียนผู้เข้าประกวด",
          details: "ลงทะเบียน ณ โถง (Foyer) โรงละครคณะศิลปกรรมศาสตร์"
        },
        { time: "08.50", icon: faUser, text: "กล่าวต้อนรับผู้เข้าร่วมประกวดดนตรีไทย โดยคณบดีคณะศิลปกรรมศาสตร์" },
        { time: "09.00", icon: faMusic, text: "การประกวดเดี่ยวเครื่องดนตรีไทย (เช้า)" },
        { time: "12.00", icon: faUtensils, text: "พักรับประทานอาหารกลางวัน" },
        { time: "13.00", icon: faMusic, text: "การประกวดเดี่ยวเครื่องดนตรีไทย (บ่าย)" },
        { 
          time: "15.00", 
          icon: faMusic, 
          text: "การประกวดวงเครื่องสายเครื่องเดี่ยว (มัธยมศึกษา)",
          details: "ณ โรงละครคณะศิลปกรรมศาสตร์"
        },
        { time: "16.30", icon: faAward, text: "ประกาศผลและมอบรางวัล รายการเดี่ยวเครื่องดนตรีและขับร้อง", highlight: true }
      ]
    },
    {
      date: "วันอาทิตย์ 7 กันยายน 2568",
      location: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
      events: [
        { 
          time: "07.30", 
          icon: faUser, 
          text: "ลงทะเบียนผู้เข้าประกวด",
          details: "ลงทะเบียน ณ โถง (Foyer) โรงละครคณะศิลปกรรมศาสตร์"
        },
        { time: "08.00", icon: faMusic, text: "การบรรเลงเพลงถวายพระพรฯ" },
        { time: "09.00", icon: faMusic, text: "การประกวดวงเครื่องสายประสมปี่พาทย์ (ประถมศึกษา)" },
        { time: "12.00", icon: faUtensils, text: "พักรับประทานอาหารกลางวัน" },
        { time: "13.00", icon: faMusic, text: "วงเครื่องสายประสมปี่พาทย์ (มัธยมศึกษา)" },
        { time: "16.30", icon: faAward, text: "ประกาศผลการประกวด และพิธีมอบรางวัล", highlight: true }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 fade-in p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao flex items-center justify-center gap-3">
          กำหนดการประกวด
        </h1>
        <div className="max-w-2xl mx-auto space-y-2">
          <h4 className="text-white/90 text-lg">
            การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ 24
          </h4>
          <p className="text-white/70">
            ถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี<br />
            และถ้วยประทานพระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลี กรมหมื่นสุทธนารีนาถ
          </p>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="space-y-8">
        {schedules.map((schedule, index) => (
          <div key={index} className="card p-6 backdrop-blur-sm bg-black/20 border border-white/5">
            {/* Date Header */}
            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-ci-gold flex items-center gap-3">
                <FontAwesomeIcon icon={faCalendarAlt} />
                {schedule.date}
              </h3>
              <p className="mt-2 text-white/70 flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold/80" />
                {schedule.location}
              </p>
            </div>

            {/* Timeline Events */}
            <div className="space-y-4">
              {schedule.events.map((event, eventIndex) => (
                <div 
                  key={eventIndex}
                  className={`relative flex items-start gap-4 p-4 rounded-lg transition-all
                    ${event.highlight 
                      ? 'bg-ci-gold/20 hover:bg-ci-gold/30 border border-ci-gold/30' 
                      : 'hover:bg-white/5'}`}
                >
                  {/* Time Column */}
                  <div className="flex items-center gap-2 min-w-[100px] text-ci-gold">
                    <FontAwesomeIcon icon={faClock} className="w-4" />
                    <span className="font-medium">{event.time} น.</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow space-y-1">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon 
                        icon={event.icon} 
                        className={`w-4 ${event.highlight ? 'text-ci-gold' : 'text-white/60'}`}
                      />
                      <span className={`${event.highlight ? 'font-bold text-white' : 'text-white/90'}`}>
                        {event.text}
                      </span>
                    </div>
                    {event.details && (
                      <p className="text-sm text-white/60 ml-7">
                        {event.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="space-y-6 text-center">
        <p className="text-white/60 text-sm italic">
          หมายเหตุ: กำหนดการอาจมีการเปลี่ยนแปลงตามความเหมาะสม
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/venue" 
             className="btn btn-secondary flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            แผนที่สถานที่จัดงาน
          </a>
          <a href="/referee" 
             className="btn btn-secondary flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            รายนามคณะกรรมการ
          </a>
        </div>
      </div>
    </div>
  );
}