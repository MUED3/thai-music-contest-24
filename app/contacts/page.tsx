"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMapMarkerAlt, 
    faPhone, 
    faFax, 
    faEnvelope, 
    faUserTie 
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const teamMembers = [
        {
            name: "ผู้ช่วยศาสตราจารย์ ดร. วัศการก แก้วลอย",
            email: "peerka@kku.ac.th",
            role: "",
            tel: ""
        },
        {
            name: "รองศาสตราจารย์ ธรณัส หิ่นอ่อน",
            email: "tharanat@kku.ac.th",
            role: "",
            tel: ""
        },
        {
            name: "รองศาสตราจารย์ ดร. จตุพร สีม่วง",
            email: "jatuporn@kku.ac.th",
            role: "",
            tel: ""
        },
        {
            name: "รองศาสตราจารย์ จรัญ กาญจนประดิษฐ์",
            email: "jarun@kku.ac.th",
            role: "",
            tel: ""
        }
    ];
    
    return (
        <div className="max-w-6xl mx-auto space-y-12 fade-in p-6">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-ci-gold font-sao">
                    ติดต่อ
                </h1>
                <p className="text-white/80 max-w-2xl mx-auto">
                    หากต้องการข้อมูลเพิ่มเติม กรุณาติดต่อคณะกรรมการจัดการประกวด
                </p>
            </div>

            {/* Main Contact */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-6 space-y-4 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold/80" />
                        ที่อยู่
                    </h2>
                    <div className="space-y-3 ml-8">
                        <p className="text-white/90">คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                        <p className="text-white/80">123 ถ.มิตรภาพ ต.ในเมือง<br/>อ.เมือง จ.ขอนแก่น 40002</p>
                        <div className="space-y-2">
                            <p className="text-white/80 flex items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="w-5" />
                                043-202-396
                            </p>
                            <p className="text-white/80 flex items-center gap-3">
                                <FontAwesomeIcon icon={faFax} className="w-5" />
                                043-202-397
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card p-6 space-y-4 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
                        <FontAwesomeIcon icon={faUserTie} className="text-ci-gold/80" />
                        ช่องทางติดต่อออนไลน์
                    </h2>
                    <div className="flex flex-wrap gap-4 ml-8">
                        <a href="https://www.facebook.com/profile.php?id=100057643420110" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                            Facebook
                        </a>
                        <a href="https://fa.kku.ac.th" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105">
                            <FontAwesomeIcon icon={faLine} className="text-xl" />
                            Line Official
                        </a>
                    </div>
                </div>
            </div>

            {/* Team Members */}
            <div className="card p-6 space-y-6">
                <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
                    <FontAwesomeIcon icon={faUserTie} className="text-ci-gold/80" />
                    คณะทำงาน
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} 
                             className="p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="font-semibold text-ci-gold text-lg mb-2">
                                {member.name}
                            </h3>
                            <p className="text-white/70 text-sm font-medium mb-3">
                                {member.role}
                            </p>
                            <div className="space-y-2">
                                <a href={`mailto:${member.email}`} 
                                   className="text-white/80 text-sm flex items-center gap-2 hover:text-ci-gold transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                                    {member.email}
                                </a>
                                <p className="text-white/80 text-sm flex items-center gap-2">
                                    <FontAwesomeIcon icon={faPhone} className="w-4" />
                                    {member.tel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}