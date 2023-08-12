'use client';
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Computers() {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight intensity={1} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <primitive object={computer.scene}></primitive>
    </mesh>
  );
}
