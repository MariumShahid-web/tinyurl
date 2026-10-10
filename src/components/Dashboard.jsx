// src/components/Dashboard.jsx
import { useState } from 'react';
import FeaturesGrid from './FeaturesGrid';
import InfoBanner from './InfoBanner';
import SolutionsTabSlider from './SolutionsTabSlider';
import StatsBanner from './StatsBanner';
import FaqAccordion from './FaqAccordion';
import CtaBanner from './CtaBanner';

export default function Dashboard() {
  const [longUrl, setLongUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [createdLinks, setCreatedLinks] = useState([]);

  const handleShortenSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;

    const newLink = {
      id: Date.now(),
      originalUrl: longUrl,
      shortenedUrl: `://tinyurl.com{alias || Math.random().toString(36).substring(2, 7)}`
    };

    setCreatedLinks([newLink, ...createdLinks]);
    setLongUrl('');
    setAlias('');
  };

  return (
    <>
      <div className="w-full bg-[#001D33] py-12 md:py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[44px] font-black tracking-tight text-white leading-[1.15]">
                URL Shortener, Branded Short Links & Analytics
              </h1>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-light">
                Welcome to the original link shortener—simplifying the Internet through the power of the URL since 2002. 
                You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
              </p>
              <div className="flex space-x-4 pt-2">
                <button className="bg-white hover:bg-slate-100 text-[#001D33] font-bold text-[14px] px-6 py-3 rounded transition-colors shadow-sm select-none">
                  View Plans
                </button>
                <button className="bg-[#0D7693] hover:bg-[#0b647d] text-white font-bold text-[14px] px-6 py-3 rounded transition-colors shadow-sm select-none">
                  Create Free Account
                </button>
              </div>
            </div>

            <div className="bg-[#FFFFFF] text-slate-900 rounded-2xl p-6 shadow-2xl space-y-5 max-w-lg w-full mx-auto lg:mr-0 border border-slate-100">
              
              <div className="flex border-b border-slate-200 pb-3 text-[13px] font-bold text-slate-700">
                <span className="border-b-2 border-indigo-600 pb-3 px-3 cursor-pointer text-slate-900">
                  🔗 Shorten a Link
                </span>
                <span className="text-slate-400 pb-3 px-4 cursor-pointer hover:text-slate-600 transition-colors">
                  📱 Generate QR Code
                </span>
              </div>

              <form onSubmit={handleShortenSubmit} className="space-y-4 pt-2">
                
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-slate-600">
                    1. Long URL <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="url"
                    required
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Paste long URL here"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-[13px] font-normal focus:outline-none focus:border-[#0D7693] text-slate-900 bg-white placeholder-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-slate-600">
                      2. Domain
                    </label>
                    <select className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-[13px] font-medium bg-white focus:outline-none">
                      <option>tinyurl.com</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-slate-600">
                      3. Alias <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input 
                      type="text"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="Add alias here"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-[13px] font-normal focus:outline-none focus:border-[#0D7693] text-slate-900 bg-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-[14px] py-3.5 rounded-lg transition-colors uppercase tracking-wider shadow-md"
                  >
                    Shorten Link
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal pt-1">
                  By clicking Shorten Link, you agree with our{' '}
                  <span className="underline cursor-pointer text-slate-500 hover:text-slate-700">Terms of Service</span> and{' '}
                  <span className="underline cursor-pointer text-slate-500 hover:text-slate-700">Privacy Policy</span>.
                </p>
              </form>

            </div>

          </div>

          <div className="space-y-4 pt-8 border-t border-slate-800/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Your Recent Links:
            </h3>

            {createdLinks.length === 0 ? (
              <div className="bg-[#FFFFFF] text-slate-700 rounded-lg p-4 border border-slate-200 text-xs font-bold flex items-center space-x-2 shadow-sm">
                <span className="text-sm">ℹ️</span>
                <span>No links yet in your history</span>
              </div>
            ) : (
              <div className="space-y-2">
                {createdLinks.map((link) => (
                  <div key={link.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 shadow-md">
                    <div>
                      <span className="text-cyan-400 font-bold text-sm block">{link.shortenedUrl}</span>
                      <span className="text-slate-400 block truncate max-w-md mt-0.5">{link.originalUrl}</span>
                    </div>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(link.shortenedUrl);
                        alert('Copied shortened link to clipboard!');
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 font-medium self-start sm:self-auto transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <FeaturesGrid />
      <InfoBanner />
      <SolutionsTabSlider />
      <StatsBanner />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
