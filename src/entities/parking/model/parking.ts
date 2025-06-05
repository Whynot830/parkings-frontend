export interface ParkingMeta {
  id: number
  externalId: number
  nameRu: string
  nameEn: string
  addressStreetRu: string
  addressStreetEn: string
  subwayRu: string
  subwayEn: string
  latitude: number
  longitude: number
  totalSpaces: number
  commonSpaces: number
  handicappedSpaces: number
}

export interface ParkingOccupancyData {
  occupancy: Array<ParkingOccupancy>
  total: number
}

export interface ParkingOccupancy {
  parkingId: number
  occupancy: number
  coordinates: {
    latitude: number
    longitude: number
  }
}

export interface ParkingMetaData {
  [id: ParkingMeta['id']]: ParkingMeta
}
