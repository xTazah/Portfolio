import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";
import { Model } from './GLTFModel';

interface CanvasProps {
  modelPath: string;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export const Canvas3D: React.FC<CanvasProps> = ({
  modelPath,
  cameraPosition = [-40, 0, 0],
  enableZoom = false,
  scale = 0.11,
  position = [0, 0, 0],
  rotation = [0, -1.5, 0],
}) => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: cameraPosition, fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={enableZoom}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model path={modelPath} scale={scale} position={position} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};