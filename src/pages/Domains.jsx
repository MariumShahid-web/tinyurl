// src/pages/Domains.jsx
import domainHeroImg from '../components/images/domainheroimg.png';
import DomainsGuide from '../components/DomainsGuide';
import InfoBanner from '../components/InfoBanner';
import AlternateFeatures from '../components/AlternateFeatures';
import DomainsFaq from '../components/DomainsFaq';
import CtaBanner from '../components/CtaBanner';
export default function Domains() {
  return (
    <>
      <div className="max-w-7xl w-full mx-auto px-6 py-12 md:py-20 antialiased font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-white block">
                Custom Domains:
              </span>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Your Links, Your Branding
              </h1>
            </div>

            <div className="space-y-4 text-slate-300 text-sm lg:text-base leading-relaxed font-light">
              <p>
                Branded domains are used exclusively to create short, appealing, and informative links that put your branding or core message front-and-center.
              </p>
              <p>
                TinyURL subscribers can purchase domains directly through our platform. Try it now!
              </p>
            </div>

            <div className="pt-2">
              <button className="bg-[#00A3C4] hover:bg-[#008CA8] text-white font-bold text-sm px-6 py-3 rounded shadow-md transition-colors select-none">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full">
            <div className="max-w-xl w-full h-auto flex items-center justify-center">
              <img 
                src={domainHeroImg} 
                alt="Custom Domain search demonstration on laptop device" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

        </div>

      </div>

      <DomainsGuide />
    <InfoBanner />
    <AlternateFeatures />
    <DomainsFaq />
    <CtaBanner />
    </>
  );
}
