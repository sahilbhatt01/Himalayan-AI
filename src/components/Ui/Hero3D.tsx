'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[80vh] bg-[#030a1a] flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 5]} intensity={1.2} />

        {/* Starfield / Nebula Feel */}
        <Stars radius={200} depth={80} count={8000} factor={6} fade />
        <fog attach="fog" args={['#030a1a', 6, 18]} />

        <Suspense fallback={null}>

          {/* LEFT Floating Icosahedron */}
          <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
            <mesh position={[-4.5, 0.3, 0]}>
              <icosahedronGeometry args={[1.3, 1]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={0.6}
                wireframe
              />
            </mesh>
          </Float>

          {/* RIGHT Floating Dodecahedron */}
          <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2.3}>
            <mesh position={[4.5, -0.2, 0]}>
              <dodecahedronGeometry args={[1.0, 0]} />
              <meshStandardMaterial
                color="#00ffcc"
                emissive="#00ffcc"
                emissiveIntensity={0.5}
                wireframe
              />
            </mesh>
          </Float>

        </Suspense>

        {/* Camera Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Himalayan AI Code School
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl text-lg">
          Explore AI, 3D Design & Future Technology — Build something extraordinary with us.
        </p>
      </div>
    </section>
  );
}
