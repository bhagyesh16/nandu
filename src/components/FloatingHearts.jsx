import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: "110vh", x: Math.random() * 100 - 50 }}
          animate={{
            y: -100,
            x: Math.random() * 200 - 100,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute bottom-0 text-pink-500 text-2xl"
          style={{ left: `${Math.random() * 100}vw` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
