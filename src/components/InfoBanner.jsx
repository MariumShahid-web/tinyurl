// src/components/InfoBanner.jsx
import infoBannerImg from './images/infobannerimg.png';

export default function InfoBanner() {
  return (
    <div className="bg-[#0D7693] text-white w-full overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          
          <div className="w-full h-full min-h-[350px] md:min-h-0 flex">
            <img 
              src={infoBannerImg} 
              alt="Link Shortening Platform Demo" 
              className="w-full h-full object-cover block"
            />
          </div>

          <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Link Shortening Done Quick and Easy
            </h2>

            <div className="space-y-4 text-cyan-50 text-sm lg:text-base leading-relaxed">
              <p>
                Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.
              </p>
              <p>
                Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.
              </p>
              <p>
                Wave goodbye to long, clunky links and give your audiences the experiences they deserve!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-white hover:bg-slate-100 text-[#0D7693] font-bold text-sm px-6 py-2.5 rounded shadow transition-colors">
                View Plans
              </button>
              <button className="bg-[#001D33] hover:bg-[#001120] text-white font-bold text-sm px-6 py-2.5 rounded shadow transition-colors border border-cyan-900/40">
                Contact Sales
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
