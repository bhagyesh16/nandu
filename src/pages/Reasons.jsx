import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaSmile, FaGlobe, FaMusic, FaBook, FaCamera, FaHome } from 'react-icons/fa';

const reasons = [
  { icon: <FaHeart />, text: "Your beautiful heart" },
  { icon: <FaSmile />, text: "Your infectious laughter" },
  { icon: <FaStar />, text: "Your kindness to others" },
  { icon: <FaGlobe />, text: "Your adventurous spirit" },
  { icon: <FaMusic />, text: "Your amazing taste in songs" },
  { icon: <FaBook />, text: "Your wisdom and thoughts" },
  { icon: <FaCamera />, text: "The memories we create" },
  { icon: <FaHome />, text: "How you make me feel safe" },
];

const Reasons = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl text-center font-romantic text-pink-400 mb-12"
      >
        Reasons I Love You 💖
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass p-6 rounded-xl text-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <div className="text-4xl text-pink-400 mb-4 flex justify-center">
              {reason.icon}
            </div>
            <p className="text-white font-medium">{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;