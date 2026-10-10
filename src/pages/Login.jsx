// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import loginVectorImg from '../components/images/loginvectorimg.png';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    navigate('/');
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#FFFFFF] z-50 flex flex-col md:flex-row antialiased font-sans overflow-y-auto md:overflow-hidden select-none">
      
      <div className="w-full md:w-[50%] bg-[#FFFFFF] flex flex-col pt-16 pb-12 px-6 sm:px-16 lg:px-24 xl:px-28 justify-between min-h-screen md:min-h-0 overflow-y-auto">
        
        <div className="w-full max-w-[440px] mx-auto space-y-6 my-auto">
          
          <div className="space-y-2">
            <h1 className="text-[44px] font-extrabold text-[#111827] tracking-tight leading-none">
              Log In
            </h1>
            <p className="text-[14px] font-medium text-[#4B5563]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#0D7693] hover:underline font-bold">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200/80"></div>
            </div>
            <span className="relative px-4 bg-[#FFFFFF] text-[12px] font-medium text-slate-400">
              continue with
            </span>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#111827]">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full border border-slate-300/90 rounded-lg px-4 py-3 text-[14px] text-slate-900 bg-[#FFFFFF] focus:outline-none focus:border-[#0D7693] placeholder-slate-400 font-normal"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#111827]">
                Password
              </label>
              <div className="relative flex items-center border border-slate-300/90 rounded-lg bg-[#FFFFFF] focus-within:border-[#0D7693] overflow-hidden">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full bg-transparent px-4 py-3 text-[14px] text-slate-900 focus:outline-none placeholder-slate-400 font-normal"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none text-[16px]"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[14px] pt-1">
              <label className="flex items-center space-x-2 text-[#111827] font-medium cursor-pointer select-none">
                <input type="checkbox" className="rounded border-slate-300 text-[#0D7693] focus:ring-0 h-4 w-4" />
                <span>Keep me logged in</span>
              </label>
              <span className="text-[#0D7693] font-bold hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#757575] hover:bg-[#616161] text-[#FFFFFF] font-bold text-[14px] py-3.5 rounded-lg transition-colors shadow-sm tracking-wide"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200/80"></div>
            </div>
            <span className="relative px-4 bg-[#FFFFFF] text-[12px] font-medium text-slate-400">
              or
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button className="border border-slate-200 bg-[#FFFFFF] hover:bg-slate-50 rounded-lg px-3 py-2 flex items-center space-x-2 text-[12px] text-slate-700 font-medium shadow-sm">
              <span className="text-[14px]">🌐</span> <span>Google</span>
            </button>
            <button className="border border-slate-200 bg-[#FFFFFF] hover:bg-slate-50 rounded-lg px-3 py-2 flex items-center space-x-2 text-[12px] text-slate-700 font-medium shadow-sm">
              <span className="text-[14px]">📘</span> <span>Facebook</span>
            </button>
            <button className="border border-slate-200 bg-[#FFFFFF] hover:bg-slate-50 rounded-lg px-3 py-2 flex items-center space-x-2 text-[12px] text-slate-700 font-medium shadow-sm">
              <span className="text-[14px]">🐦</span> <span>X (Twitter)</span>
            </button>
            <button className="border border-slate-200 bg-[#FFFFFF] hover:bg-slate-50 rounded-lg px-3 py-2 flex items-center space-x-2 text-[12px] text-slate-700 font-medium shadow-sm">
              <span className="text-[14px]">🟩</span> <span>Microsoft</span>
            </button>
          </div>

        </div>
      </div>

      <div className="w-full md:w-[50%] bg-[#0D7693] text-[#FFFFFF] flex flex-col justify-center items-center p-8 lg:p-16 relative min-h-[460px] md:min-h-0">
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-6 right-6 bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] rounded-full p-2 h-8 w-8 flex items-center justify-center font-bold text-[12px] transition-all focus:outline-none"
        >
          ✕
        </button>

        <div className="w-full max-w-[480px] text-center flex flex-col items-center justify-center space-y-12">
          
          <div className="w-full flex items-center justify-center">
            <img 
              src={loginVectorImg} 
              alt="Welcome platform graphical representation template data analytics dashboard layout dashboard" 
              className="w-full h-auto object-contain max-h-[380px] lg:max-h-[440px]"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-[28px] lg:text-[32px] font-extrabold text-[#FFFFFF] tracking-tight leading-none">
              Welcome Back!
            </h2>
            <p className="text-[16px] lg:text-[18px] text-cyan-50 font-bold tracking-wide">
              Your Links Have Missed You
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
