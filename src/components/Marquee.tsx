import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode[];
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
}

const Marquee = ({ children, reverse = false, speed = 20, pauseOnHover = true }: MarqueeProps) => {
  return (
    <div className="relative overflow-hidden w-full whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{
          x: reverse ? ['-100%', '0%'] : ['0%', '-100%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        {[...children, ...children].map((child, index) => (
          <div key={index} className="mx-4">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
