import { motion } from 'framer-motion';
import {
  FaHeart,
  FaStar,
  FaSmile,
  FaGlobe,
  FaMusic,
  FaBook,
  FaCamera,
  FaHome,
  FaUtensils,
  FaTrophy,
  FaBolt,
  FaFire,
  FaMoon,
} from 'react-icons/fa';

const reasons = [
  { icon: <FaHeart />, text: "Your beautiful heart" },
  { icon: <FaSmile />, text: "Your adorable eyes and smile" },
  { icon: <FaStar />, text: "Your kindness to others" },
  { icon: <FaGlobe />, text: "Your adventurous spirit" },
  { icon: <FaMusic />, text: "Your amazing taste in songs" },
  { icon: <FaBook />, text: "Your wisdom and thoughts" },
  { icon: <FaCamera />, text: "The memories we create" },
  { icon: <FaHome />, text: "How you make me feel safe" },
  { icon: <FaUtensils />, text: "Our food dates and cravings" },
  { icon: <FaTrophy />, text: "Your RCB spirit" },
  { icon: <FaBolt />, text: "Your Virat Kohli level energy" },
  { icon: <FaFire />, text: "The spark you bring into my life" },
  { icon: <FaMoon />, text: "The calm you bring to my nights" },
  { icon: <FaStar />, text: "Your spiritual energy and faith" },
];

const Reasons = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-950 to-fuchsia-900 py-16 px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-romantic text-pink-400 mb-4 drop-shadow-lg">
          Reasons I Love You
        </h1>
        <p className="text-pink-200 text-sm md:text-base max-w-xl mx-auto">
          Every little thing about you makes my world brighter
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="relative p-8 rounded-2xl text-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
            <div className="text-4xl text-pink-400 mb-5 flex justify-center animate-pulse">
              {reason.icon}
            </div>
            <p className="text-white text-lg font-medium">
              {reason.text}
            </p>

            {/* Soft glow background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
