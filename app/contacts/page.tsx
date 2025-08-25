export default function Contact() {
    return (
        <div className="space-y-10 fade-in">
            {/* Header */}
            <h1 className="text-3xl font-bold text-ci-gold font-sao text-center">
                ติดต่อ
            </h1>
            <p className="text-white/80 text-center">
                หากต้องการข้อมูลเพิ่มเติม กรุณาติดต่อคณะกรรมการจัดการประกวด
            </p>

            {/* Team Members */}
            <div className="card p-5 space-y-3">
                <h2 className="text-2xl font-bold text-ci-gold">คณะทำงาน</h2><hr></hr>
                <div>
                    <h3 className="font-semibold font-sarabun">ผู้ช่วยศาสตราจารย์ ดร. วัศการก แก้วลอย</h3>
                    <p>peerka@kku.ac.th</p>
                </div>
                <div>
                    <h3 className="font-semibold font-sarabun">รองศาสตราจารย์ ธรณัส หิ่นอ่อน</h3>
                    <p>tharanat@kku.ac.th</p>
                </div>
                <div>
                    <h3 className="font-semibold font-sarabun">รองศาสตราจารย์ ดร. จตุพร สีม่วง</h3>
                    <p>jatuporn@kku.ac.th</p>
                </div>
                <div>
                    <h3 className="font-semibold font-sarabun">รองศาสตราจารย์ จรัญ กาญจนประดิษฐ์</h3>
                    <p>jarun@kku.ac.th</p>
                </div>
            </div>
        </div>
    );
}