import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useInView } from "framer-motion";
import CanvasLoader from "./Loader";
import { Model } from './GLTFModel';
import * as THREE from 'three';

interface CanvasProps {
  modelPath: string;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

// Wrapper component that adds subtle floating animation
const AnimatedModel = ({ modelPath, scale, position, rotation }: { 
  modelPath: string; 
  scale: number; 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const baseY = position[1];
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation only
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Model path={modelPath} scale={scale} position={[0, 0, 0]} rotation={rotation} />
    </group>
  );
};

export const Canvas3D: React.FC<CanvasProps> = ({
  modelPath,
  cameraPosition = [-40, 0, 0],
  enableZoom = false,
  scale = 0.11,
  position = [0, 0, 0],
  rotation = [0, -1.5, 0],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px" });

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        frameloop={isInView ? "always" : "never"}
        shadows={false}
        camera={{ position: cameraPosition, fov: 25 }}
        gl={{ 
          preserveDrawingBuffer: true, 
          powerPreference: "low-power",
          antialias: false
        }}
        dpr={[1, 1.5]}
      >

        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, 5, -5]} intensity={1} />
        
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={enableZoom}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <AnimatedModel 
            modelPath={modelPath} 
            scale={scale} 
            position={position} 
            rotation={rotation} 
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};