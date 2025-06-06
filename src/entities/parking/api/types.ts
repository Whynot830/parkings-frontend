export type ParkingMeta = {
  id: number
  external_id: number
  name_ru: string
  name_en: string
  address_street_ru: string
  address_street_en: string
  subway_ru: string
  subway_en: string
  latitude: number
  longitude: number
  total_spaces: number
  common_spaces: number
  handicapped_spaces: number
}

export type ParkingOccupancy = {
  parking_id: number
  occupancy: number
  coordinates: {
    latitude: number
    longitude: number
  }
}

export type UseGetParkingMetaProps = {
  parkingId: number
  enabled?: boolean
}

export type UseGetParkingOccupancyPredictionProps = UseGetParkingMetaProps & {
  hours: number
}

export type ParkingOccupancyData = {
  occupancy: Array<ParkingOccupancy>
  total: number
}

export type ParkingCurrentFreeSpacesData = {
  parking_id: number
  free_spaces: number
  coordinates: {
    latitude: number
    longitude: number
  }
}

export type ParkingOccupancyPredictionData = {
  parking_id: number
  occupancy_rate: number
  forecast_time: string
  historical_time: number
  hours: number
  prediction_time: string
}
