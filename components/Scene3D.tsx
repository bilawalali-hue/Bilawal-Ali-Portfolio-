
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  type: 'globe' | 'cube' | 'particles' | 'skills';
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ type, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Object3D;
  }>();

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    let mesh: THREE.Object3D;

    if (type === 'cube') {
      const geometry = new THREE.IcosahedronGeometry(1.5, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        wireframe: true,
        emissive: 0x1d4ed8,
      });
      mesh = new THREE.Mesh(geometry, material);
    } else if (type === 'particles') {
      const count = 2000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ size: 0.02, color: 0x60a5fa });
      mesh = new THREE.Points(geometry, material);
    } else {
      // Default / Globeish
      const geometry = new THREE.SphereGeometry(1.2, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      mesh = new THREE.Mesh(geometry, material);
    }

    scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    sceneRef.current = { scene, camera, renderer, mesh };

    const animate = () => {
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.002;
      }
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      sceneRef.current.camera.aspect = w / h;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      renderer.dispose();
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [type]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};

export default Scene3D;
