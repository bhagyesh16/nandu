import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
// NOTE: Add your images to src/assets/images/ and import them, or use URLs below
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7", caption: "Our first meeting 💖" },
  { id: 2, src: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5", caption: "That smile 😍" },
  { id: 3, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2", caption: "Together forever ♾️" },
  { id: 4, src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", caption: "My partner in crime 👫" },
];

const Memories = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl text-center font-romantic text-pink-400 mb-12"
      >
        Our Memories 📸
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
            className="cursor-pointer rounded-xl overflow-hidden glass h-64 relative group"
          >
            <img src={img.src} alt="memory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold">View Memory</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-pink-500"
              >
                <FaTimes />
              </button>
              <img src={selectedImg.src} alt="full" className="w-full rounded-lg shadow-2xl" />
              <p className="text-center text-white mt-4 text-xl font-light">{selectedImg.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;
