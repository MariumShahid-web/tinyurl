// src/components/CtaBanner.jsx
import { useNavigate } from 'react-router';

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    /* Full width outer layout container with the exact deep blue brand background */
    <div className="bg-[#001D33] text-white py-16 px-6 w-full antialiased font-sans">
      
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Ready for Shorter, Smarter Links?
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
          Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
        </p>

        <div className="flex items-center justify-center space-x-4 pt-2">
          
          <button 
            onClick={() => navigate('/plans')}
            className="bg-white hover:bg-slate-100 text-[#001D33] font-bold text-xs sm:text-sm px-5 py-2.5 rounded transition-colors shadow-sm select-none"
          >
            View Plans
          </button>
          
          <button 
            onClick={() => navigate('/signup')}
            className="bg-[#0D7693] hover:bg-[#0b647d] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded transition-colors shadow-sm select-none"
          >
            Create Free Account
          </button>

        </div>

      </div>
    </div>
  );
}
