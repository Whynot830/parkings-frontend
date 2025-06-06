import { parkingApi } from '@/entities/parking'

export const useGetParkingOccupancyPrediction = (
  props: parkingApi.UseGetParkingOccupancyPredictionProps
) => {
  return parkingApi.queries.useGetParkingOccupancyPrediction(props)
}
