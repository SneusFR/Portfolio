import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ZoomControlsProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
  minZoom?: number;
  maxZoom?: number;
}

export function ZoomControls({ 
  zoom, 
  onZoomChange, 
  minZoom = 20, 
  maxZoom = 200 
}: ZoomControlsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: number;
    
    const showControls = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    showControls();
    
    return () => clearTimeout(timeout);
  }, [zoom]);

  const handleZoomIn = () => {
    const newZoom = Math.min(zoom + 10, maxZoom);
    onZoomChange(newZoom);
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 10, minZoom);
    onZoomChange(newZoom);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZoom = parseInt(e.target.value);
    onZoomChange(newZoom);
  };

  const zoomPercentage = Math.round((zoom / 80) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.3, 
        y: 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-20"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setTimeout(() => setIsVisible(false), 1000);
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
        <div className="flex items-center space-x-4">
          {/* Bouton Zoom Out */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= minZoom}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            aria-label="Dézoomer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>

          {/* Slider de zoom */}
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={minZoom}
              max={maxZoom}
              value={zoom}
              onChange={handleSliderChange}
              className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((zoom - minZoom) / (maxZoom - minZoom)) * 100}%, #e5e7eb ${((zoom - minZoom) / (maxZoom - minZoom)) * 100}%, #e5e7eb 100%)`
              }}
            />
            <span className="text-sm font-medium text-gray-700 min-w-[3rem] text-center">
              {zoomPercentage}%
            </span>
          </div>

          {/* Bouton Zoom In */}
          <button
            onClick={handleZoomIn}
            disabled={zoom >= maxZoom}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            aria-label="Zoomer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Indicateur de zoom */}
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            Molette pour zoomer • Glissez les lunes
          </span>
        </div>
      </div>
    </motion.div>
  );
}
