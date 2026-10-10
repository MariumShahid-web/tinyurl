import { useState, useEffect } from 'react';
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import slide5 from './images/slide5.png';
import slide6 from './images/slide6.png';


const SOLUTIONS_DATA = [
  {
    id: 0,
    title: "Unlimited Tracked Clicks",
    description: "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
    image: slide1
  },
  {
    id: 1,
    title: "Detailed Link Analytics",
    description: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
    image: slide2
  },
  {
    id: 2,
    title: "Branded Domains",
    description: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
    image: slide3
  },
  {
    id: 3,
    title: "Fully Custom Links",
    description: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
    image: slide4
  },
  {
    id: 4,
    title: "Bulk Short URLs",
    description: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
    image: slide5
  },
  {
    id: 5,
    title: "Link Management",
    description: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
    image: slide6
  }
];

export default function SolutionsTabSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % SOLUTIONS_DATA.length);
    }, 4000);
    return () => clearInterval(autoInterval);
  }, []);

  return (
    <div className="bg-white text-slate-900 py-16 px-6 w-full antialiased font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Component Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
            Your One-Stop Solution for Branding and Managing Links
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto font-normal">
            We offer a comprehensive suite of premium features to allow users to brand and manage links conveniently and confidently.
          </p>
          <div className="pt-2">
            <button className="bg-[#00A3C4] hover:bg-[#008CA8] text-white font-bold text-sm px-6 py-3 rounded shadow transition-all tracking-wide">
              View Plans
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between h-full">
            {SOLUTIONS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(item.id)}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                  activeIndex === item.id 
                    ? 'bg-[#EBF7FA] border-transparent shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-slate-50'
                }`}
              >
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 flex items-center justify-center min-h-[380px] lg:min-h-[460px] relative px-4">
            <div className="w-full h-full max-w-[420px] max-h-[420px] aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={SOLUTIONS_DATA[activeIndex].image}
                alt={SOLUTIONS_DATA[activeIndex].title}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between h-full">
            {SOLUTIONS_DATA.slice(3, 6).map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(item.id)}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                  activeIndex === item.id 
                    ? 'bg-[#EBF7FA] border-transparent shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-slate-50'
                }`}
              >
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
