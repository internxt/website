interface PricingRangeSliderProps {
  max: number;
  min?: number;
  value: number;
  onChange: (value: number) => void;
  rangeItems: string[];
}

export const RangeSlider = ({
  max,
  min = 0,
  rangeItems,
  value,
  onChange,
}: PricingRangeSliderProps): JSX.Element => {
  return (
    <div className="flex w-full max-w-[840px] flex-col gap-2">
      <div className="inset-0 flex w-full items-center justify-between">
        {rangeItems.map((item) => (
          <span key={item} className="font-medium text-gray-100">
            {item}
          </span>
        ))}
      </div>
      <input
        type="range"
        aria-label="Storage"
        className="flex w-full cursor-pointer accent-primary"
        value={value}
        step={1}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};
