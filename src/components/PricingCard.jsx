// src/components/PricingCard.jsx
export default function PricingCard({ title, price, subtitle, description, sliderInfo, features, buttonText }) {
  return (
    <div className="bg-[#FFFFFF] border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm space-y-6 h-full font-sans">
      <div className="space-y-4">
        
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-black text-slate-900">{price}</span>
            {price !== 'Custom' && <span className="text-xs font-medium text-slate-500">/ mo *</span>}
          </div>
          <p className="text-[11px] text-slate-400 font-bold">{subtitle}</p>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed font-light min-h-[48px]">
          description
        </p>

        {sliderInfo && (
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px] font-bold text-slate-400">
              <span>{sliderInfo.min}</span> <span>{sliderInfo.max}</span>
            </div>
            <div className="h-1.5 bg-slate-100 border border-slate-200 rounded-full relative">
              <div className="absolute top-0 left-0 h-full bg-[#0D7693] w-1/4 rounded-full"></div>
              <div className="absolute -top-1 left-1/4 h-3.5 w-3.5 bg-white border-2 border-[#0D7693] rounded-full shadow"></div>
            </div>
          </div>
        )}

        <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pt-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start space-x-2">
              <span className="text-[#15803D] text-sm flex-shrink-0">✓</span>
              <div>
                <span className="block">{feature.text}</span>
                {feature.subtext && (
                  <span className="block text-[10px] text-slate-400 font-normal mt-0.5">
                    {feature.subtext}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button 
        type="button"
        className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs py-3 rounded-lg shadow-sm tracking-wide transition-colors mt-auto"
      >
        {buttonText}
      </button>
    </div>
  );
}
