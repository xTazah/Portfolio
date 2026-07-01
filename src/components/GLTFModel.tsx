import React from 'react';
import { useGLTF } from "@react-three/drei";

interface ModelProps {
    path: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

export const Model: React.FC<ModelProps> = ({
    path,
    scale = 0.11,
    position = [0, 0, 0],
    rotation = [0, -1.5, 0],
  }) => {
    const model = useGLTF(path);

    return (
      <primitive
        object={model.scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    );
  };
