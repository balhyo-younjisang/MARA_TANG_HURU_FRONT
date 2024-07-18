import * as THREE from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useState, useRef } from "react";

export default function Box(props) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef} {...props} receiveShadow>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
