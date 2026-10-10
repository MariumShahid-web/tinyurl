// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Domains from './pages/Domains';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Plans from './pages/Plans';






export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#001D33] text-slate-100 font-sans flex flex-col antialiased">
        
        <Navbar />

        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            <Route path="/domains" element={<Domains />} />
          <Route path="/plans" element={<Plans />} />
             <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </Router>
  );
}
