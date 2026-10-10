import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

export default function Navbar() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="bg-[#074B69] text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        <div className="flex items-center space-x-8">
          <NavLink to="/" className="text-2xl font-black tracking-wider text-white select-none">
            TINYURL
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            
            <NavLink 
              to="/plans" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b-2 border-white pb-1' : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Plans
            </NavLink>

            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button type="button" className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1 focus:outline-none">
                <span>Features</span>
                <span className="text-[10px] opacity-70"></span>
              </button>

              {activeDropdown === 'features' && (
                <div className="absolute left-0 mt-2 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-6 text-slate-900 z-50 animate-fade-in">
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">🖋️ Link Editor</h5>
                    <p className="text-xs text-slate-500 leading-normal">Keep all your links dynamic and extend value in the long run.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">🗂️ Link Management</h5>
                    <p className="text-xs text-slate-500 leading-normal">Organize as many links as you need with our powerful platform.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">🌐 Branded Links</h5>
                    <p className="text-xs text-slate-500 leading-normal">Turn heads and hold attention with fully custom short links.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">📊 Short URL Tracking</h5>
                    <p className="text-xs text-slate-500 leading-normal">Measure the success of your efforts and make smart decisions.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">📱 QR Code Generator</h5>
                    <p className="text-xs text-slate-500 leading-normal">Elevate user experiences with dynamic, scannable QR codes.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">🔌 Short URL API</h5>
                    <p className="text-xs text-slate-500 leading-normal">Build powerful apps and automation structures directly.</p>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/domains" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b-2 border-white pb-1' : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Domains
            </NavLink>

            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button type="button" className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1 focus:outline-none">
                <span>Resources</span>
                <span className="text-[10px] opacity-70"></span>
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute left-0 mt-2 w-[460px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 text-slate-900 z-50 animate-fade-in">
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">📝 Blog</h5>
                    <p className="text-xs text-slate-500 leading-normal">Read the latest tips and tricks from the top experts in link shortening.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">ℹ️ About Us</h5>
                    <p className="text-xs text-slate-500 leading-normal">Learn about TinyURL's journey as the first link shortener.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">💻 For Developers</h5>
                    <p className="text-xs text-slate-500 leading-normal">Power your apps and software with automated short links.</p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-[#074B69]">🏆 Our Proven Process</h5>
                    <p className="text-xs text-slate-500 leading-normal">Learn how our customers go from zero to hero quickly.</p>
                  </div>
                </div>
              )}
            </div>

          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/login')}
            className="text-sm font-semibold text-slate-200 hover:text-white px-3 py-2 transition-colors"
          >
            Log In
          </button>
          
          <button 
            onClick={() => navigate('/signup')}
            className="bg-[#00A3C4] hover:bg-[#008CA8] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md transition-all tracking-wide"
          >
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}
