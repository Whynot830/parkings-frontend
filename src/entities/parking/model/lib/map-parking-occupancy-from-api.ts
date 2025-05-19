import { parkingApi, parkingModel } from '@/entities/parking'

export const mapParkingOccupancyFromApi = (
  parking: parkingApi.ParkingOccupancy
): parkingModel.ParkingOccupancy => ({
  parkingId: parking.parking_id,
  occupancy: parking.occupancy,
  coordinates: {
    latitude: parking.coordinates.latitude,
    longitude: parking.coordinates.longitude
  }
})
