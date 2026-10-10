// src/components/StatsBanner.jsx
import statsTeamImg from './images/statsteamimg.png'; // Make sure to save the office image to your folder!

export default function StatsBanner() {
  return (
    <div className="w-full bg-[#001D33] overflow-hidden antialiased font-sans">
      
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-8 max-w-2xl mx-auto md:ml-auto md:mr-0 w-full">
          
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Transforming the Digital Landscape Since ‘02
            </h2>
            <p className="text-sm lg:text-base text-slate-300 font-light leading-relaxed">
              TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            
            <div className="grid grid-cols-12 gap-2 items-baseline">
              <span className="col-span-5 text-2xl font-black text-white tracking-tight">Billions</span>
              <span className="col-span-7 text-xs text-slate-300 font-normal">of redirects per month</span>
            </div>

            <div className="grid grid-cols-12 gap-2 items-baseline">
              <span className="col-span-5 text-2xl font-black text-white tracking-tight">24 years</span>
              <span className="col-span-7 text-xs text-slate-300 font-normal">of shortening URLs</span>
            </div>

            <div className="grid grid-cols-12 gap-2 items-baseline">
              <span className="col-span-5 text-2xl font-black text-white tracking-tight break-words">32,820,240,629</span>
              <span className="col-span-7 text-xs text-slate-300 font-normal">TinyURLs created</span>
            </div>

          </div>

        </div>

        <div className="w-full h-full min-h-[350px] md:min-h-0 flex">
          <img 
            src={statsTeamImg} 
            alt="Business team analyzing digital metrics chart" 
            className="w-full h-full object-cover block"
          />
        </div>

      </div>
    </div>
  );
}
