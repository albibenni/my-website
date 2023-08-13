import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { Tilt } from 'react-tilt';
import Image, { StaticImageData } from 'next/image';
//    "react-tilt": "^0.1.4",

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}
export default function ServiceCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
