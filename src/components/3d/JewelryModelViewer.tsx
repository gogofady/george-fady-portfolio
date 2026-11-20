import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
  isRotating: boolean;
}

const GLBModel: React.FC<ModelProps> = ({ url, isRotating }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.2}
      position={[0, -0.2, 0]}
    />
  );
};

export const JewelryModelViewer: React.FC = () => {
  const [modelType, setModelType] = useState<'gold' | 'silver'>('gold');
  const [isRotating, setIsRotating] = useState(true);

  const modelUrl = modelType === 'gold'
    ? '/assets/models/gold_bracelet.glb'
    : '/assets/models/silver_bracelet.glb';

  return (
    <div className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/90 to-white border border-slate-200/90 backdrop-blur-xl shadow-inner">
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.0} />
        <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={3.5} color="#fffaf0" />
        <pointLight position={[-4, -2, -2]} intensity={2.0} color="#0284c7" />
        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.8} adjustCamera={false}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <GLBModel url={modelUrl} isRotating={isRotating} />
            </Float>
          </Stage>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex gap-1.5 p-1 rounded-xl bg-white/90 border border-slate-200/90 backdrop-blur-md shadow-md pointer-events-auto">
          <button
            onClick={() => setModelType('gold')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              modelType === 'gold'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Gold 18K
          </button>
          <button
            onClick={() => setModelType('silver')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              modelType === 'silver'
                ? 'bg-slate-800 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Silver 925
          </button>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono backdrop-blur-md border shadow-md transition-all pointer-events-auto ${
            isRotating
              ? 'bg-sky-50 border-sky-200 text-sky-800'
              : 'bg-white/90 border-slate-200 text-slate-600'
          }`}
        >
          {isRotating ? '● Orbit 3D Active' : '○ Paused'}
        </button>
      </div>

      <div className="absolute bottom-3 left-4 right-4 text-center pointer-events-none">
        <span className="text-[11px] font-mono text-slate-500 bg-white/85 px-3 py-1 rounded-full border border-slate-200/80 shadow-sm">
          Drag to inspect 360° • GLTF Studio Lighting
        </span>
      </div>
    </div>
  );
};
export default JewelryModelViewer;