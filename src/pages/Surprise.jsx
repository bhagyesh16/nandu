import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaGift } from 'react-icons/fa';

const Surprise = () => {
  useEffect(() => {
    // Trigger confetti on load
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fb7185', '#f43f5e', '#fbbf24']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fb7185', '#f43f5e', '#fbbf24']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fb7185', '#f43f5e', '#fbbf24', '#ffffff']
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-pink-900 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-romantic text-white mb-8 drop-shadow-lg">
          One Last Surprise 🎁
        </h1>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={triggerConfetti}
          className="bg-pink-500 hover:bg-pink-600 text-white text-2xl px-10 py-5 rounded-full shadow-2xl border-2 border-pink-300 transition-all"
        >
          <FaGift className="inline mr-2" /> Open Gift
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <p className="text-xl md:text-2xl text-pink-100 font-light">
            "You are my forever ❤️"
          </p>
          <p className="text-sm text-pink-300 mt-2">
            May this year bring you as much joy as you bring into my life.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Surprise;