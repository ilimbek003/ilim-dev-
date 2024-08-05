import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "../AllFolder/Box";
import Snowflakes from "../AllFolder/Snowflakes";

const Space = () => {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#000" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Snowflakes count={300000} />
      </Canvas>
      <Box />
    </div>
  );
};

export default Space;
