import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface RangeSliderProps {
  max: number;
  onRangeSliderValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: number;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ max, onRangeSliderValueChange, inputValue }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '0px' });
  const sliderRef = useRef<HTMLInputElement>(null);

  const updateTooltipPosition = () => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((inputValue - 1) / (max - 1)) * rect.width;
      setTooltipPosition({ left: `${position}px` });
      console.log(position);
    }
  };

  useEffect(() => {
    updateTooltipPosition();
  }, [inputValue, max]);

  return (
    <div className="flex w-full flex-1 flex-col">
      <input
        ref={sliderRef}
        type="range"
        min="1"
        data-tooltip-id="range-slider"
        max={max}
        value={inputValue}
        data-tooltip-place="bottom"
        onChange={onRangeSliderValueChange}
        className="flex w-full cursor-pointer"
      />
      <Tooltip
        variant="dark"
        place="bottom"
        id="range-slider"
        delayShow={400}
        className="z-40 rounded-lg bg-gray-100 drop-shadow-md"
        style={{ top: '-2rem', ...tooltipPosition }}
      >
        Si
      </Tooltip>
    </div>
  );
};
