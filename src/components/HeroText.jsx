import { useNavigate } from 'react-router-dom';

export default function HeroText() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center space-y-6 max-w-xl">
      <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        URL Shortener, Branded Short Links & Analytics
      </h1>
      
      <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
        Welcome to the original link shortener—simplifying the Internet through the power of the URL since 2002. 
        You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <button 
          onClick={() => navigate('/plans')}
          className="bg-white hover:bg-slate-100 text-[#074B69] font-bold text-sm px-6 py-3 rounded-lg shadow transition duration-150"
        >
          View Plans
        </button>
        <button 
          onClick={() => navigate('/signup')}
          className="bg-[#00A3C4] hover:bg-[#008CA8] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition duration-150"
        >
          Create Free Account
        </button>
      </div>
    </div>
  );
}
