import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const letterText = `My Dearest Love,

Today marks the day the universe gifted me the most precious person in my life.

Every moment with you is a treasure. Your laughter is my favorite song, and your smile is my greatest achievement.

Thank you for being my rock, my sunshine, and my home. I love you more than words can describe.

Happy Birthday, my queen! 👑`;

const Letter = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(letterText.slice(0, i + 1));
      i++;
      if (i === letterText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-600 via-fuchsia-600 to-amber-400 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full glass p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border-t border-white/30 relative z-10"
      >
        <h1 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-white drop-shadow mb-5 sm:mb-6 text-center">
          For You ❤️
        </h1>
        <div className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose font-light whitespace-pre-wrap">
          {displayedText}
          <span className="animate-pulse">|</span>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm">Forever Yours</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;
