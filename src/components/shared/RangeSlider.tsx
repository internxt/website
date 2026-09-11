import { ReactNode, useState } from 'react';

interface PricingRangeSliderProps {
  max: number;
  min?: number;
  color?: string;
  valueLabelFormat: (value: number, index: number) => ReactNode;
  rangeItems: string[];
}

export const RangeSlider = ({
  max,
  min = 0,
  rangeItems,
  valueLabelFormat,
  color,
}: PricingRangeSliderProps): JSX.Element => {
  const [value, setValue] = useState(min);
  const [isInteracting, setIsInteracting] = useState(false);

  // Porcentaje recorrido, para pintar la parte activa de la barra y colocar la etiqueta.
  const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;
  const accent = color ? `text-${color}` : 'text-primary';

  return (
    <div className="flex w-full max-w-[840px] flex-col gap-2">
      <div className="inset-0 flex w-full items-center justify-between">
        {rangeItems.map((item) => (
          <span key={item} className="font-medium text-gray-100">
            {item}
          </span>
        ))}
      </div>
      <div className={`relative ${accent}`}>
        {/* Etiqueta flotante: MUI la mostraba solo al interactuar (valueLabelDisplay="auto"). */}
        <div
          className={`pointer-events-none absolute -top-9 z-10 -translate-x-1/2 rounded bg-current px-2 py-1 text-xs font-medium text-white transition-opacity ${
            isInteracting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: `calc(${progress}% + ${8 - progress * 0.16}px)` }}
        >
          <span className="text-white">{valueLabelFormat(value, 0)}</span>
        </div>
        <input
          type="range"
          aria-label="Storage"
          className="range-slider h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-10 accent-current"
          style={{
            backgroundImage: `linear-gradient(currentColor, currentColor)`,
            backgroundSize: `${progress}% 100%`,
            backgroundRepeat: 'no-repeat',
          }}
          value={value}
          step={1}
          min={min}
          max={max}
          onChange={(e) => setValue(Number(e.target.value))}
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
        />
      </div>
    </div>
  );
};
