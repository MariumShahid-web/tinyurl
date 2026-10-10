// src/components/FeaturesGrid.jsx
import featureImg1 from './images/featureimg1.png';
import featureImg2 from './images/featureimg2.png';
import featureImg3 from './images/featureimg3.png';
import featureImg4 from './images/featureimg4.png';

export default function FeaturesGrid() {
  return (
    <div className="bg-white text-slate-900 py-16 px-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            TinyURL Plans Include:
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Detailed Link Analytics
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed min-h-[64px]">
              Stay on top of your links' performance and get insights into the clicks you earn and people you reach.
            </p>
            <div className="h-40 w-full flex items-center justify-center pt-2">
              <img src={featureImg1} alt="Analytics Graph" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Fully Branded Domains
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed min-h-[64px]">
              Customize every part of your links with branded domains — say goodbye to default link shortening!
            </p>
            <div className="h-40 w-full flex items-center justify-center pt-2">
              <img src={featureImg2} alt="Branded Domains" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Bulk Short URLs
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed min-h-[64px]">
              Scale your communications with our API, and create thousands of unique short links in the blink of an eye.
            </p>
            <div className="h-40 w-full flex items-center justify-center pt-2">
              <img src={featureImg3} alt="Bulk Links" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Link Management
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed min-h-[64px]">
              Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.
            </p>
            <div className="h-40 w-full flex items-center justify-center pt-2">
              <img src={featureImg4} alt="Link Management" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
