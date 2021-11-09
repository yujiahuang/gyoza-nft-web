import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Home() {

  return (
    <div className="home">
      <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <mesh visible rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Home;
