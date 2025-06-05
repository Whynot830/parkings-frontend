export const valueToColor = (value: number): string => {
  // Clamp value between 0 and 1
  const v = Math.max(0, Math.min(1, value))

  // Simple mapping based on value ranges
  if (v < 0.4) {
    // Cyan (0.0) to Green (0.4)
    // Linear blend from cyan to green as v goes from 0 to 0.4
    const ratio = v / 0.4
    const r = Math.round(0 * (1 - ratio) + 0 * ratio)
    const g = Math.round(255)
    const b = Math.round(255 * (1 - ratio))
    return `rgb(${r}, ${g}, ${b})`
  } else if (v < 0.6) {
    // Green (0.4) to Yellow (0.6)
    const ratio = (v - 0.4) / 0.2
    const r = Math.round(0 * (1 - ratio) + 255 * ratio)
    const g = 255
    const b = 0
    return `rgb(${r}, ${g}, ${b})`
  } else if (v < 0.7) {
    // Yellow (0.6) to Yellow-Orange (0.7)
    const ratio = (v - 0.6) / 0.1
    const r = 255
    const g = Math.round(255 * (1 - ratio) + 205 * ratio)
    const b = Math.round(0)
    return `rgb(${r}, ${g}, ${b})`
  } else if (v < 0.8) {
    // Yellow-Orange (0.7) to Orange (0.8)
    const ratio = (v - 0.7) / 0.1
    const r = 255
    const g = Math.round(205 * (1 - ratio) + 155 * ratio)
    const b = 0
    return `rgb(${r}, ${g}, ${b})`
  } else {
    // Orange (0.8) to Red (1.0)
    const ratio = (v - 0.8) / 0.2
    const r = 255
    const g = Math.round(155 * (1 - ratio))
    const b = 0
    return `rgb(${r}, ${g}, ${b})`
  }
}
