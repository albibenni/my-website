'use client';
import React, { Suspense } from 'react';
import { Technology } from '@/constants/recap';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '@/components/Loader';
import Ball from '@/components/canvas/Ball';

interface BallCanvas {
  tech: Technology;
}
export default function BallCanvas({ tech }: BallCanvas) {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={tech.icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
