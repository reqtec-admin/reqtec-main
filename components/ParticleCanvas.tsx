'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Helper function to detect touch device - safe for SSR
const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0));
};

// Define offset constants for centering on the Q
const OFFSET_X = -0.3; // Negative moves left
const OFFSET_Y = 0.15;    // Adjust if needed for vertical position

interface ParticleCanvasProps {
  width: number;
  height: number;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const scrollPosition = useRef(0);
  const lastTouchPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup with orthographic camera for better 2D coverage
    const scene = new THREE.Scene();
    const aspectRatio = width / height;
    const frustumSize = 10;
    
    // Adjust camera frustum to maintain circle shape regardless of aspect ratio
    const frustumWidth = frustumSize;
    const frustumHeight = frustumSize;
    
    const camera = new THREE.OrthographicCamera(
      -frustumWidth / 2 + OFFSET_X,
      frustumWidth / 2 + OFFSET_X,
      frustumHeight / 2 + OFFSET_Y,
      -frustumHeight / 2 + OFFSET_Y,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    // Set renderer size with proper pixel ratio
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Ensure canvas fills viewport properly
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
      
      // Keep the view consistent by adjusting for aspect ratio
      if (newAspectRatio > 1) {
        camera.left = -frustumWidth * newAspectRatio / 2;
        camera.right = frustumWidth * newAspectRatio / 2;
        camera.top = frustumHeight / 2;
        camera.bottom = -frustumHeight / 2;
      } else {
        camera.left = -frustumWidth / 2;
        camera.right = frustumWidth / 2;
        camera.top = frustumHeight / (2 * newAspectRatio);
        camera.bottom = -frustumHeight / (2 * newAspectRatio);
      }
      
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call immediately to set initial size

    // Particle system - create two particle systems
    const particleCount = 10000;
    const whiteParticles = new THREE.BufferGeometry();
    const tealParticles = new THREE.BufferGeometry();
    
    // Create positions and velocities for both sets
    const whitePositions = new Float32Array(particleCount * 3);
    const tealPositions = new Float32Array(particleCount * 3);
    const whiteVelocities = new Float32Array(particleCount * 3);
    const tealVelocities = new Float32Array(particleCount * 3);

    // Initialize both particle sets with offset
    const initializeParticles = (positions: Float32Array, velocities: Float32Array) => {
      for (let i = 0; i < positions.length; i += 3) {
        const radius = Math.abs(Math.random() + Math.random() + Math.random() - 1.5) * 5;
        const theta = Math.random() * Math.PI * 2;
        
        // Add offset to initial positions
        positions[i] = Math.cos(theta) * radius * 0.5 + OFFSET_X;
        positions[i + 1] = Math.sin(theta) * radius * 0.5 + OFFSET_Y;
        positions[i + 2] = 0;

        const angle = Math.atan2(positions[i + 1] - OFFSET_Y, positions[i] - OFFSET_X);
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

    // Combined mouse/touch/scroll handler
    const updateInteractionPosition = (clientX: number, clientY: number) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      mousePosition.current = {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      updateInteractionPosition(event.clientX, event.clientY);
    };

    // Touch handlers
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      lastTouchPosition.current = { x: touch.clientX, y: touch.clientY };
      updateInteractionPosition(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      lastTouchPosition.current = { x: touch.clientX, y: touch.clientY };
      updateInteractionPosition(touch.clientX, touch.clientY);
    };

    // Scroll handler
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      scrollPosition.current = newScrollY;
      
      // Use last known touch position or center of screen for scroll interaction
      const interactionX = lastTouchPosition.current.x || window.innerWidth / 2;
      const interactionY = lastTouchPosition.current.y + (newScrollY - scrollPosition.current);
      updateInteractionPosition(interactionX, interactionY);
    };

    // Add all event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', handleScroll);

    // Animation loop with enhanced interaction
    const animate = () => {
      requestAnimationFrame(animate);

      // Update both particle systems
      const updateParticles = (positions: Float32Array, velocities: Float32Array) => {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i] * 0.8;
          positions[i + 1] += velocities[i + 1] * 0.8;

          // Calculate distance from offset center
          const dx = positions[i] - OFFSET_X;
          const dy = positions[i + 1] - OFFSET_Y;
          const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

          if (distanceFromCenter > frustumSize / 2) {
            const angle = Math.random() * Math.PI * 2;
            const newRadius = Math.random() * 1.5;
            const scaleX = aspectRatio > 1 ? 1 : aspectRatio;
            const scaleY = aspectRatio > 1 ? 1 / aspectRatio : 1;
            
            // Reset position with offset
            positions[i] = Math.cos(angle) * newRadius * scaleX + OFFSET_X;
            positions[i + 1] = Math.sin(angle) * newRadius * scaleY + OFFSET_Y;
            
            const speed = 0.0015;
            velocities[i] = Math.cos(angle) * speed;
            velocities[i + 1] = Math.sin(angle) * speed;
          }

          // Mouse interaction relative to offset center
          const mouseX = mousePosition.current.x * frustumSize + OFFSET_X;
          const mouseY = mousePosition.current.y * frustumSize + OFFSET_Y;
          const dxMouse = mouseX - positions[i];
          const dyMouse = mouseY - positions[i + 1];
          const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (mouseDistance < 3) {
            const strength = (1 - mouseDistance / 3) * (isTouchDevice() ? 0.006 : 0.004);
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
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
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
        overflow: 'hidden',
        touchAction: 'none' // Prevent default touch actions
      }} 
    />
  );
};

export default ParticleCanvas; 