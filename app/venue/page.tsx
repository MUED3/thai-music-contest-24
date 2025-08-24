export default function Venue() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-ci-gold">สถานที่จัดงาน & แผนที่</h1>

      {/* Location + Map */}
      <div className="card p-5 space-y-3">
        <div className="font-semibold">คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</div>
        <iframe
          className="w-full h-[400px] rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={
            "https://www.google.com/maps?q=Faculty%20of%20Fine%20and%20Applied%20Arts%2C%20Khon%20Kaen%20University&output=embed"
          }
        ></iframe>
        <p className="text-sm text-white/80">
          หมายเหตุ: สามารถแนบภาพผังห้องและป้ายบอกทางเพิ่มเติมใน <code>/public/venue</code>
        </p>
      </div>

      {/* Hall Plan */}
      <div className="card p-5 space-y-3">
        <div className="font-semibold">ผังห้องประกวด (FAG)</div>
        <img
          src="/venue/fag-plan-1.jpg"
          alt="ผังห้องประกวด FAG"
          className="w-full rounded-xl shadow-md"
        />
        <p className="text-sm text-white/80 text-center">
          ผังห้องประกวด (FAG) สำหรับผู้เข้าร่วมงาน
        </p>
      </div>
    </div>
  )
}