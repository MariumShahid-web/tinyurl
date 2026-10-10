// src/components/Footer.jsx
import { Link } from 'react-router';

export default function Footer() {
  return (
    /* Outer full-width container utilizing a rich dark blue gradient background mesh */
    <footer className="w-full bg-gradient-to-r from-[#00344f] via-[#00273d] to-[#001D33] text-white py-12 px-6 border-t border-slate-800/40 antialiased font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-auto">
          
          <div className="space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white">Features</h4>
            <ul className="space-y-2 text-xs font-normal text-slate-300">
              <li><Link to="/features" className="hover:text-white transition-colors">Link Editor</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Link Management</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Branded Links</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Short URL Tracking</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">QR Code Generator</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Short URL API</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white">Resources</h4>
            <ul className="space-y-2 text-xs font-normal text-slate-300">
              <li><Link to="/resources" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">For Developers</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Our Proven Process</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white">Contact Us</h4>
            <ul className="space-y-2 text-xs font-normal text-slate-300">
              <li className="hover:text-white cursor-pointer transition-colors">Help Desk</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Sales</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
              <li className="hover:text-white cursor-pointer transition-colors">Report Abuse</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white">Legal</h4>
            <ul className="space-y-2 text-xs font-normal text-slate-300">
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Accessibility Statement</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Manager</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-start lg:items-end space-y-4 self-center lg:self-auto text-left lg:text-right">
          
          <div className="flex items-center space-x-5 text-sm font-bold text-slate-300 tracking-widest">
            <span className="hover:text-white cursor-pointer select-none transition-colors">f</span>
            <span className="hover:text-white cursor-pointer select-none transition-colors">📷</span>
            <span className="hover:text-white cursor-pointer select-none transition-colors">in</span>
            <span className="hover:text-white cursor-pointer select-none transition-colors">X</span>
          </div>

          <div className="text-2xl font-black tracking-wider text-white select-none pt-2">
            TINYURL
          </div>

          <div className="text-[10px] tracking-wide text-slate-400 font-light leading-normal">
            © 2026 TinyURL LLC <br className="hidden lg:block"/> All Rights Reserved
          </div>

        </div>

      </div>
    </footer>
  );
}
