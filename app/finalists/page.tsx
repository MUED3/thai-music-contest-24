import Search from '@/components/Search'
import data from '@/data/contestants.json'

export const metadata = {
  title: 'รายชื่อผู้เข้ารอบ - การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ',
}

export default function FinalistsPage() {
  return (
    <div className="space-y-10 fade-in">
      <h1 className="text-3xl font-bold text-ci-gold font-sao text-center">
        รายชื่อผู้เข้ารอบ
      </h1>
      <p className="text-center text-white/70 font-kku">
        สามารถค้นหาชื่อ โรงเรียน หรือเลือกกรองตามระดับและประเภท
      </p>
      <Search data={data as any} />
    </div>
  )
}