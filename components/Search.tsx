'use client'
import { useMemo, useState } from 'react'

export type Contestant = {
  id: string
  name: string
  school: string
  level: 'ประถมศึกษา' | 'มัธยมศึกษา'
  category: string // เดี่ยว/วง + เครื่องดนตรี/ประเภท
  piece?: string
  room?: string
}

export default function Search({ data }: { data: Contestant[] }) {
  const [q, setQ] = useState('')
  const [level, setLevel] = useState<string>('ทั้งหมด')
  const [category, setCategory] = useState<string>('ทั้งหมด')

  const categories = useMemo(() => Array.from(new Set(data.map(d => d.category))), [data])
  const levels = ['ทั้งหมด', 'ประถมศึกษา', 'มัธยมศึกษา']

  const filtered = useMemo(() => {
    return data
      .filter(d => d.id !== 'PRI-KHLUI-01') // ❌ ไม่เอา PRI-KHLUI-01
      .filter(d => {
        const matchQ = [d.name, d.school, d.category, d.piece].join(' ').toLowerCase().includes(q.toLowerCase())
        const matchLevel = level === 'ทั้งหมด' || d.level === level
        const matchCat = category === 'ทั้งหมด' || d.category === category
        return matchQ && matchLevel && matchCat
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'th'))
  }, [q, level, category, data])

  return (
    <div className="space-y-6 font-kku">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
        <input
          className="flex-1 px-4 py-3 rounded-lg bg-ci-purple text-white focus:outline-none focus:ring-2 focus:ring-ci-gold placeholder-white/50"
          placeholder="ค้นหาชื่อ โรงเรียน หรือรายการ..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />

        <select
          className="w-full sm:w-auto px-4 py-3 rounded-lg bg-ci-purple text-white focus:outline-none focus:ring-2 focus:ring-ci-gold"
          value={level}
          onChange={e => setLevel(e.target.value)}
        >
          {levels.map(l => (
            <option key={l} className="bg-ci-purple text-white">{l}</option>
          ))}
        </select>

        <select
          className="w-full sm:w-auto px-4 py-3 rounded-lg bg-ci-purple text-white focus:outline-none focus:ring-2 focus:ring-ci-gold"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {['ทั้งหมด', ...categories].map(c => (
            <option key={c} className="bg-ci-purple text-white">{c}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((d, idx) => (
          <div key={idx} className="card p-5 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-ci-gold">{d.name}</h3>
            <div className="text-white/80">{d.school}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="tag">{d.level}</span>
              <span className="tag">{d.category}</span>
              {d.piece && <span className="tag">เพลง: {d.piece}</span>}
              {d.room && <span className="tag">ห้อง: {d.room}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm text-white/70">รวม {filtered.length} ราย</div>
    </div>
  )
}