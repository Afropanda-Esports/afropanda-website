import { useState, useEffect } from 'react';
import { Gamepad2, Sword, Crosshair, Zap, Dices } from 'lucide-react';

interface PreloaderProps {
  theme?: 'retro' | 'cyber' | 'minimal' | 'arcade';
  loadingTips?: string[];
  showTips?: boolean;
  icon?: 'gamepad' | 'sword' | 'crosshair' | 'zap' | 'dice';
  accentColor?: string;
  backgroundColor?: string;
}

const defaultTips = [
  "Charging up the power crystals...",
  "Spawning extra lives...",
  "Calibrating your gaming experience...",
  "Loading high scores...",
  "Optimizing frame rates...",
  "Preparing your adventure...",
  "Generating random loot...",
  "Summoning player resources..."
];

const GamingPreloader = ({
  theme = 'cyber',
  loadingTips = defaultTips,
  showTips = true,
  icon = 'gamepad',
  accentColor = '#CC5500',
  backgroundColor = '#191825'
}: PreloaderProps) => {
  const [currentTip, setCurrentTip] = useState(loadingTips[0]);

  // Rotate through tips
  useEffect(() => {
    if (!showTips) return;
    
    const interval = setInterval(() => {
      setCurrentTip(prev => {
        const currentIndex = loadingTips.indexOf(prev);
        return loadingTips[(currentIndex + 1) % loadingTips.length];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [loadingTips, showTips]);

  const icons = {
    gamepad: <Gamepad2 />,
    sword: <Sword />,
    crosshair: <Crosshair />,
    zap: <Zap />,
    dice: <Dices />
  };

  const themeStyles = {
    retro: {
      container: 'pixel-borders pixel-corners',
      text: 'font-pixel',
      animation: 'animate-pulse',
    },
    cyber: {
      container: 'backdrop-blur-sm bg-opacity-95',
      text: 'font-mono',
      animation: 'animate-bounce',
    },
    minimal: {
      container: '',
      text: 'font-sans',
      animation: 'animate-pulse',
    },
    arcade: {
      container: 'border-2 border-opacity-50',
      text: 'font-bold',
      animation: 'animate-spin',
    },
  };

  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${themeStyles[theme].container}`}
      style={{ backgroundColor }}
    >
      <div className="relative text-center">
        {/* Main loading indicator */}
        <div className="flex flex-col items-center gap-4">
          {/* Icon */}
          <div 
            className={`${themeStyles[theme].animation} w-12 h-12`}
            style={{ color: accentColor }}
          >
            {icons[icon]}
          </div>

          {/* Loading text and dots */}
          <div className="text-copy flex items-center gap-2">
            <span className={`text-xl ${themeStyles[theme].text}`}>Loading</span>
            <span className="inline-flex gap-1">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="w-1.5 h-1.5 rounded-full animate-bounce"
                  style={{ 
                    backgroundColor: accentColor,
                    animationDelay: `${delay}ms`,
                  }}
                />
              ))}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mt-4">
            <div 
              className="h-full animate-progress-infinite"
              style={{ 
                backgroundColor: accentColor,
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Tips */}
        {showTips && (
          <div className="absolute top-full mt-8 max-w-xs mx-auto px-4">
            <div 
              className={`text-copy text-sm text-center opacity-75 animate-fade-in ${themeStyles[theme].text}`}
            >
              <p className="animate-fade-in-out">{currentTip}</p>
            </div>
          </div>
        )}
      </div>

      {/* Optional: Glitch effect for cyber theme */}
      {theme === 'cyber' && (
        <div 
          className="absolute inset-0 pointer-events-none animate-glitch-overlay"
          style={{ 
            background: `linear-gradient(45deg, ${accentColor}15 25%, transparent 25%)`,
          }}
        />
      )}
    </div>
  );
};

export default GamingPreloader;