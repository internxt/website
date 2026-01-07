import { useEffect, useState } from 'react';
import { Snowflake } from '@phosphor-icons/react';

interface SnowflakeItem {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
  rotation: number;
}

export default function Snowfall({ count = 50 }: { count?: number }) {
  const [snowflakes, setSnowflakes] = useState<SnowflakeItem[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.7,
      size: 16 + Math.random() * 16,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setSnowflakes(flakes);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-sleigh-vertical-snow"
          style={{
            left: `${flake.left}%`,

            top: `-${flake.size + 10}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,

            animationFillMode: 'both',
            transform: `rotate(${flake.rotation}deg)`,
          }}
        >
          <Snowflake size={flake.size} className="text-white" />
        </div>
      ))}
    </div>
  );
}
