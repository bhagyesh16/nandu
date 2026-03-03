import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import BackgroundMusic from './components/BackgroundMusic';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Letter from './pages/letter';
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
        <nav className="fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center glass">
          <div className="text-2xl font-romantic text-pink-400">My Love ❤️</div>
          <div className="space-x-4 text-sm md:text-base">
            <Link to="/memories" className="hover:text-pink-300 transition">Memories</Link>
            <Link to="/letter" className="hover:text-pink-300 transition">Letter</Link>
            <Link to="/reasons" className="hover:text-pink-300 transition">Reasons</Link>
            <Link to="/surprise" className="hover:text-pink-300 transition">Surprise</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="pt-20">
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