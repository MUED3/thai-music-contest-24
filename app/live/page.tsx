export default function Live() {
  const lives = [
    { day: '6 ก.ย. 2568', title: 'ห้องที่ 1 (โรงละคร)', url: 'https://www.facebook.com/profile.php?id=100057643420110' },
    { day: '6 ก.ย. 2568', title: 'ห้องที่ 2 (PAS 1)', url: 'https://www.facebook.com/profile.php?id=100064752726252' },
    { day: '6 ก.ย. 2568', title: 'ห้องที่ 3 (PAS 2)', url: 'https://www.facebook.com/FAKKUofficial' },
    { day: '6 ก.ย. 2568', title: 'ห้องที่ 4 (FAG 1)', url: 'https://www.facebook.com/profile.php?id=100083038366633' },
    { day: '7 ก.ย. 2568', title: 'ห้องประกวดหลัก (โรงละคร)', url: 'https://www.facebook.com/profile.php?id=100057643420110' },
  ]
  return (
    <div className="text-center space-y-6 fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao flex items-center justify-center gap-3">
        การถ่ายทอดสด
      </h1>
      <p className="text-white/80">ติดตามชมการถ่ายทอดสดผ่าน Facebook Live ของคณะศิลปกรรมศาสตร์</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {lives.map((l, i) => (
          <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <div className="text-sm">{l.title}</div>
          </a>
        ))}
      </div>
    </div>
  )
}