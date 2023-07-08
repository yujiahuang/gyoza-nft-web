import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import data from '../data/data';
import useInterval from 'use-interval';

function Home() {
  const [frameIdx, setFrameIdx] = useState(0);
  const mass = [
    4.77, 9.90, 13.92, 4.77,
  ];

  const scale = Math.min(window.innerHeight, window.innerWidth) / 850000; // TODO: define world size in data
  // TODO: write animate to next posi
  const generateCircles = () => {
    return data[frameIdx].map((ball, index) => {
      return (
        <circle
          key={index}
          cx={ball.x * scale}
          cy={ball.y * scale}
          r={mass[index]}
          fill="tomato"
        />
      );
    });
  }
  useInterval(() => {
    let nextFrameIdx = frameIdx + 1;
    if (nextFrameIdx >= data.length) {
      nextFrameIdx = 0;
    }
    setFrameIdx(nextFrameIdx);
  }, 40);

  const generateSprings = () => {

  }

  return (
    <div className="home">
      {/* <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <mesh visible rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </Canvas> */}
      <svg>
        {generateCircles()}
      </svg>
    </div>
  );
}

export default Home;
