import { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: "What Is a URL Shortener?",
    answer: "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links."
  },
  {
    id: 2,
    question: "How Does a URL Shortener Work?",
    answer: "URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses."
  },
  {
    id: 3,
    question: "What Are the Benefits of Using a Short URL?",
    answer: "Brands, organizations, and individuals use link shorteners to make sharing links more convenient. They make it possible to fit links into emails, social media posts, print materials, billboards, or even make it so links can be read aloud on audio-dependent media like podcasts. With our paid plans, you can even shorten links using your own brand's domain, and then track detailed click analytics for sharper, faster decision-making!"
  },
  {
    id: 4,
    question: "What Is a Custom URL Shortener?",
    answer: "A custom URL shortener (also known as a branded URL shortener) is a link shortener that lets you use a personalized domain in place of a default like tinyurl.com. These fully custom or branded links are great for building trust with audiences, earning higher click-through rates, giving more information about a link's destination, and improving brand recall."
  },
  {
    id: 5,
    question: "How Do I Shorten a URL for Free?",
    answer: "You can shorten a URL for free using TinyURL's link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the 'Shorten URL' button. If you're feeling creative, you can try and attach a unique back half (ex. ://tinyurl.com) by using the 'Alias' field."
  },
  {
    id: 6,
    question: "How Do I Know Your Service Is Reliable and Scalable?",
    answer: "TinyURL is a cutting-edge link-shortening platform that caters to a broad user base looking for a robust method to shorten and brand links. Our platform is trusted by big brands around the world for creating links that are safe, reliable, and never expire. We've created billions of short, branded links so far!"
  },
  {
    id: 7,
    question: "Can I Use a Domain I Already Own?",
    answer: "Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (://example.com) provided they don't have web content built on top of them."
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 py-20 px-6 w-full antialiased font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 md:sticky md:top-28">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight max-w-xs">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="md:col-span-8 border-t border-slate-200">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div 
                key={item.id} 
                className="border-b border-slate-200 bg-transparent transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-5 flex items-center justify-between text-left group select-none"
                >
                  <span className="text-sm lg:text-base font-bold text-[#111827] group-hover:text-indigo-600 transition-colors duration-150">
                    {item.question}
                  </span>
                  
                  <span className="text-slate-500 font-mono text-sm ml-4 transform transition-transform duration-200">
                    {isOpen ? (
                      <span className="block transform rotate-0">▲</span>
                    ) : (
                      <span className="block transform rotate-0">▼</span>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6 animate-fade-in">
                    <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
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
