import { parkingApi } from '@/entities/parking'

export const useGetParkingsMeta = () => {
  return parkingApi.queries.useGetParkingsMeta()
}
