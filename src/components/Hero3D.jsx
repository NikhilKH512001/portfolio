import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, Sphere, Torus, Icosahedron } from '@react-three/drei';

const FloatingShapes = () => {
    const icoRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (icoRef.current) icoRef.current.rotation.x = t * 0.2;
        if (icoRef.current) icoRef.current.rotation.y = t * 0.3;

        if (torusRef.current) torusRef.current.rotation.x = t * 0.1;
        if (torusRef.current) torusRef.current.rotation.y = t * 0.15;

        if (sphereRef.current) sphereRef.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Icosahedron ref={icoRef} position={[-2, 0, 0]} args={[1, 1]}>
                    <meshStandardMaterial color="#6366f1" wireframe />
                </Icosahedron>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <Torus ref={torusRef} position={[2, 0, 0]} args={[0.8, 0.2, 16, 100]}>
                    <meshStandardMaterial color="#a855f7" />
                </Torus>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <Sphere ref={sphereRef} position={[0, -2, -2]} args={[0.5, 32, 32]}>
                    <meshStandardMaterial color="#ec4899" />
                </Sphere>
            </Float>
        </>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
                <FloatingShapes />
                <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
