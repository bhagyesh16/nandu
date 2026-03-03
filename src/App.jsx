import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import BackgroundMusic from './components/BackgroundMusic';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Letter from './pages/Letter';
import Reasons from './pages/Reasons';
import Surprise from './pages/Surprise';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        {/* Global Background Effects */}
        <FloatingHearts />
        <BackgroundMusic />
        {/* Navigation Bar (Visible on all pages except Home) */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-rose-700/80 via-fuchsia-700/70 to-amber-400/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] border-b border-white/15">
          <div className="w-full max-w-none px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5">
                  <span className="text-base sm:text-lg font-romantic text-white tracking-wide drop-shadow">My Babudi</span>
                  <span className="text-white/90">❤️</span>
                </div>
              </div>
              <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-5 md:gap-6 text-[11px] sm:text-sm md:text-base overflow-x-auto">
                <Link to="/memories" className="min-w-[110px] text-center rounded-full px-5 py-2.5 text-white/90 hover:text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition">Memories</Link>
                <Link to="/letter" className="min-w-[110px] text-center rounded-full px-5 py-2.5 text-white/90 hover:text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition">Letter</Link>
                <Link to="/reasons" className="min-w-[110px] text-center rounded-full px-5 py-2.5 text-white/90 hover:text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition">Reasons</Link>
                <Link to="/surprise" className="min-w-[110px] text-center rounded-full px-5 py-2.5 text-white/90 hover:text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition">Surprise</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="pt-32 sm:pt-28">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/reasons" element={<Reasons />} />
              <Route path="/surprise" element={<Surprise />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;

