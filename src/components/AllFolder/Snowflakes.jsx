import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const SpaceDeformation = ({ count }) => {
  const particlesRef = useRef();
  const boundaryRadius = 5000;

  let particles = [];
  for (let i = 0; i < count; i++) {
    const particle = {
      position: new THREE.Vector3(
        (Math.random() - 0.5) * boundaryRadius,
        (Math.random() - 0.5) * boundaryRadius,
        (Math.random() - 0.5) * boundaryRadius
      ),
      velocity: new THREE.Vector3(
        Math.random() * 0.2 - 2,
        Math.random() * 0.2 - 2,
        Math.random() * 0.2 - 2
      ),
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
    };
    particles.push(particle);
  }

  useFrame(() => {
    if (particlesRef.current) {
      particles.forEach((particle, index) => {
        particle.position.add(particle.velocity);
        if (
          Math.abs(particle.position.x) > boundaryRadius ||
          Math.abs(particle.position.y) > boundaryRadius ||
          Math.abs(particle.position.z) > boundaryRadius
        ) {
          particle.position.set(
            (Math.random() - 0.5) * boundaryRadius,
            (Math.random() - 0.5) * boundaryRadius,
            (Math.random() - 0.5) * boundaryRadius
          );
        }
        particlesRef.current.geometry.attributes.position.setXYZ(
          index,
          particle.position.x,
          particle.position.y,
          particle.position.z
        );
      });
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particlesGeometry = new THREE.BufferGeometry();

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(count * 3), 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    size: 1,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    borderRadius: 5,
  });

  const colors = [];
  particles.forEach((particle) => {
    colors.push(particle.color.r, particle.color.g, particle.color.b);
  });
  particlesGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );

  return (
    <points
      ref={particlesRef}
      geometry={particlesGeometry}
      material={particlesMaterial}
    />
  );
};

export default SpaceDeformation;
