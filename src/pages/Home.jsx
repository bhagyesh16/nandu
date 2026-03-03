import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <h2 className="text-xl md:text-2xl font-light tracking-widest mb-4">The Most Special Day</h2>
        <h1 className="font-romantic text-6xl md:text-8xl mb-6 drop-shadow-lg">
          Happy Birthday <br /> My Love ❤️
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto opacity-90">
          "You are the light in my life, the beat in my heart, and the reason I smile every day."
        </p>
        
        <Link to="/memories">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl"
          >
            Enter My World 💕
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;