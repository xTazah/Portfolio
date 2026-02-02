import { Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, useTexture, RoundedBox } from "@react-three/drei";
import { afterEffects, cSharp, tensorflow, githubPng } from "../assets/assets";
import { useInView } from "framer-motion";
import * as THREE from 'three';

const Monitor = ({ isMobile }: { isMobile: boolean }) => {
  const { scene } = useGLTF('/3d_models/monitor.glb');
  const groupRef = useRef<THREE.Group>(null);
  
  // Clone the scene to avoid sharing between instances
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    // Ensure materials are visible
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.side = THREE.DoubleSide;
        }
      }
    });
    return clone;
  }, [scene]);
  
  // Floating animation like the buttons
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });
  
  return (
    <group ref={groupRef}>
      <primitive 
        object={clonedScene} 
        scale={isMobile ? 0.0025 : 0.004} 
        position={isMobile ? [3.75, -1, 0] : [6, 0, 0]} 
        rotation={[0, -0.1, 0]} 
      />
    </group>
  );
};

interface ButtonProps {
    position: [number, number, number];
    icon: string;
    color?: string;
    floatSpeed?: number;
}

const Button = ({ position, icon, color = "#ffffff", floatSpeed = 1.5 }: ButtonProps) => {
    const texture = useTexture(icon);
    const meshRef = useRef<THREE.Group>(null);
    const baseY = useRef(position[1]);
    
    // Floating animation - more subtle
    useFrame((state) => {
        if (meshRef.current) {
            // Subtle floating effect with rotation
            meshRef.current.position.y = baseY.current + Math.sin(state.clock.elapsedTime * floatSpeed + position[0]) * 0.15;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * floatSpeed * 0.5) * 0.03;
        }
    });
    
    return (
        <group ref={meshRef} position={position}>
            <RoundedBox args={[1, 1, 0.2]} radius={0.1} smoothness={2}>
                <meshStandardMaterial 
                    color={color}
                    metalness={0.3}
                    roughness={0.4}
                    transparent
                    opacity={0.9}
                />
            </RoundedBox>
            {/* Icon */}
            <mesh position={[0, 0, 0.11]} rotation={[0, 0, 0]}>
                <planeGeometry args={[0.7, 0.7]} />
                <meshBasicMaterial map={texture} transparent toneMapped={false} />
            </mesh>
        </group>
    );
};

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    return (
        <group position={[0, 0, 0]}>
            <ambientLight intensity={2.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <directionalLight position={[-10, 5, -5]} intensity={2} />
            <Monitor isMobile={isMobile} />
            
            <group scale={isMobile ? 0.6 : 1} position={isMobile ? [0, -1, 0] : [0, 0, 0]}>
                <Button position={[-3, 0, 2]} icon={afterEffects} color="#1a8bed" floatSpeed={1.2} />
                <Button position={[4, 2.5, -2]} icon={tensorflow} color="#ffaa00" floatSpeed={1.6} />
                <Button position={[-3, 3, -2]} icon={githubPng} color="#cccccc" floatSpeed={1.4} />
                <Button position={[3, -1, 2]} icon={cSharp} color="#aa00ff" floatSpeed={1.8} />
            </group>
        </group>
    );
};

export const ComputerCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const [shouldRender, setShouldRender] = useState(false);

  // Only render when in view
  useEffect(() => {
    if (isInView) {
      setShouldRender(true);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {shouldRender && (
        <Canvas
          frameloop={isInView ? "always" : "never"}
          shadows={true}
          camera={{ position: [0, 0, 11], fov: 40 }}
          gl={{ 
            preserveDrawingBuffer: true,
            powerPreference: "low-power",
            antialias: false 
          }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};
