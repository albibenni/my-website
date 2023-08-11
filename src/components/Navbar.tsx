'use client';
import React, { useState } from 'react';
import { styles } from '@/app/styles';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';

export default function Navbar() {
  const [acive, setActive] = useState('');
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        />
        <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold object-contain cursor-pointer">
          Alberto <span className="sm:block hidden">| Software Engineer</span>
        </p>
      </div>
    </nav>
  );
}
