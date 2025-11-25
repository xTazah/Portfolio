import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useFBX, useTexture, Float, MeshTransmissionMaterial, RoundedBox, Environment } from "@react-three/drei";
import { afterEffects, cSharp, tensorflow, githubPng } from "../assets/assets";
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";

const Computer = () => {
  const fbx = useFBX('/3d_models/Computer/computer.fbx');
  return <primitive object={fbx} scale={0.0025} position={[0, -2.5, 0]} rotation={[0, Math.PI, 0]} />; 
};

interface ButtonProps {
    targetPosition: [number, number, number];
    progress: MotionValue<number>;
    icon: string;
    color?: string;
}

const Button = ({ targetPosition, progress, icon, color = "#ffffff" }: ButtonProps) => {
    const texture = useTexture(icon);
    
    // Interpolate position from center (0, -1, 0) to targetPosition based on scroll progress
    // Start animation at 0.1 progress and finish at 0.6 for a quicker ramp up
    const x = useTransform(progress, [0.1, 0.6], [0, targetPosition[0]]);
    const y = useTransform(progress, [0.1, 0.6], [-1, targetPosition[1]]);
    const z = useTransform(progress, [0.1, 0.6], [0, targetPosition[2]]);
    
    return (
        <motion.group position-x={x} position-y={y} position-z={z}>
            <Float speed={5} rotationIntensity={0.5} floatIntensity={0.5}>
                <group>
                    {/* Glass Button Body */}
                    <RoundedBox args={[1, 1, 0.2]} radius={0.1} smoothness={4}>
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={0.2}
                            chromaticAberration={0.05}
                            anisotropy={0.1}
                            distortion={0.1}
                            distortionScale={0.1}
                            temporalDistortion={0.1}
                            iridescence={1}
                            iridescenceIOR={1}
                            iridescenceThicknessRange={[0, 1400]}
                            roughness={0.05}
                            color={color}
                            toneMapped={false}
                        />
                    </RoundedBox>
                    {/* Icon */}
                    <mesh position={[0, 0, 0.11]} rotation={[0, 0, 0]}>
                        <planeGeometry args={[0.7, 0.7]} />
                        <meshBasicMaterial map={texture} transparent toneMapped={false} />
                    </mesh>
                </group>
            </Float>
        </motion.group>
    );
};

const Scene = () => {
    const { scrollYProgress } = useScroll();
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    
    return (
        <group position={[3, 0, 0]}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
            <Environment preset="city" />
            <Computer />
            
            <group>
                <Button targetPosition={[-3, 0, 2]} progress={smoothScroll} icon={afterEffects} color="#1a8bedff" />
                <Button targetPosition={[3, 2, -2]} progress={smoothScroll} icon={tensorflow} color="#ffaa00" />
                <Button targetPosition={[-3, 3, -2]} progress={smoothScroll} icon={githubPng} color="#ffffff" />
                <Button targetPosition={[3, -1, 2]} progress={smoothScroll} icon={cSharp} color="#aa00ff" />
            </group>
        </group>
    );
};

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [0, 0, 11], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enableRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Scene />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
