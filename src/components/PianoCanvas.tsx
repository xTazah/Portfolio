import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

interface PianoProps {
    isMobile: boolean;
  }

const Piano:React.FC<PianoProps> = ({ isMobile }:PianoProps) => {
  const piano = useGLTF("/3d_models/Piano.glb");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={piano.scene}
        scale={isMobile ? 0.075 : 0.1} 
        position={[0, 0,0]}
        rotation={[-0.01, 1, -0.05]} 
      />
    </mesh>
  );
};

const PianoCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas style={{ width: '100%', height: '500px' }}
        frameloop='demand'
        shadows
        dpr={[1, 10]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Piano isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PianoCanvas;
