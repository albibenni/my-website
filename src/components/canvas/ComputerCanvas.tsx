'use client';
import { extend, Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '@/components/Loader';
import { OrbitControls, Preload } from '@react-three/drei';
import Computers from '@/components/canvas/Computers';
extend({ OrbitControls, Canvas });

export default function ComputerCanvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
