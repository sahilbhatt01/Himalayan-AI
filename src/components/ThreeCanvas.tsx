"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Simple floating rotating mountain shape
function FloatingMountain() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.3;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <coneGeometry args={[1.5, 2.5, 6]} />
      <meshStandardMaterial
        color="#6cb1ff"
        metalness={0.4}
        roughness={0.6}
      />
    </mesh>
  );
}

// Simple rotating ring aura for a futuristic look
function EnergyRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring.current) {
      ring.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.2, 0.05, 16, 100]} />
      <meshBasicMaterial color="#00fff2" wireframe />
    </mesh>
  );
}

// Light glow from below
function GroundGlow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
      <circleGeometry args={[4, 64]} />
      <meshBasicMaterial color="#2dd4bf" transparent opacity={0.2} />
    </mesh>
  );
}

export default function ThreeCanvas  (){
  return (
    <div className="w-full h-[60vh] rounded-2xl overflow-hidden bg-[#030a1a]">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#030a1a"]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[3, 4, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade />

        <FloatingMountain />
        <EnergyRing />
        <GroundGlow />

        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
