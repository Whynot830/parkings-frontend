import type { HeatMapOptions } from 'leaflet'

export const LEAFLET_HEATMAP_OPTIONS: HeatMapOptions = {
  radius: 17,
  blur: 14,
  maxZoom: 11,
  minOpacity: 0.5,
  gradient: {
    0.3: 'rgb(0, 255, 255)',
    0.5: 'rgb(0, 255, 0)',
    0.7: 'rgb(255, 255, 0)',
    0.8: 'rgb(255, 205, 0)',
    0.9: 'rgb(255, 155, 0)',
    1.0: 'rgb(255, 0, 0)'
  }
}
