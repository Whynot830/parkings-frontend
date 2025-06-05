import { createQuery } from '@tanstack/svelte-query'

import { parkingApi, parkingModel } from '@/entities/parking'
import { ApiError, backendApiClient } from '@/shared/api'

export const queries = {
  useGetParkingsMeta: () => {
    return createQuery<parkingApi.ParkingMeta[], ApiError, parkingModel.ParkingMetaData>({
      queryKey: ['parking', 'info', 'all'],
      queryFn: () => backendApiClient.get('/parking_info/all'),
      select: (data) => {
        return data.reduce<parkingModel.ParkingMetaData>((acc, item) => {
          acc[item.id] = parkingModel.mapParkingMetaFromApi(item)
          return acc
        }, {})
      }
    })
  },
  useGetParkingMeta: ({ parkingId }: parkingApi.UseGetParkingMetaProps) => {
    return createQuery<parkingApi.ParkingMeta, ApiError, parkingModel.ParkingMeta>({
      queryKey: ['parking', 'info', parkingId],
      queryFn: () => backendApiClient.get(`/parking_info/${parkingId}`),
      select: (data) => {
        const res = parkingModel.mapParkingMetaFromApi(data)
        console.log(res)
        return res
      }
    })
  },
  useGetCurrentOccupancy: () => {
    return createQuery<
      parkingApi.ParkingOccupancyData,
      ApiError,
      parkingModel.ParkingOccupancyData
    >({
      queryKey: ['parking', 'occupancy', 'current'],
      queryFn: () => backendApiClient.get('/occupancy/current'),
      select: (data) => ({
        occupancy: data.occupancy.map(parkingModel.mapParkingOccupancyFromApi),
        total: data.total
      })
    })
  }
}
