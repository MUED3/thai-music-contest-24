"use client";

import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGraduationCap, faChevronRight, faListCheck, faInfoCircle, faSchool, faMapPin } from "@fortawesome/free-solid-svg-icons";

// Data structure for contests
const allContests = [
  {
    level: 'มัธยมศึกษา',
    title: "วงเครื่องสายประสมปี่พาทย์",
    drawInfo: "จับสลากลำดับการแข่งขัน วันที่ 7 ก.ย. 68",
    count: 7,
    bands: [
        { name: "วงพวงชมพู", school: "โรงเรียนสตรีสิริเกศ", province: "จ.ศรีสะเกษ", drawOrder: "-"},
        { name: "วงดนตรีไทยโรงเรียนบุญวัฒนา", school: "โรงเรียนบุญวัฒนา", province: "จ.นครราชสีมา", drawOrder: "-"},
        { name: "วงเทวาดุริยสังคีต", school: "โรงเรียนคูเมืองวิทยาคม", province: "จ.บุรีรัมย์", drawOrder: "-"},
        { name: "วงมิตตานุกูล", school: "โรงเรียนลือคำหาญวารินชำราบ", province: "จ.อุบลราชธานี", drawOrder: "-"},
        { name: "วงดนตรีไทยโรงเรียนเบ็ญจะมะมหาราช", school: "โรงเรียนเบ็ญจะมะมหาราช", province: "จ.อุบลราชธานี", drawOrder: "-"},
        { name: "วงใบตอง", school: "โรงเรียนพิบูลมังสาหาร", province: "จ.อุบลราชธานี", drawOrder: "-"},
        { name: "วงสังฆกิจวาทิต", school: "โรงเรียนจระเข้หินสังฆกิจวิทยา", province: "จ.นครราชสีมา", drawOrder: "-"},
    ]
  },
  {
    level: 'มัธยมศึกษา',
    title: "วงเครื่องสายเครื่องเดี่ยว",
    drawInfo: "จับสลากลำดับก่อนการแข่งขัน วันที่ 6 ก.ย. 68",
    count: 5,
    bands: [
        { name: "วงชยุตราพิสุธทราวาทิต", school: "โรงเรียนแก่นนครวิทยาลัย", province: "จ.ขอนแก่น", drawOrder: "-" },
        { name: "วงสิริมหาชุมพล", school: "โรงเรียนศรีสะเกษวิทยาลัย", province: "จ.ศรีสะเกษ", drawOrder: "-" },
        { name: "วงซันนิวา", school: "โรงเรียนกาฬสินธุ์พิทยาสรรพ์", province: "จ.กาฬสินธุ์", drawOrder: "-" },
        { name: "วงวิทยาลัยนาฏศิลปร้อยเอ็ด", school: "วิทยาลัยนาฏศิลปร้อยเอ็ด", province: "จ.ร้อยเอ็ด", drawOrder: "-" },
        { name: "วงสุรสิริวาทิต", school: "โรงเรียนสุรนารีวิทยา", province: "จ.นครราชสีมา", drawOrder: "-" },
    ]
  },
  {
    level: 'ประถมศึกษา',
    title: "วงเครื่องสายประสมปี่พาทย์",
    drawInfo: "จับสลากลำดับการแข่งขัน วันที่ 7 ก.ย. 68",
    count: 9,
    bands: [
        { name: "วงนิลปัทม์ ภิรมย์", school: "โรงเรียนอนุบาลขอนแก่น", province: "จ.ขอนแก่น", drawOrder: "-" },
        { name: "วงรัตนาลีวาฑิต", school: "โรงเรียนอนุบาลรัตนบัณฑิต", province: "จ.หนองคาย", drawOrder: "-" },
        { name: "วงแก้วกระเบา", school: "โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น ฝ่ายประถมศึกษา (ศึกษาศาสตร์)", province: "จ.ขอนแก่น", drawOrder: "-" },
        { name: "วงบ้านกุดเรือ", school: "โรงเรียนบ้านกุดเรือ", province: "จ.อุบลราชธานี", drawOrder: "-" },
        { name: "วงโรงเรียนมูลนิธิวัดศรีอุบลรัตนาราม", school: "โรงเรียนมูลนิธิวัดศรีอุบลรัตนาราม", province: "จ.อุบลราชธานี", drawOrder: "-" },
        { name: "วงโรงเรียนชุมชนบ้านเพชร (วันครู 2500)", school: "โรงเรียนชุมชนบ้านเพชร (วันครู 2500)", province: "จ.ชัยภูมิ", drawOrder: "-" },
        { name: "วงโรงเรียนปักธงชัยชุณหะวัณวิทยาคาร", school: "โรงเรียนปักธงชัยชุณหะวัณวิทยาคาร", province: "จ.นครราชสีมา", drawOrder: "-" },
        { name: "วงอนุบาลหลานย่าโม", school: "โรงเรียนอนุบาลประชารัฐสามัคคี", province: "จ.นครราชสีมา", drawOrder: "-" },
        { name: "วงโคราวาทิต", school: "โรงเรียนอนุบาลครบุรี", province: "จ.นครราชสีมา", drawOrder: "-" },
    ]
  }
];

export default function BandContestPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedContestTitle, setSelectedContestTitle] = useState<string | null>(null);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(prev => (prev === level ? null : level));
    setSelectedContestTitle(null);
  };

  const availableContests = useMemo(() => {
    if (!selectedLevel) return [];
    return allContests.filter(c => c.level === selectedLevel);
  }, [selectedLevel]);

  const selectedContest = useMemo(() => {
    if (!selectedContestTitle) return null;
    return allContests.find(c => c.level === selectedLevel && c.title === selectedContestTitle);
  }, [selectedLevel, selectedContestTitle]);

  const sortedBands = useMemo(() => {
    if (!selectedContest) return [];
    
    const bandsCopy = [...selectedContest.bands];
    const hasNumericOrder = typeof bandsCopy[0]?.drawOrder === 'number';

    if (hasNumericOrder) {
      // Sort by drawOrder if it's a number
      return bandsCopy.sort((a, b) => (a.drawOrder as number) - (b.drawOrder as number));
    }
    
    // Otherwise, return in original order
    return bandsCopy;
  }, [selectedContest]);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 font-kku">
      <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao text-center mb-8">
        การประกวดวงดนตรีไทย
      </h1>

      {/* Step 1: Level Selection */}
      <div className="space-y-4 slide-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-xl font-bold text-ci-gold flex items-center gap-2">
          <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
          เลือกระดับชั้น
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {['ประถมศึกษา', 'มัธยมศึกษา'].map(level => (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group
                ${selectedLevel === level 
                  ? 'bg-ci-gold/20 border-ci-gold scale-105 shadow-lg shadow-ci-gold/20' 
                  : 'bg-black/20 border-transparent hover:border-ci-gold/50'}`}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl text-ci-gold group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold text-white">{level}</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={`transition-transform duration-300 ${selectedLevel === level ? 'rotate-90 text-ci-gold' : 'text-white/30'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Contest Selection */}
      {selectedLevel && (
        <div className="card p-6 backdrop-blur-sm bg-black/20 slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-xl font-bold text-ci-gold mb-4 flex items-center gap-2">
            <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            เลือกประเภทการประกวด
          </h2>
          {availableContests.length > 0 ? (
            <div className="space-y-3">
              {availableContests.map((contest, idx) => (
                <button
                  key={contest.title}
                  onClick={() => setSelectedContestTitle(contest.title)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-3 scale-in
                    ${selectedContestTitle === contest.title 
                      ? 'bg-ci-gold/20 border-ci-gold' 
                      : 'bg-black/20 border-white/10 hover:bg-white/5'}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <FontAwesomeIcon icon={faUsers} className="text-ci-gold/70" />
                  <span className="text-white/90">{contest.title}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/60 py-4 scale-in">ไม่พบรายการประกวดในระดับชั้นนี้</p>
          )}
        </div>
      )}

      {/* Step 3: Bands List */}
      {selectedContest && (
        <div className="space-y-6 slide-up" style={{ animationDelay: '200ms' }}>
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white">{selectedContest.title}</h3>
            <p className="text-white/80 mt-1">
              วงดนตรีไทยที่ผ่านเข้ารอบชิงชนะเลิศ จำนวน <span className="text-ci-gold font-bold">{selectedContest.count}</span> วง
            </p>
          </div>
          
          <div className="bg-ci-gold/10 border-l-4 border-ci-gold text-ci-gold/90 p-3 rounded-r-lg text-lg flex items-center gap-3">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>{selectedContest.drawInfo}</span>
          </div>

          {sortedBands.length > 0 ? (
            <div>
              {/* Mobile View: List of Cards (visible on screens smaller than md) */}
              <div className="grid gap-4 md:hidden">
                {sortedBands.map((band, idx) => (
                  <div
                    key={band.name}
                    className="card p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/5"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-ci-gold text-lg pr-4">{band.name}</h4>
                      <span className="text-sm font-mono text-white/60 whitespace-nowrap">
                        ลำดับที่ {band.drawOrder}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <p className="flex items-start gap-3 text-white/80">
                        <FontAwesomeIcon icon={faSchool} className="text-ci-gold/70 w-4 mt-1" />
                        <span>{band.school || '-'}</span>
                      </p>
                      <p className="flex items-center gap-3 text-white/80">
                        <FontAwesomeIcon icon={faMapPin} className="text-ci-gold/70 w-4" />
                        <span>{band.province}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: Table (visible on md screens and up) */}
              <div className="hidden md:block backdrop-blur-sm bg-black/20 rounded-xl border border-white/5 overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="p-4 font-semibold text-ci-gold w-28 text-center">ลำดับ</th>
                        <th className="p-4 font-semibold text-ci-gold">ชื่อวง</th>
                        <th className="p-4 font-semibold text-ci-gold">สถานศึกษา</th>
                        <th className="p-4 font-semibold text-ci-gold">จังหวัด</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedBands.map((band, idx) => (
                        <tr 
                          key={band.name} 
                          className="border-t border-white/10 hover:bg-white/10 transition-all duration-300 fade-in"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <td className="p-4 font-sarabun font-bold text-center text-white">{band.drawOrder}</td>
                          <td className="p-4 font-sarabun font-semibold text-white">{band.name}</td>
                          <td className="p-4 font-sarabun text-white/80">{band.school || '-'}</td>
                          <td className="p-4 font-sarabun text-white/70">{band.province}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-white/60 scale-in">
              <FontAwesomeIcon icon={faListCheck} className="text-4xl mb-4" />
              <p>ไม่พบข้อมูลวงดนตรีในรายการนี้</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}