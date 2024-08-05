import React from "react";
import Scene from "../block/Scene";
import { Canvas } from "@react-three/fiber";

const AboutUs = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Scene position={[-1.2, 0, 0]} />
      <Scene position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default AboutUs;
