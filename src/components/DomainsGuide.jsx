// src/components/DomainsGuide.jsx
import guideImg1 from './images/guideimg1.png'; 
import guideImg2 from './images/guideimg2.png';
import guideImg3 from './images/guideimg3.png';

export default function DomainsGuide() {
  return (
    <div className="bg-white text-slate-900 py-16 px-6 w-full mt-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
            How You Can Use Branded Domains on TinyURL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="flex flex-col items-center text-left md:items-start space-y-4">
            <h3 className="text-lg font-bold text-[#111827] tracking-tight">
              Register a Domain
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light min-h-[80px]">
              It's as easy as online shopping: browse for available domains and click to purchase. After a little bit of setup time (which we'll mostly handle for you), you're ready to go!
            </p>
            <div className="w-full flex items-center justify-center pt-4 h-44">
              <img src={guideImg1} alt="Register a Domain icon" className="max-h-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col items-center text-left md:items-start space-y-4">
            <h3 className="text-lg font-bold text-[#111827] tracking-tight">
              Bring Your Own Domain
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light min-h-[80px]">
              Already have the perfect, unused domain for link shortening? Bring it on over — we'll walk you through the small handful of steps to get started.
            </p>
            <div className="w-full flex items-center justify-center pt-4 h-44">
              <img src={guideImg2} alt="Bring your own domain icon" className="max-h-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col items-center text-left md:items-start space-y-4">
            <h3 className="text-lg font-bold text-[#111827] tracking-tight">
              Bring Your Own Subdomain
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light min-h-[80px]">
              You can also import your own subdomains (ex. ://example.com) to TinyURL for even more ways to keep your links descriptive and click-worthy.
            </p>
            <div className="w-full flex items-center justify-center pt-4 h-44">
              <img src={guideImg3} alt="Bring your own subdomain icon" className="max-h-full object-contain" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
