// src/components/AlternateFeatures.jsx
import rowImg1 from './images/rowimg1.png'; 
import rowImg2 from './images/rowimg2.png'; 
import rowImg3 from './images/rowimg3.png'; 
import rowImg4 from './images/rowimg4.png'; 

const ROW_DATA = [
  {
    title: "Send Links Your Audiences Will Trust Enough To Click",
    description: "Sharing URLs shortened with your brand's domain name is an easy way to let users know they can trust what you're sharing. It's got your name on it, after all, and higher trust in your branded links translates to better click-through rates.",
    image: rowImg1
  },
  {
    title: "Serve Short Links With Big Personality",
    description: "Tired of sending links with the generic tinyurl.com domain? No problem. Send fully branded, short URLs from the convenience of your TinyURL dashboard. Not only is this convenient for you (and your audiences), but it builds trust and familiarity over time.",
    image: rowImg2
  },
  {
    title: "Quick and Easy Configuration: Brand Your Links in a Snap",
    description: "We like to keep things short and simple. Adding a domain can be as easy as hitting \"purchase,\" and no more complicated than changing up a few configurations with your domain provider. In any case, we'll walk you through the simple steps to get started.",
    image: rowImg3
  },
  {
    title: "Complete Branded Short URL Management",
    description: "If you have several branded domains connected, you'll have an easy time managing and using them with our platform. Spot configuration issues in a jiffy, and get convenient notifications when your next payment is due for domains registered through us.",
    image: rowImg4
  }
];

export default function AlternateFeatures() {
  return (
    <div className="bg-white text-slate-900 py-16 lg:py-24 px-6 w-full antialiased font-sans">
      <div className="max-w-7xl mx-auto space-y-24 lg:space-y-36">
        
        {ROW_DATA.map((row, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              
              <div 
                className={`w-full flex justify-center items-center ${
                  isImageLeft ? 'md:order-first' : 'md:order-last'
                }`}
              >
                <div className="w-full max-w-[480px] lg:max-w-[540px] aspect-video md:aspect-auto flex items-center justify-center">
                  <img 
                    src={row.image} 
                    alt={row.title} 
                    className="w-full h-auto object-contain max-h-[360px] lg:max-h-[420px] select-none block"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4 max-w-xl mx-auto md:mx-0">
                <h3 className="text-2xl lg:text-[28px] font-extrabold text-[#111827] tracking-tight leading-[1.2]">
                  {row.title}
                </h3>
                <p className="text-[14px] lg:text-[15px] text-[#4B5563] leading-[1.6] font-normal tracking-normal">
                  {row.description}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
