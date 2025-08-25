export default function Referee() {
    const referees = [
        { name: "ครูพัฒนี พร้อมสมบัติ", affiliation: "ผู้เชี่ยวชาญ", position: "", image: "https://honor.bsru.ac.th/wp-content/uploads/2021/12/image-35.png" },
        { name: "ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", affiliation: "คณะศิลปกรรมศาสตร์ มข", image: "https://fahome.kku.ac.th/index/images/com_droppics/12/custom/604-1.jpg?1656048857877" },
        { name: "ผศ.ศุภกิจ จารุจรณ", affiliation: "ผู้เชี่ยวชาญ", image: "https://example.com/images/referee3.jpg" },
        { name: "ดร.ศิลปชัย เจริญ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มรภ.อุดร", position: "คณบดี", image: "https://huso.udru.ac.th/wp-content/uploads/2023/10/3.%E0%B8%94%E0%B8%A3.%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D-%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%93%E0%B8%9A%E0%B8%94%E0%B8%B5-819x1024.jpg" },
        { name: "ผศ.ดร.ณัฐชยา นัจจนาวากุล", affiliation: "วิทยาลัยดุริยางคศิลป์ มหิดล", position: "คณบดี", image: "https://www.music.mahidol.ac.th/wp-content/uploads/2021/12/nachaya.jpg" },
        { name: "ดร.พิษณุ บุญศรีอนันต์", affiliation: "วิทยาลัยดุริยางคศิลป์ มมส", position: "คณบดี", image: "https://scontent.fkkc4-2.fna.fbcdn.net/v/t39.30808-6/485359373_3924739301121220_7794762777726521514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=og5ruUMZe9IQ7kNvwGISwyt&_nc_oc=AdnJJvq5mKL7v7JQ1GISeLP-O1AhCnAXFkgOtYR5IQGrOwiyFMiIe77zD3m16rQ_PmgwV-g4Ag1OLNLavXhRoU9N&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&_nc_gid=UShw8jwUs9BxSqmKoxDxcA&oh=00_AfXp9IpBLdMAJK1SB6j6W6g61N70MCt8B76g8YmK0FyfJA&oe=68B29B8A" },
        { name: "รศ.ดร.จตุพร สีม่วง", affiliation: "คณะศิลปกรรมศาสตร์ มข", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c8753694f971.webp" },
        { name: "ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", affiliation: "มรภ.นครศรีธรรมราช", position: "อธิการบดี", image: "https://example.com/images/referee8.jpg" },
        { name: "รศ.จรัญ กาญจนประดิษฐ์", affiliation: "คณะศิลปกรรมศาสตร์ มข", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c875369dd496.webp" },
        { name: "ผศ.ดร.สันติ อุดมศรี", affiliation: "คณะดนตรีและการแสดง ม.บูรพา", position: "คณบดี", image: "https://example.com/images/referee10.jpg" },
        { name: "ผศ.ดร.สุวรรณี ชูเสน", affiliation: "คณะศิลปะนาฏดุริยางค์ สถาบันบัณฑิตพัฒนศิลป์", position: "คณบดี", image: "https://example.com/images/referee11.jpg" },
        { name: "ผศ.ดร.ปาณิสรา เผือกแห้ว", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยรามคำแหง", position: "คณบดี", image: "https://example.com/images/referee12.jpg" },
        { name: "รศ.ธรณัส หินอ่อน", affiliation: "คณะศิลปกรรมศาสตร์ มข", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c874de13eee8-1.webp" },
        { name: "ผศ.บุตรี สุขปาน", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "https://www.human.nu.ac.th/wp-content/uploads/2024/09/%E0%B8%AB%E0%B8%99%E0%B8%A0.%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5.png" },
        { name: "ผศ.ดร.วัศการก แก้วลอย", affiliation: "คณะศิลปกรรมศาสตร์ มข", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c87536c45566.webp" },
        { name: "อ.กฤษฏิ์ โพชนุกูล", affiliation: "วิทยาลัยนาฏศิลปพัทลุง", image: "https://example.com/images/referee17.jpg" },
        { name: "ดร.ธนรัฐ อยู่สุขเจริญ", affiliation: "วิทยาลัยนาฏศิลปสุโขทัย", image: "https://example.com/images/referee18.jpg" },
        { name: "ผศ.ดร.วิชฏาลัมพ์ เหล่าวานิช", affiliation: "คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย", image: "https://static.wixstatic.com/media/a0425a_3b7a6b7206814bb89bce753139649038~mv2.jpg/v1/crop/x_0,y_92,w_3266,h_3217/fill/w_680,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/240620_H0717.jpg" },
        { name: "ผศ.ดร.คมกริช การินทร์", affiliation: "วิทยาลัยดุริยางคศิลป์ มมส", position: "ผู้ช่วยคณบดี", image: "https://music.msu.ac.th/wp/wp-content/uploads/2025/01/1.png" },
        { name: "อ.นิติพงษ์ ใคร่รู้", affiliation: "คณะครุศาสตร์ มรภ.บุรีรัมย์", image: "https://example.com/images/referee21.jpg" },
        { name: "ดร.ราชันย์ เจริญแก่นทราย", affiliation: "คณะครุศาสตร์และการพัฒนามนุษย์ มรภ.ร้อยเอ็ด", image: "https://example.com/images/referee22.jpg" },
        { name: "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา", affiliation: "ผู้เชี่ยวชาญ", image: "https://example.com/images/referee23.jpg" },
        { name: "อ.สุมาลี แป้นเงิน", affiliation: "วิทยาลัยเทคโนโลยีอรรถวิทย์พาณิชยการ", position: "ผู้อำนวยการ", image: "https://example.com/images/referee24.jpg" },
    ];

    const categories = [
        {
            level: "ระดับประถมศึกษา",
            instruments: [
                {
                    name: "ซอด้วง (11) - ซออู้ (13)",
                    judges: ["รศ.ธรณัส หินอ่อน", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.วิชฏาลัมพ์ เหล่าวานิช"],
                    song: "บังใบ สองชั้น",
                },
                {
                    name: "จะเข้ (15)",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "ลาวเจ้าซู สองชั้น",
                },
                {
                    name: "ขับร้อง (26)",
                    judges: ["ผศ.บุตรี สุขปาน", "ดร.ธนรัฐ อยู่สุขเจริญ", "อ.นิติพงษ์ ใคร่รู้"],
                    song: "ลาวเสี่ยงเทียน สองชั้น",
                },
                // เพิ่มเครื่องดนตรีอื่น ๆ
            ],
        },
        {
            level: "ระดับมัธยมศึกษา",
            instruments: [
                {
                    name: "ซอสามสาย (9)",
                    judges: ["ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", "ผศ.ดร.สุวรรณี ชูเสน", "รศ.ธรณัส หินอ่อน"],
                    song: "ขับไม้บัณเฑาะว์",
                },
                {
                    name: "จะเข้ (18)",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "มุล่ง ชั้นเดียว",
                },
                {
                    name: "ขลุ่ย (10)",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "สาริกาชมเดือน สามชั้น",
                },
                // เพิ่มเครื่องดนตรีอื่น ๆ
            ],
        },
    ];

    return (
        <div className="space-y-10 fade-in">
            <h1 className="text-3xl font-bold text-ci-gold font-sao text-center">
                รายชื่อคณะกรรมการตัดสินการประกวดดนตรีไทย ครั้งที่ ๒๔
            </h1>

            {/* รายชื่อคณะกรรมการ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {referees.map((referee, index) => (
                    <div key={index} className="card p-5 space-y-3">
                        <img
                            src={referee.image}
                            alt={referee.name}
                            className="w-32 h-32 object-cover rounded-full mx-auto"
                        />
                        <h3 className="font-semibold text-center">{referee.name}</h3>
                        {referee.position && <p className="text-center text-ci-gold">{referee.position}</p>}
                        <p className="text-center text-white/80">{referee.affiliation}</p>
                    </div>
                ))}
            </div>

            {/* รายละเอียดการตัดสิน */}
            {categories.map((category, index) => (
                <div key={index} className="space-y-6">
                    <h2 className="text-2xl font-bold text-ci-gold">{category.level}</h2>
                    {category.instruments.map((instrument, idx) => (
                        <div key={idx} className="card p-5 space-y-3">
                            <h3 className="font-semibold">{instrument.name}</h3>
                            <p className="text-white/80">เพลงที่ใช้ประกวด <b>{instrument.song}</b></p>
                            <p className="text-white/80">กรรมการตัดสิน:</p>
                            <ul className="list-disc ml-5 text-white/80">
                                {instrument.judges.map((judge, jIndex) => (
                                    <li key={jIndex}>{judge}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}