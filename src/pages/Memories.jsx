import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';
import image10 from '../assets/images/image10.jpeg';
import image11 from '../assets/images/image11.jpeg';
import image12 from '../assets/images/image12.jpeg';
import image13 from '../assets/images/image13.jpeg';
import image14 from '../assets/images/image14.jpeg';

const memories = [
  { id: 1, src: image1, caption: 'Memory 01' },
  { id: 2, src: image2, caption: 'Memory 02' },
  { id: 3, src: image3, caption: 'Memory 03' },
  { id: 4, src: image4, caption: 'Memory 04' },
  { id: 5, src: image5, caption: 'Memory 05' },
  { id: 6, src: image6, caption: 'Memory 06' },
  { id: 7, src: image7, caption: 'Memory 07' },
  { id: 8, src: image8, caption: 'Memory 08' },
  { id: 9, src: image9, caption: 'Memory 09' },
  { id: 10, src: image10, caption: 'Memory 10' },
  { id: 11, src: image11, caption: 'Memory 11' },
  { id: 12, src: image12, caption: 'Memory 12' },
  { id: 13, src: image13, caption: 'Memory 13' },
  { id: 14, src: image14, caption: 'Memory 14' },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Memories = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-600 via-fuchsia-600 to-amber-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md border border-white/30 shadow-lg">
            <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/90">Gallery</span>
          </div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl text-center font-romantic text-white drop-shadow"
          >
            Our Memories
          </motion.h1>
          <p className="mt-3 text-white max-w-2xl mx-auto text-sm sm:text-base">
            snapshots of our favorite moments. Tap any photo to relive it.
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 auto-rows-[150px] sm:auto-rows-[200px]"
        >
          {memories.map((img, index) => {
            const isFeatured = index % 7 === 0 || index % 7 === 4;
            return (
              <motion.button
                key={img.id}
                variants={itemVariants}
                onClick={() => setSelectedImg(img)}
                type="button"
                className={`group relative w-full h-full overflow-hidden rounded-2xl border border-white/20 bg-transparent shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 ${
                  isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/55 via-rose-900/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between text-white">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow">{img.caption}</span>
                  <span className="text-xs rounded-full bg-white/20 px-2 py-0.5">View</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 w-screen h-[100dvh] bg-rose-950/85 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 hover:text-amber-200"
              aria-label="Close"
              type="button"
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="h-full w-full flex items-center justify-center p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-[100dvw] max-h-[100dvh]">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.caption}
                  className="h-full w-full object-contain"
                />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/90 text-sm sm:text-base font-light bg-black/40 px-3 py-1 rounded-full">
                  {selectedImg.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;
