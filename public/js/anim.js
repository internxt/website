export const parallaxMinMax = (percentage, min, max, forceMax) => {
  const range = max - min;
  if (forceMax) {
    if (range >= 0) {
      return Math.min(max, min + range * percentage);
    }
    return Math.max(max, min + range * percentage);
  }
  return min + range * percentage;
};

export const trigger = (percentage, triggerPoint) => {
  if (triggerPoint) {
    return percentage >= triggerPoint / 100;
  }
  return percentage >= 0.1;
};
