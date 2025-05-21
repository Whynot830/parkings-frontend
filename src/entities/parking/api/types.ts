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
}

export type ParkingOccupancyData = {
  occupancy: Array<ParkingOccupancy>
  total: number
}
