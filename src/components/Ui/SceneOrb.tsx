'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

export default function SceneOrb() {
  return (
    <div className="w-full h-[70vh] bg-[#030a1a] rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={4000} factor={4} fade />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial
              color="#00fff2"
              emissive="#00fff2"
              emissiveIntensity={0.5}
              wireframe
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
