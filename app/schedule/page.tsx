export default function Schedule() {
  return (
    <div className="space-y-6 fade-in">
      <h1 className="text-3xl font-bold text-ci-gold">กำหนดการ</h1>

      <div className="card p-5">
        <h3>วันเสาร์ 6 กันยายน 2568</h3>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-white/85">
          <li>07.30 น. ลงทะเบียนผู้เข้าประกวด</li>
          <li>08.50 น. กล่าวต้อนรับผู้เข้าร่วมประกวดดนตรีไทย โดยคณบดีคณะศิลปกรรมศาสตร์</li>
          <li>09.00 น. การประกวดเดี่ยวเครื่องดนตรีไทย</li>
          <li>12.00 น. พักรับประทานอาหารกลางวัน</li>
          <li>13.00 น. การประกวดเดี่ยวเครื่องดนตรีไทย</li>
          <li><b>16.30 น. ประกาศผลรางวัลเดี่ยว</b></li>
        </ul>
      </div>

      <div className="card p-5">
        <h3>วันอาทิตย์ 7 กันยายน 2568</h3>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-white/85">
          <li>07.30 น. ลงทะเบียนผู้เข้าประกวด</li>
          <li>09.00 น. การประกวดวงเครื่องสายประสมปี่พาทย์ (ประถมศึกษา)</li>
          <li>12.00 น. พักรับประทานอาหารกลางวัน</li>
          <li>13.00 น. วงเครื่องสายประสมปี่พาทย์ (มัธยมศึกษา)</li>
          <li><b>16.30 น. ประกาศผลการประกวด และพิธีมอบรางวัล</b></li>
        </ul>
      </div>
      <p className="text-white/80">
        หมายเหตุ: กำหนดการอาจมีการเปลี่ยนแปลงตามความเหมาะสม
      </p>
      <a href="/referee" className="btn btn-secondary scale-in">
        รายนามคณะกรรมการตัดสิน
      </a>
    </div>
  )
}
