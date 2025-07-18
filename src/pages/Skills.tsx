import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useState, useRef, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { CentralComputer } from '../components/CentralComputer';
import { OrbitRings } from '../components/OrbitRings';
import { ZoomControls } from '../components/ZoomControls';
import { SkillDialog } from '../components/SkillDialog';
import { SkillsSidebar } from '../components/SkillsSidebar';
import type { Moon } from '../data';
import { moons } from '../data';

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Chargement du portfolio...</p>
      </div>
    </div>
  );
}

function CameraController({ zoom }: { zoom: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    if (camera) {
      camera.zoom = zoom;
      camera.updateProjectionMatrix();
    }
  }, [camera, zoom]);
  
  return null;
}

interface SkillsProps {
  isDarkMode: boolean;
  onDialogStateChange?: (isOpen: boolean) => void;
}

export function Skills({ isDarkMode, onDialogStateChange }: SkillsProps) {
  const [zoom, setZoom] = useState(80);
  const [selectedMoon, setSelectedMoon] = useState<Moon | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMoonSelect = useCallback((moon: Moon) => {
    setSelectedMoon(moon);
    setIsSidebarOpen(true);
    onDialogStateChange?.(true);
  }, [onDialogStateChange]);

  const handleSidebarClose = useCallback((open: boolean) => {
    setIsSidebarOpen(open);
    if (!open) {
      setSelectedMoon(null);
    }
    onDialogStateChange?.(open);
  }, [onDialogStateChange]);

  const handleZoomChange = useCallback((newZoom: number) => {
    setZoom(newZoom);
  }, []);

  // Gérer les clics sur les compétences depuis la sidebar
  const handleSkillClick = useCallback((skillId: string) => {
    const moon = moons.find(m => m.id === skillId);
    if (moon) {
      handleMoonSelect(moon);
    }
  }, [handleMoonSelect]);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY;
    const zoomStep = 5;
    const minZoom = 20;
    const maxZoom = 200;
    
    setZoom(prevZoom => {
      if (delta > 0) {
        // Zoom out
        return Math.max(prevZoom - zoomStep, minZoom);
      } else {
        // Zoom in
        return Math.min(prevZoom + zoomStep, maxZoom);
      }
    });
  }, []);

  return (
    <div className={`w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden ${isSidebarOpen ? 'moon-blurred' : ''}`}>
      {/* Scène 3D */}
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          ref={canvasRef}
          frameloop={isSidebarOpen ? 'demand' : 'always'}
          orthographic
          camera={{ 
            zoom: zoom, 
            position: [0, 0, 100],
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'transparent', maxWidth: '100vw', maxHeight: '100vh' }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false
          }}
          onCreated={({ gl, scene, camera }) => {
            // Ajouter l'événement de molette pour le zoom
            gl.domElement.addEventListener('wheel', handleWheel, { passive: false });
            
            // Mettre à jour le zoom de la caméra
            camera.zoom = zoom;
            camera.updateProjectionMatrix();
            // Limiter le framerate pour réduire la charge GPU
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            
            // Gérer la perte de contexte WebGL
            gl.domElement.addEventListener('webglcontextlost', (e) => {
              e.preventDefault();
              console.warn('WebGL context lost, attempting to restore...');
            });
            
            gl.domElement.addEventListener('webglcontextrestored', () => {
              console.log('WebGL context restored successfully');
            });
            
            // Nettoyage automatique de la mémoire
            const cleanup = () => {
              scene.traverse((child: any) => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                  if (Array.isArray(child.material)) {
                    child.material.forEach((material: any) => material.dispose());
                  } else {
                    child.material.dispose();
                  }
                }
              });
            };
            
            // Nettoyage lors du démontage
            return cleanup;
          }}
        >
          {/* Éclairage ambiant */}
          <ambientLight intensity={0.6} />
          
          {/* Lumière directionnelle principale */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow={false}
          />

          {/* Contrôleur de caméra pour le zoom */}
          <CameraController zoom={zoom} />
          
          {/* Composants principaux */}
          <CentralComputer isSidebarOpen={isSidebarOpen} />
          <OrbitRings onMoonSelect={handleMoonSelect} isSidebarOpen={isSidebarOpen} hoveredSkill={hoveredSkill} />
        </Canvas>
      </Suspense>

      {/* Contrôles de zoom */}
      <ZoomControls 
        zoom={zoom} 
        onZoomChange={handleZoomChange}
        minZoom={20}
        maxZoom={200}
      />

      {/* Skills Sidebar */}
      <SkillsSidebar 
        isDarkMode={isDarkMode}
        onSkillClick={handleSkillClick}
        onSkillHover={setHoveredSkill}
      />

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-moon-blue rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-moon-pink rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-moon-yellow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Glissez</span> les lunes ou <span className="font-medium">cliquez</span> pour explorer
            </p>
          </div>
        </div>
      </div>

      {/* Overlay flou uniquement quand la sidebar est ouverte */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-lg bg-white/5 cursor-pointer"
          onClick={() => handleSidebarClose(false)}
        />
      )}

      {/* Sidebar */}
      {selectedMoon && (
        <SkillDialog
          moon={selectedMoon}
          isOpen={isSidebarOpen}
          onOpenChange={handleSidebarClose}
        >
          <div />
        </SkillDialog>
      )}

      {/* Fallback pour navigateurs sans WebGL */}
      <noscript>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">JavaScript requis</h2>
            <p className="text-gray-600">
              Ce portfolio nécessite JavaScript et WebGL pour fonctionner correctement.
              Veuillez activer JavaScript dans votre navigateur.
            </p>
          </div>
        </div>
      </noscript>
    </div>
  );
}
