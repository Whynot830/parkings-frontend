import { parkingApi } from '@/entities/parking'

export const useGetParkingCurrentFreeSpaces = (props: parkingApi.UseGetParkingMetaProps) => {
  return parkingApi.queries.useGetParkingCurrentFreeSpaces(props)
}
