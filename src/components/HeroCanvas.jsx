import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

function InteractiveScene({ dark }) {
  const blobRef = useRef();
  const torusRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Normalized mouse coordinates (reduced translation to prevent clipping)
    const targetX = state.pointer.x * 0.7;
    const targetY = state.pointer.y * 0.7;
    
    // Main morphing blob tracking mouse
    if (blobRef.current) {
      blobRef.current.rotation.x = time * 0.15;
      blobRef.current.rotation.y = time * 0.2;
      blobRef.current.position.x += (targetX - blobRef.current.position.x) * 0.05;
      blobRef.current.position.y += (targetY - blobRef.current.position.y) * 0.05;
    }
    
    // Secondary background shape tracking mouse with lag
    if (torusRef.current) {
      torusRef.current.rotation.x = -time * 0.1;
      torusRef.current.rotation.y = -time * 0.15;
      torusRef.current.position.x += (targetX * 0.5 - torusRef.current.position.x) * 0.03;
      torusRef.current.position.y += (targetY * 0.5 - torusRef.current.position.y) * 0.03;
    }

    // Specular point light tracking mouse
    if (lightRef.current) {
      lightRef.current.position.x += (state.pointer.x * 3 - lightRef.current.position.x) * 0.1;
      lightRef.current.position.y += (state.pointer.y * 3 - lightRef.current.position.y) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={dark ? 0.3 : 0.6} />
      <directionalLight position={[10, 10, 5]} intensity={dark ? 1.0 : 1.5} color={dark ? "#a855f7" : "#6366f1"} />
      <pointLight ref={lightRef} position={[2, 2, 4]} intensity={dark ? 2.0 : 2.5} color={dark ? "#06b6d4" : "#ec4899"} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {/* Morphing Liquid Sphere */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={blobRef} scale={1.3} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={dark ? "#a855f7" : "#8b5cf6"}
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Wireframe Torus Knot floating in background */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={torusRef} scale={1.8} position={[0, 0, -1.5]}>
          <torusKnotGeometry args={[1, 0.28, 100, 16]} />
          <meshPhysicalMaterial
            color={dark ? "#06b6d4" : "#ec4899"}
            wireframe
            transparent
            opacity={dark ? 0.2 : 0.25}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroCanvas({ dark }) {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const isSupported = !!(
        window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebGLSupported(isSupported);
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    // Beautiful Glassmorphic CSS/SVG fallback
    return (
      <div className="relative flex h-[350px] w-full items-center justify-center sm:h-[450px] lg:h-[500px]">
        <div className="absolute h-64 w-64 animate-[pulse_6s_infinite] rounded-full bg-gradient-to-tr from-brand-500/30 to-cyber-cyan/30 blur-3xl" />
        <div className="glassmorphism relative flex h-48 w-48 animate-[spin_20s_linear_infinite] items-center justify-center rounded-3xl p-6 border-brand-400/20">
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-brand-500/20 to-cyber-cyan/20 blur-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[550px] xl:h-[600px] select-none">
      {/* Decorative blurred backgrounds under Canvas to match aesthetics */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-600/10 to-cyber-cyan/10 blur-3xl" />
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <InteractiveScene dark={dark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
