'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 5]} intensity={1.2} />

        {/* Background Stars */}
        <Stars radius={100} depth={50} count={4000} factor={4} fade />

        {/* Floating Elements */}
        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={1.5}
          >
            <mesh>
              <icosahedronGeometry args={[1.3, 1]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={0.5}
                wireframe
              />
            </mesh>
          </Float>

          <Float
            speed={1.5}
            rotationIntensity={2}
            floatIntensity={2}
          >
            <mesh position={[2.5, -1.5, -1]}>
              <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
              <meshStandardMaterial
                color="#ff00ff"
                emissive="#ff00ff"
                emissiveIntensity={0.4}
                wireframe
              />
            </mesh>
          </Float>

          <Float
            speed={1.8}
            rotationIntensity={1.5}
            floatIntensity={2.5}
          >
            <mesh position={[-2.2, 1.5, 0]}>
              <dodecahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial
                color="#00ffcc"
                emissive="#00ffcc"
                emissiveIntensity={0.4}
                wireframe
              />
            </mesh>
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Hero Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
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
