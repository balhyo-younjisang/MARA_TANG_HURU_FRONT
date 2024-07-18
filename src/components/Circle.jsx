import * as THREE from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Cone, Sphere } from "@react-three/drei";

export default function Circle(props) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <coneGeometry args={[5, 6, 16]} attach="geometry" />
      <meshStandardMaterial color={"skyblue"} />
    </mesh>
  );
}
