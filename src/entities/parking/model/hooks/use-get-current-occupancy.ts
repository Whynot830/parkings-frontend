import { parkingApi } from '@/entities/parking'

export const useGetCurrentOccupancy = () => {
  return parkingApi.queries.useGetCurrentOccupancy()
}
