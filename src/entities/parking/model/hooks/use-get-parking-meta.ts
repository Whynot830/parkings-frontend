import { parkingApi } from '@/entities/parking'

export const useGetParkingMeta = (props: parkingApi.UseGetParkingMetaProps) => {
  return parkingApi.queries.useGetParkingMeta(props)
}
