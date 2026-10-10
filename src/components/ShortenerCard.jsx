import { useState } from 'react';

export default function ShortenerCard() {
  const [activeTab, setActiveTab] = useState('link'); // 'link' or 'qr'
  const [longUrl, setLongUrl] = useState('');
  const [domain, setDomain] = useState('tinyurl.com');
  const [alias, setAlias] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shortening link: ${domain}/${alias || 'random-slug'}`);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
      
      <div className="flex border-b border-slate-100 bg-slate-50">
        <button
          type="button"
          onClick={() => setActiveTab('link')}
          className={`flex-1 py-4 text-sm font-bold flex items-center justify-center space-x-2 transition ${
            activeTab === 'link' ? 'bg-white text-slate-900 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🔗 Shorten a Link</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('qr')}
          className={`flex-1 py-4 text-sm font-bold flex items-center justify-center space-x-2 transition ${
            activeTab === 'qr' ? 'bg-white text-slate-900 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>📱 Generate QR Code</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5 text-slate-800">
        
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            1. Long URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            required
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL here"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              2. Domain
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
            >
              <option value="tinyurl.com">tinyurl.com</option>
              <option value="mybrand.link">mybrand.link</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              3. Alias <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Add alias here"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">Must be at least 5 characters</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-bold py-3 rounded-lg transition duration-150 shadow"
        >
          Shorten Link
        </button>

        <p className="text-[11px] text-slate-500 text-center leading-normal pt-1">
          By clicking Shorten Link, you agree with our <span className="text-indigo-600 cursor-pointer hover:underline">Terms of Service</span>, <span className="text-indigo-600 cursor-pointer hover:underline">Privacy Policy</span>, and Use of Cookies.
        </p>

      </form>
    </div>
  );
}
