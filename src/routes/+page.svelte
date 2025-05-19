<script lang="ts">
  import { Loader2Icon } from '@lucide/svelte'
  import { latLng, type HeatMapOptions } from 'leaflet'
  import { Circle, Map, Popup, TileLayer } from 'sveaflet'
  import { Heat } from 'sveaflet-heat'

  import { parkingModel } from '@/entities/parking'
  import { LEAFLET_HEATMAP_OPTIONS } from '@/shared/const'
  import { valueToColor } from '@/shared/lib'
  import { theme } from '@/shared/stores'

  let { data } = $props()

  const getOccupancyQuery = parkingModel.useGetCurrentOccupancy()
  const getParkingsMetaQuery = parkingModel.useGetParkingsMeta()

  const {
    data: occupancyData,
    isLoading: isOccupancyDataLoading,
    isError: isOccupancyDataError,
    error: occupancyDataError
  } = $derived($getOccupancyQuery)

  // const {
  //   data: parkingsMetaData,
  //   isLoading: isParkingsMetaLoading,
  //   isError: isParkingsMetaError,
  //   error: parkingsMetaError
  // } = $derived($getParkingsMetaQuery)

  let latLngs = $derived(
    occupancyData?.occupancy.map((parking) =>
      latLng({
        lat: parking.coordinates.latitude,
        lng: parking.coordinates.longitude,
        alt: parking.occupancy
      })
    ) || []
  )
</script>

{#if isOccupancyDataLoading}
  <div class="h-full w-full">
    <div class="flex h-7/8 w-full items-center justify-center">
      <Loader2Icon class="size-[20%] max-w-40 animate-spin" />
    </div>
  </div>
{:else if isOccupancyDataError}
  <div class="h-full w-full">
    <div class="flex h-7/8 w-full items-center justify-center">
      <p class="text-destructive text-center text-xl font-semibold">
        <span>Something went wrong...</span>
        <br />
        <span
          >Message: {occupancyDataError.message ?? 'Unknown error'} ({occupancyDataError.status})</span
        >
      </p>
    </div>
  </div>
{:else}
  <div class="flex h-full w-full items-center justify-center">
    <Map options={{ center: [55.751244, 37.618423], zoom: 11, minZoom: 9 }}>
      <TileLayer
        url={$theme === 'dark' ||
        ($theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
        options={{
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>'
        }}
      />
      {#each latLngs as ap}
        <Circle
          options={{ radius: 50, color: valueToColor(ap.alt || 0), opacity: 0.5 }}
          latLng={ap}
        >
          <Popup>
            <div>
              <span class="">
                {ap.alt?.toFixed(2)}
              </span>
            </div>
          </Popup>
        </Circle>
      {/each}

      {#if latLngs.length > 0}
        <Heat {latLngs} options={LEAFLET_HEATMAP_OPTIONS} />
      {/if}
    </Map>
  </div>
{/if}
