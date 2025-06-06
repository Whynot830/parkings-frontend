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
  useGetParkingMeta: ({ parkingId, enabled }: parkingApi.UseGetParkingMetaProps) => {
    return createQuery<parkingApi.ParkingMeta, ApiError, parkingModel.ParkingMeta>({
      queryKey: ['parking', 'info', parkingId],
      queryFn: () => backendApiClient.get(`/parking_info/${parkingId}`),
      select: parkingModel.mapParkingMetaFromApi,

      enabled
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
  },
  useGetParkingCurrentFreeSpaces: ({ parkingId, enabled }: parkingApi.UseGetParkingMetaProps) => {
    return createQuery<
      parkingApi.ParkingCurrentFreeSpacesData,
      ApiError,
      parkingModel.ParkingCurrentFreeSpacesData
    >({
      queryKey: ['parking', 'occupancy', 'current', parkingId],
      queryFn: () => backendApiClient.get(`/occupancy/current/${parkingId}`),
      select: parkingModel.mapParkingFreeSpacesDataFromApi,
      enabled
    })
  },
  useGetParkingOccupancyPrediction: ({
    parkingId,
    hours,
    enabled
  }: parkingApi.UseGetParkingOccupancyPredictionProps) => {
    return createQuery<
      parkingApi.ParkingOccupancyPredictionData,
      ApiError,
      parkingModel.ParkingOccupancyPredictionData
    >({
      queryKey: ['parking', 'occupancy', 'prediction', parkingId],
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, (Math.random() + 2) * 1000))
        return backendApiClient.get(`/prediction/predict/${parkingId}?hours=${hours}`)
      },
      select: parkingModel.mapParkingOccupancyPredictionDataFromApi,
      enabled
    })
  }
}
