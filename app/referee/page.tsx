export default function Referee() {
    const referees = [
        { name: "ครูพัฒนี พร้อมสมบัติ", affiliation: "ผู้เชี่ยวชาญ", position: "", image: "/ci/pathanee.png" },
        { name: "ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "/ci/chalermsak.jpg" },
        { name: "ผศ.ศุภกิจ จารุจรณ", affiliation: "ผู้เชี่ยวชาญ", image: "https://example.com/images/referee3.jpg" },
        { name: "ดร.ศิลปชัย เจริญ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏอุดรธานี", position: "รองคณบดี", image: "https://huso.udru.ac.th/wp-content/uploads/2023/10/3.%E0%B8%94%E0%B8%A3.%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D-%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%93%E0%B8%9A%E0%B8%94%E0%B8%B5-819x1024.jpg" },
        { name: "ผศ.ดร.ณัฐชยา นัจจนาวากุล", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหิดล", position: "", image: "https://www.music.mahidol.ac.th/wp-content/uploads/2021/12/Natchaya-Natchanawakul.jpg" },
        { name: "ดร.พิษณุ บุญศรีอนันต์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "", image: "https://scontent.fkkc4-2.fna.fbcdn.net/v/t39.30808-6/485359373_3924739301121220_7794762777726521514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=og5ruUMZe9IQ7kNvwGISwyt&_nc_oc=AdnJJvq5mKL7v7JQ1GISeLP-O1AhCnAXFkgOtYR5IQGrOwiyFMiIe77zD3m16rQ_PmgwV-g4Ag1OLNLavXhRoU9N&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&_nc_gid=UShw8jwUs9BxSqmKoxDxcA&oh=00_AfXp9IpBLdMAJK1SB6j6W6g61N70MCt8B76g8YmK0FyfJA&oe=68B29B8A" },
        { name: "รศ.ดร.จตุพร สีม่วง", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c8753694f971.webp" },
        { name: "ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏนครศรีธรรมราช", position: "", image: "/ci/kritsipat.jpg" },
        { name: "รศ.จรัญ กาญจนประดิษฐ์", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c875369dd496.webp" },
        { name: "ผศ.ดร.สันติ อุดมศรี", affiliation: "คณะดนตรีและการแสดง มหาวิทยาลัยบูรพา", position: "", image: "https://static.wixstatic.com/media/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg/v1/fill/w_467,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg" },
        { name: "ผศ.ดร.สุวรรณี ชูเสน", affiliation: "คณะศิลปะนาฏดุริยางค์ สถาบันบัณฑิตพัฒนศิลป์", position: "", image: "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/95821044_639850723231749_4152888012616761344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yVwbQTlW-TIQ7kNvwGcMCSy&_nc_oc=Adnf1vKtDQjoGiLo0jDLC3H_sL6X7_pAXvB1ZdvU9glHUDTaOQ4rKh8vHgGWJJSeZfWm35tI_NrbBWZm4km5WC7B&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&_nc_gid=yOFJ8dqWnfwOX8-u1UXUyg&oh=00_AfW8WVcVe-KE-b-FlA42wW6u82pt5-OJCdYcfHO2rrrsKw&oe=68D4BB7E" },
        { name: "ผศ.ดร.ปาณิสรา เผือกแห้ว", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยรามคำแหง", position: "", image: "/ci/panisara.jpg" },
        { name: "รศ.ธรณัส หินอ่อน", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c874de13eee8-1.webp" },
        { name: "ผศ.บุตรี สุขปาน", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "https://mis.human.nu.ac.th/e-profiles/picup/large/2020_09_14_14_31_51.jpg" },
        { name: "ผศ.ดร.วัศการก แก้วลอย", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c87536c45566.webp" },
        { name: "อ.กฤษฏิ์ โพชนุกูล", affiliation: "วิทยาลัยนาฏศิลปพัทลุง", image: "https://scontent.fkkc4-2.fna.fbcdn.net/v/t39.30808-6/510746560_10234955335236743_551661555222605954_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bx3-grezYfgQ7kNvwF-6i6e&_nc_oc=AdlIOKg4_ibce0eiKVDF9QPMHJsW75hfq-vGPBfABq7q6UrT4uqpzCumllYUhd-lNCNpOeA9Aguou5FNFzAbyNpu&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&_nc_gid=E6kSMTIyTFWPS0HrKtUdoQ&oh=00_AfVkEoi0_Jw5XHM74eGyyhAiCT4MJ5WLzVe474ikRj6nYQ&oe=68B305F8" },
        { name: "ดร.ธนรัฐ อยู่สุขเจริญ", affiliation: "วิทยาลัยนาฏศิลปสุโขทัย", image: "https://scontent.fkkc4-2.fna.fbcdn.net/v/t39.30808-6/488188742_10213454002862602_3291192833707888818_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=s7o3AEyny_gQ7kNvwEVBOk0&_nc_oc=Adn5lTnKvtnAQ7PCDpPzO2Qj1WYzidmmR5r5IXyqpXfxvbmOzONFmimkHsfsAlLvEXuA9Tc_XBbL1ZdY4s4ttK66&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&_nc_gid=ygVMIDsJ9_UMZ61BcO2QMQ&oh=00_AfXJouZBYYEzsA2bywW60z9-80A-yleWF-94Ut7Uhx-hag&oe=68B31411" },
        { name: "ผศ.ดร.วิชฏาลัมพ์ เหล่าวานิช", affiliation: "คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย", image: "https://static.wixstatic.com/media/a0425a_3b7a6b7206814bb89bce753139649038~mv2.jpg/v1/crop/x_0,y_92,w_3266,h_3217/fill/w_680,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/240620_H0717.jpg" },
        { name: "ผศ.ดร.คมกริช การินทร์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "ผู้ช่วยคณบดี", image: "/ci/komgrich.jpg" },
        { name: "อ.นิติพงษ์ ใคร่รู้", affiliation: "คณะครุศาสตร์ มหาวิทยาลัยราชภัฏบุรีรัมย์", image: "/ci/nitipong.jpg" },
        { name: "ดร.ราชันย์ เจริญแก่นทราย", affiliation: "คณะครุศาสตร์และการพัฒนามนุษย์ มหาวิทยาลัยราชภัฏร้อยเอ็ด", image: "https://scontent.fkkc4-1.fna.fbcdn.net/v/t39.30808-6/505782009_2175686962903375_4833663082863925074_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4pV3IhV-6q0Q7kNvwEgyQnZ&_nc_oc=AdnQZZAiitbJu0LofTDIKrNMRpbDUvHv2E9VXl6Gu-mQIrRT9ShNksI8oZAE_zZG45q_d0lONoZoLITSrkLgij_4&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&_nc_gid=dP6v-1r80Nf9ATS_W0xGZQ&oh=00_AfU7SofXrDVTa-erVa1en5LlUOq4suHutdVLTlNbPtc82g&oe=68B325F9" },
        { name: "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา", affiliation: "ผู้เชี่ยวชาญ", image: "ci/chayuti.jpg" },
    ];

    const categories = [
        {
            level: "ระดับประถมศึกษา",
            instruments: [
                {
                    name: "ซอด้วง และซออู้",
                    judges: ["รศ.ธรณัส หินอ่อน", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.วิชฏาลัมพ์ เหล่าวานิช"],
                    song: "บังใบ สองชั้น",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "ลาวเจ้าซู สองชั้น",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ผศ.บุตรี สุขปาน", "ดร.ธนรัฐ อยู่สุขเจริญ", "อ.นิติพงษ์ ใคร่รู้"],
                    song: "ลาวเสี่ยงเทียน สองชั้น",
                },
                {
                    name: "ขิม",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.ดร.จตุพร สีม่วง", "ผศ.พรชัย ผลนิโครธ"],
                    song: "ลาวเจ้าซู สองชั้น",
                },
                {
                    name: "ขลุ่ยเพียงออ",
                    judges: ["รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ศุภกิจ จารุจรณ", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "ขึ้นพลับพลา สองชั้น",
                },
            ],
        },
        {
            level: "ระดับมัธยมศึกษา",
            instruments: [
                {
                    name: "ซอสามสาย",
                    judges: ["ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", "ผศ.ดร.สุวรรณี ชูเสน", "รศ.ธรณัส หินอ่อน"],
                    song: "ขับไม้บัณเฑาะว์",
                },
                {
                    name: "ซอด้วง และซออู้",
                    judges: ["ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.วิชฏาลัมพก์ เหล่าวานิช"],
                    song: "ขับไม้บัณเฑาะว์",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "มุล่ง ชั้นเดียว",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ครูพัฒนี พร้อมสมบัติ", "รศ.ดร.จตุพร สีม่วง", "ผศ.บุตรี สุขปาน"],
                    song: "สาริกาชมเดือน สามชั้น",
                },
                {
                    name: "ขลุ่ยเพียงออ",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "สาริกาชมเดือน สามชั้น",
                },
                {
                    name: "ระนาดเอก",
                    judges: ["ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", "ดร.พิษณุ บุญศรีอนันต์", "ผศ.พรชัย ผลนิโครธ"],
                    song: "จีนขิมใหญ่ สองชั้น",
                },
                {
                    name: "ระนาดทุ้ม",
                    judges: ["ผศ.ดร.สันติ อุดมศรี", "ผศ.ดร.วัศการก แก้วลอย", "ผศ.ดร.คมกริช การินทร์"],
                    song: "จีนขิมใหญ่ สองชั้น",
                },
                {
                    name: "ฆ้องวงใหญ่",
                    judges: ["ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", "ผศ.ดร.สันติ อุดมศรี", "ผศ.ดร.วัศการก แก้วลอย"],
                    song: "จีนขิมใหญ่ สองชั้น",
                },
                {
                    name: "ฆ้องวงเล็ก",
                    judges: ["ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", "ผศ.ดร.คมกริช การินทร์", "ดร.พิษณุ บุญศรีอนันต์"],
                    song: "จีนขิมใหญ่ สองชั้น",
                }
            ],
        },
    ];

    return (
        <div className="space-y-10 fade-in">
            <h1 className="text-3xl font-bold text-ci-gold font-sao text-center">
                คณะกรรมการตัดสินการประกวดดนตรีไทย ครั้งที่ ๒๔
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
                            <h3 className="font-semibold text-ci-gold">{instrument.name}</h3>
                            <hr className="border-t border-white/30" />
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