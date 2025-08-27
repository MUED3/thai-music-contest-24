import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-ci-plum font-kku">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-ci-gold font-bold text-lg">เกี่ยวกับเรา</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ<br />
              ภาควิชาดนตรีไทย สาขาดนตรีและการแสดง<br />
              คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-ci-gold font-bold text-lg">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <a href="/schedule" className="text-white/80 hover:text-ci-gold transition-colors text-sm">
                  กำหนดการ
                </a>
              </li>
              <li>
                <a href="/referee" className="text-white/80 hover:text-ci-gold transition-colors text-sm">
                  คณะกรรมการ
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-white/80 hover:text-ci-gold transition-colors text-sm">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-ci-gold font-bold text-lg">ติดต่อ</h3>
            <div className="space-y-2">
              <p className="text-white/80 flex items-center gap-2 text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold w-4" />
                123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002
              </p>
              <p className="text-white/80 flex items-center gap-2 text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-ci-gold w-4" />
                043-202396
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100057643420110" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white/80 hover:text-ci-gold transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © 2568 การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ | 
            Developed by Yanakon S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}