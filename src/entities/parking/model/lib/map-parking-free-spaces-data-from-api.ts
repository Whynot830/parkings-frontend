import { parkingApi, parkingModel } from '@/entities/parking'

export const mapParkingFreeSpacesDataFromApi = (
  data: parkingApi.ParkingCurrentFreeSpacesData
): parkingModel.ParkingCurrentFreeSpacesData => {
  return {
    parkingId: data.parking_id,
    freeSpaces: data.free_spaces,
    coordinates: {
      latitude: data.coordinates.latitude,
      longitude: data.coordinates.longitude
    }
  }
}
