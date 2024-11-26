import React from 'react';
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { bobbingAnimation} from "../utils/animations.ts";

interface ModelProps {
    path: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Lighting = () => (
    <>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
    </>
  );

export const Model: React.FC<ModelProps> = ({
    path,
    scale = 0.11,
    position = [0, 0, 0],
    rotation = [0, -1.5, 0],
  }) => {
    const model = useGLTF(path);
  
    return (
      <motion.mesh>
        <Lighting />
        <motion.primitive
          object={model.scene}
          scale={scale}
          position={position}
          rotation={rotation}
          variants={bobbingAnimation()}
          initial="hidden"
          animate="show"
        />
      </motion.mesh>
    );
  };