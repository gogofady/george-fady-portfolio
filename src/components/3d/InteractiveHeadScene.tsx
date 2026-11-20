import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const HeroSculpture: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const globalPointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth) * 2 - 1;
      const py = -(e.clientY / window.innerHeight) * 2 + 1;
      globalPointer.current = { x: px, y: py };
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  const [portrait, depth, normal] = useTexture([
    '/assets/george_portrait.png',
    '/assets/george_depth.png',
    '/assets/george_normal.png',
  ]);

  useMemo(() => {
    [portrait, depth, normal].forEach((texture) => {
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = 8;
      texture.generateMipmaps = true;
    });
  }, [portrait, depth, normal]);

  const ornaments = useMemo(() => {
    const entries = [];
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2;
      entries.push({
        position: [
          Math.cos(angle) * 2.05,
          Math.sin(angle) * 2.05,
          Math.sin(angle * 2) * 0.16
        ] as [number, number, number],
        scale: i % 3 === 0 ? 0.095 : 0.05,
        color: i % 3 === 0 ? '#0284c7' : '#e11d48',
      });
    }
    return entries;
  }, []);

  useFrame((state, delta) => {
    if (!group.current || !halo.current) return;
    const { x, y } = globalPointer.current;
    const t = state.clock.elapsedTime;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      x * 0.16 + Math.sin(t * 0.35) * 0.02,
      3.8,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -y * 0.10,
      3.8,
      delta
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -x * 0.025,
      3.8,
      delta
    );

    group.current.position.y = Math.sin(t * 0.8) * 0.04;
    halo.current.rotation.z = Math.sin(t * 0.24) * 0.05;
    halo.current.rotation.y = Math.sin(t * 0.18) * 0.07;

    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(light.current.position.x, x * 3.8, 3.5, delta);
      light.current.position.y = THREE.MathUtils.damp(light.current.position.y, y * 2.5 + 1.2, 3.5, delta);
    }
  });

  return (
    <group ref={group}>
      <pointLight
        ref={light}
        position={[0, 1.2, 4.0]}
        intensity={26}
        distance={9}
        color="#ffffff"
      />
      <directionalLight
        position={[-4, 3, 3]}
        intensity={3.2}
        color="#fb7185"
      />
      <directionalLight
        position={[4, 1, -2]}
        intensity={3.8}
        color="#38bdf8"
      />
      <spotLight
        position={[0, 5, 2.5]}
        intensity={28}
        angle={0.48}
        penumbra={0.85}
        color="#ffffff"
      />

      <group ref={halo} position={[0, 0.05, -0.32]}>
        <mesh rotation={[0.12, 0, 0.12]}>
          <torusGeometry args={[1.74, 0.016, 16, 180]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#38bdf8"
            emissiveIntensity={1.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh rotation={[0.12, 0, -0.28]} scale={[1, 1.12, 1]}>
          <torusGeometry args={[1.92, 0.028, 20, 180]} />
          <meshPhysicalMaterial
            color="#e11d48"
            emissive="#9f1239"
            emissiveIntensity={0.8}
            metalness={0.85}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>

        {ornaments.map((item, i) => (
          <Float key={i} speed={1.1 + (i % 3) * 0.25} rotationIntensity={0.4} floatIntensity={0.4}>
            <mesh position={item.position}>
              <icosahedronGeometry args={[item.scale, 1]} />
              <meshPhysicalMaterial
                color={item.color}
                emissive={item.color}
                emissiveIntensity={1.2}
                metalness={0.7}
                roughness={0.15}
              />
            </mesh>
          </Float>
        ))}

        {[0, 1, 2, 3].map((i) => (
          <mesh key={`pin-${i}`} position={[Math.cos((i * Math.PI) / 2) * 1.74, Math.sin((i * Math.PI) / 2) * 1.74, 0.02]}>
            <sphereGeometry args={[0.04, 20, 20]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#e11d48"
              emissiveIntensity={1.8}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      <mesh position={[0, -0.02, 0.1]}>
        <planeGeometry args={[3.35, 4.7, 128, 128]} />
        <meshStandardMaterial
          map={portrait}
          displacementMap={depth}
          displacementScale={0.065}
          displacementBias={-0.012}
          normalMap={normal}
          normalScale={new THREE.Vector2(0.6, 0.6)}
          transparent={true}
          alphaTest={0.015}
          roughness={0.38}
          metalness={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export const InteractiveHeadScene: React.FC = () => {
  return (
    <div className="relative flex h-[440px] w-full items-center justify-center sm:h-[540px] lg:h-[630px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.14),rgba(14,165,233,0.1)_48%,transparent_72%)] blur-3xl" />
      
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.3], fov: 44 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.1} />
        <HeroSculpture />
        <ContactShadows
          position={[0, -2.25, -0.2]}
          opacity={0.22}
          scale={5.0}
          blur={2.5}
          far={4.0}
          color="#64748b"
        />
      </Canvas>
    </div>
  );
};
export default InteractiveHeadScene;