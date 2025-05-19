import { parkingApi, parkingModel } from '@/entities/parking'

export const mapParkingMetaFromApi = (data: parkingApi.ParkingMeta): parkingModel.ParkingMeta => {
  return {
    id: data.id,
    externalId: data.external_id,
    nameRu: data.name_ru,
    nameEn: data.name_en,
    addressStreetRu: data.address_street_ru,
    addressStreetEn: data.address_street_en,
    subwayRu: data.subway_ru,
    subwayEn: data.subway_en,
    latitude: data.latitude,
    longitude: data.longitude,
    totalSpaces: data.total_spaces,
    commonSpaces: data.common_spaces,
    handicappedSpaces: data.handicapped_spaces
  }
}
