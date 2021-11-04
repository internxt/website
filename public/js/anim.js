
/* ======================================================================================= */
//
// Parallax effect with min and max values
//
// ⚠️ DEPENDENCIES: <Parallax/> from 'react-parallax' library ⚠️
//
// Params:
//    @percentage: (NUMBER) Given by <Parallax/> parent, is the percentage of the scroll
//    @min: (NUMBER) Minimum integer value (is unit agnostic, see 'Usage' for more information), starting value for the parallax animation
//    @max: (NUMBER) Maximum integer value (is unit agnostic, see 'Usage' for more information), ending value for the parallax animation
//    @forceMax: (BOOLEAN - ❓Optional) Force parallax to stop when reached max value if true, even if percentage > 100%
//
// Returns:
//    (NUMBER) Value between @min and @max proportional to @percentage scrolled
//
// Usage examples:
//   for 'px' unit use `${parallaxMinMax(...)}px`
//   for 'deg' unit use `${parallaxMinMax(...)}deg`
//   ...
//
/* ======================================================================================= */

export const parallaxMinMax = (percentage, min, max, forceMax) => {
  const range = max - min
  if (forceMax) {
    if (range >= 0) {
      return Math.min(max, (min + range * percentage))
    }
    return Math.max(max, (min + range * percentage))
  }
  return min + range * percentage
}






/* ======================================================================================= */
//
// Triggers animation when given percentage is given (10% by default)
//
// ⚠️ DEPENDENCIES: <Parallax/> from 'react-parallax' library ⚠️
//
// Params:
//    @percentage: (NUMBER) Given by <Parallax/> parent, is the percentage of the scroll
//    @triggerPoint: (NUMBER) Between 1-100, percentage point where animation should be triggered
//
// Returns:
//    (BOOLEAN) True if given percentage is given or no percentage is given (10% by default)
//
/* ======================================================================================= */

export const trigger = (percentage, triggerPoint) => {
  console.log(percentage)
  if (triggerPoint) {
    return percentage >= (triggerPoint / 100)
  }
  return percentage >= 0.1
}
