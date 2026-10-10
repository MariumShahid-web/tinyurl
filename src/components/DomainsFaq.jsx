import { useState } from 'react';

const DOMAINS_FAQ_DATA = [
  {
    id: 1,
    question: "How Do I Create a Branded Link?",
    answer: "Creating a branded link is simple! Once you have connected your custom domain to TinyURL, head over to your main dashboard. Input your long URL, select your branded domain from the dropdown option menu, and optionally add a custom alias path suffix."
  },
  {
    id: 2,
    question: "How Do I Shorten a URL With a Custom Name?",
    answer: "You can assign custom names by using the 'Alias' field when shortening a link. Instead of receiving a random string of characters, your link will feature your exact chosen wording (e.g., mybranded.link/awesome), making it highly memorable."
  },
  {
    id: 3,
    question: "How Does Having a Branded URL Benefit My Marketing Campaigns?",
    answer: "Branded URLs significantly improve trust and professionalism across social media, SMS campaigns, and print media. This elevation in brand visibility directly correlates to higher click-through rates and better customer engagement tracking."
  },
  {
    id: 4,
    question: "Can I Use My Existing Domain for Creating Branded Shortened Links?",
    answer: "Yes, you can! Our platform allows you to import and configure top-level domains or subdomains you already own. We walk you through configuring your DNS settings with your domain provider to connect it seamlessly in a few minutes."
  }
];

export default function DomainsFaq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 py-16 lg:py-24 px-6 w-full antialiased font-sans border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-4 md:sticky md:top-28">
          <h2 className="text-[28px] lg:text-3xl font-black text-[#111827] tracking-tight leading-[1.2] max-w-xs">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="md:col-span-8 border-t border-slate-200">
          {DOMAINS_FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div 
                key={item.id} 
                className="border-b border-slate-200 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-5 flex items-center justify-between text-left group select-none"
                >
                  <span className="text-[14px] lg:text-[15px] font-bold text-[#111827] group-hover:text-[#0D7693] transition-colors duration-150">
                    {item.question}
                  </span>
                  
                  <span className={`text-slate-500 font-bold text-xs ml-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6 animate-fade-in">
                    <p className="text-[13px] lg:text-[14px] text-[#4B5563] leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
