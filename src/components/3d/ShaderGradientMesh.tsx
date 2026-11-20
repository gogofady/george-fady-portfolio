import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ShaderGradientMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#ffdce5') },
      uColor2: { value: new THREE.Color('#bae6fd') },
      uColor3: { value: new THREE.Color('#f8fafc') },
    }),
    []
  );

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float elevation = sin(pos.x * 0.28 + uTime * 0.35) * cos(pos.y * 0.28 + uTime * 0.25) * 1.2;
      elevation += sin(pos.x * 0.55 - uTime * 0.2) * cos(pos.y * 0.45 + uTime * 0.3) * 0.6;
      pos.z += elevation;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mixFactor = smoothstep(-1.2, 1.2, vElevation);
      vec3 col = mix(uColor1, uColor2, mixFactor);
      col = mix(col, uColor3, (1.0 - vUv.y) * 0.4);
      gl_FragColor = vec4(col, 0.42);
    }
  `;

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.8;
    }
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -4.5]} rotation={[-Math.PI * 0.22, 0, 0]}>
      <planeGeometry args={[28, 20, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};
export default ShaderGradientMesh;