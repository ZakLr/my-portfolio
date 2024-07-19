import React from 'react';
import { motion } from 'framer-motion';
export default function DotsEffect({
  top,
  right,
  bottom,
  left,
  scale = 1,
  rows = 4,
  columns = 2,
  rotation = 0,
  opacity = 1,
}) {
  const style = {
    top: top !== undefined ? `${top}rem` : 'auto',
    right: right !== undefined ? `${right}rem` : 'auto',
    bottom: bottom !== undefined ? `${bottom}rem` : 'auto',
    left: left !== undefined ? `${left}rem` : 'auto',
    transform: `scale(${scale}) rotate(${rotation}deg)`,
    opacity: `${opacity}`,
  };

  return (
      <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', }}
          style={style} className="absolute gap-2 sm:gap-3 flex scale-10 md:scale-50 lg:scale-100">
      {Array.from({ length: columns }).map((_, colIndex) => (
        <div key={colIndex} className='flex flex-col gap-2 sm:gap-3'>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className='h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 bg-text-secondary rounded-full'></div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
