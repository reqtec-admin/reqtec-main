'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleCanvasProps {
  width: number;
  height: number;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup with orthographic camera for better 2D coverage
    const scene = new THREE.Scene();
    const aspectRatio = width / height;
    const frustumSize = 10;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspectRatio / -2,
      frustumSize * aspectRatio / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    // Set renderer size and pixel ratio for sharp rendering
    renderer.setSize(width, height, false); // false to prevent setting canvas style
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    
    // Set canvas style directly for proper scaling
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    
    canvasRef.current.appendChild(renderer.domElement);

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;
      const newAspectRatio = newWidth / newHeight;
      
      // Update camera frustum to maintain coverage
      camera.left = frustumSize * newAspectRatio / -2;
      camera.right = frustumSize * newAspectRatio / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight, false);
    };

    window.addEventListener('resize', handleResize);

    // Particle system - create two particle systems
    const particleCount = 10000;
    const whiteParticles = new THREE.BufferGeometry();
    const tealParticles = new THREE.BufferGeometry();
    
    // Create positions and velocities for both sets
    const whitePositions = new Float32Array(particleCount * 3);
    const tealPositions = new Float32Array(particleCount * 3);
    const whiteVelocities = new Float32Array(particleCount * 3);
    const tealVelocities = new Float32Array(particleCount * 3);

    // Initialize both particle sets
    const initializeParticles = (positions: Float32Array, velocities: Float32Array) => {
      for (let i = 0; i < positions.length; i += 3) {
        const radius = Math.abs(Math.random() + Math.random() + Math.random() - 1.5) * 5;
        const theta = Math.random() * Math.PI * 2;
        
        positions[i] = Math.cos(theta) * radius * 0.5;
        positions[i + 1] = Math.sin(theta) * radius * 0.5;
        positions[i + 2] = 0;

        const angle = Math.atan2(positions[i + 1], positions[i]);
        const speed = 0.0015 * (1 - Math.min(1, radius / 5));
        velocities[i] = Math.cos(angle) * speed;
        velocities[i + 1] = Math.sin(angle) * speed;
        velocities[i + 2] = 0;
      }
    };

    initializeParticles(whitePositions, whiteVelocities);
    initializeParticles(tealPositions, tealVelocities);

    whiteParticles.setAttribute('position', new THREE.BufferAttribute(whitePositions, 3));
    tealParticles.setAttribute('position', new THREE.BufferAttribute(tealPositions, 3));

    const whiteParticleMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.01,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const tealParticleMaterial = new THREE.PointsMaterial({
      color: 0x14B8A6, // Tailwind teal-600
      size: 0.01,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const whiteParticleSystem = new THREE.Points(whiteParticles, whiteParticleMaterial);
    const tealParticleSystem = new THREE.Points(tealParticles, tealParticleMaterial);
    
    scene.add(whiteParticleSystem);
    scene.add(tealParticleSystem);

    camera.position.z = 5;

    // Enhanced mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      mousePosition.current = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop with both particle systems
    const animate = () => {
      requestAnimationFrame(animate);

      // Update both particle systems
      const updateParticles = (positions: Float32Array, velocities: Float32Array) => {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i] * 0.8;
          positions[i + 1] += velocities[i + 1] * 0.8;

          const dx = positions[i];
          const dy = positions[i + 1];
          const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

          if (distanceFromCenter > frustumSize) {
            const angle = Math.random() * Math.PI * 2;
            const newRadius = Math.random() * 1.5;
            positions[i] = Math.cos(angle) * newRadius;
            positions[i + 1] = Math.sin(angle) * newRadius;
            
            const speed = 0.001;
            velocities[i] = Math.cos(angle) * speed;
            velocities[i + 1] = Math.sin(angle) * speed;
          }

          const mouseX = mousePosition.current.x * frustumSize;
          const mouseY = mousePosition.current.y * frustumSize;
          const dxMouse = mouseX - positions[i];
          const dyMouse = mouseY - positions[i + 1];
          const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (mouseDistance < 3) {
            const strength = (1 - mouseDistance / 3) * 0.004;
            positions[i] += dxMouse * strength;
            positions[i + 1] += dyMouse * strength;
          }
        }
      };

      updateParticles(whitePositions, whiteVelocities);
      updateParticles(tealPositions, tealVelocities);

      whiteParticles.attributes.position.needsUpdate = true;
      tealParticles.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div 
      ref={canvasRef} 
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }} 
    />
  );
};

export default ParticleCanvas; 