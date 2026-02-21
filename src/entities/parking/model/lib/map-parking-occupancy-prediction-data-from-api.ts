import { parkingApi, parkingModel } from '@/entities/parking'

export const mapParkingOccupancyPredictionDataFromApi = (
  data: parkingApi.ParkingOccupancyPredictionData
): parkingModel.ParkingOccupancyPredictionData => {
  return {
    occupancyRate: data.occupancy_rate,
    forecastTime: data.forecast_time,
    historicalTime: data.historical_time,
    hours: data.hours,
    predictionTime: data.prediction_time
  }
}
