import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import {motion} from "framer-motion-3d"
import { Suspense } from "react";

const bobbingAnimation = {
    hidden: { y: 0, rotateZ: 0 },
    show: {
      y: [0, -0.3, 0, -0.2, 0],
      rotateZ: [0, 0.03, -0.03, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  

const Piano= () => {
  const piano = useGLTF("/3d_models/Piano.glb");

  return (
    <motion.mesh>
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
      <motion.primitive
        object={piano.scene}
        scale={0.11} 
        position={[0, 0,0]}
        rotation={[0, -1.5, 0]} 
        variants={bobbingAnimation}
        initial="hidden"
        animate="show"
      />
    </motion.mesh>
  );
};

const PianoCanvas = () => {
  return (
    <Canvas
        frameloop='always'
        shadows
        camera={{ position: [-40, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Piano/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PianoCanvas;
