import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ShaderGradientMesh } from './ShaderGradientMesh';
import * as THREE from 'three';

const SubtleStarfield: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 350;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cRose = new THREE.Color('#f43f5e');
    const cSky = new THREE.Color('#0284c7');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      const chosen = Math.random() > 0.45 ? cSky : cRose;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const ScrollLeaves: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 48;
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);

  const petalGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.45);
    shape.bezierCurveTo(0.32, -0.15, 0.42, 0.25, 0, 0.55);
    shape.bezierCurveTo(-0.42, 0.25, -0.32, -0.15, 0, -0.45);
    return new THREE.ShapeGeometry(shape, 8);
  }, []);

  const petalsData = useMemo(() => {
    const data = [];
    const colors = [
      new THREE.Color('#e11d48'),
      new THREE.Color('#f43f5e'),
      new THREE.Color('#be123c'),
      new THREE.Color('#fb7185'),
      new THREE.Color('#0284c7'),
      new THREE.Color('#0ea5e9'),
    ];

    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 22,
        y: (Math.random() - 0.5) * 18,
        z: (Math.random() - 0.5) * 8 - 0.5,
        vy: -0.45 - Math.random() * 0.75,
        vx: (Math.random() - 0.5) * 0.5,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 2.8,
        rotSpeedY: (Math.random() - 0.5) * 3.4,
        rotSpeedZ: (Math.random() - 0.5) * 2.2,
        swayPhase: Math.random() * Math.PI * 2,
        scale: 0.2 + Math.random() * 0.28,
        color: colors[i % colors.length]
      });
    }
    return data;
  }, [count]);

  useEffect(() => {
    if (!meshRef.current) return;
    petalsData.forEach((petal, i) => {
      meshRef.current!.setColorAt(i, petal.color);
    });
    meshRef.current.instanceColor!.needsUpdate = true;
  }, [petalsData]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
      lastScrollY.current = currentY;
      scrollVelocity.current = Math.min(delta * 0.15, 5.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const impulse = scrollVelocity.current;
    scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, 0, delta * 3.6);

    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const petal = petalsData[i];

      if (impulse > 0.03) {
        petal.vy += impulse * (0.07 + Math.random() * 0.06);
      }

      petal.vy -= delta * 1.35;
      petal.vy = Math.max(-1.6, Math.min(petal.vy, 3.6));

      const sway = Math.sin(time * 2.5 + petal.swayPhase) * 0.55;
      petal.x += (petal.vx + sway) * delta;
      petal.y += petal.vy * delta;

      petal.rx += petal.rotSpeedX * delta * (1.0 + Math.abs(petal.vy));
      petal.ry += petal.rotSpeedY * delta * (1.0 + Math.abs(petal.vy));
      petal.rz += petal.rotSpeedZ * delta * (1.0 + Math.abs(petal.vy));

      if (petal.y < -10) {
        petal.y = 9.5 + Math.random() * 2;
        petal.x = (Math.random() - 0.5) * 22;
        petal.vy = -0.4 - Math.random() * 0.5;
      } else if (petal.y > 10) {
        petal.y = -9.5 - Math.random() * 2;
      }

      dummy.position.set(petal.x, petal.y, petal.z);
      dummy.rotation.set(petal.rx, petal.ry, petal.rz);
      dummy.scale.setScalar(petal.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[petalGeometry, undefined, count]}
    >
      <meshStandardMaterial
        roughness={0.35}
        metalness={0.12}
        side={THREE.DoubleSide}
        transparent
        opacity={0.92}
      />
    </instancedMesh>
  );
};

export const Scene3DBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[-4, 4, 3]} intensity={1.8} color="#fecdd3" />
        <directionalLight position={[4, -2, 2]} intensity={1.6} color="#bae6fd" />
        <ShaderGradientMesh />
        <SubtleStarfield />
        <ScrollLeaves />
      </Canvas>
    </div>
  );
};
export default Scene3DBackground;