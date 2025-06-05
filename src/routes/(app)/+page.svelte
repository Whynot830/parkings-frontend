<script lang="ts">
  import { Loader2Icon } from '@lucide/svelte'
  import { latLng } from 'leaflet'
  import { Circle, Map, Popup, TileLayer } from 'sveaflet'
  import { Heat } from 'sveaflet-heat'

  import { parkingModel } from '@/entities/parking'
  import { LEAFLET_HEATMAP_OPTIONS } from '@/shared/const'
  import { valueToColor } from '@/shared/lib'
  import { theme } from '@/shared/stores'
  import {
    Button,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
  } from '@/shared/ui'

  const getOccupancyQuery = parkingModel.useGetCurrentOccupancy()
  const getParkingsMetaQuery = parkingModel.useGetParkingsMeta()

  const {
    data: occupancyData,
    isLoading: isOccupancyDataLoading,
    isError: isOccupancyDataError,
    error: occupancyDataError
  } = $derived($getOccupancyQuery)

  const {
    data: parkingsMetaData,
    isLoading: isParkingsMetaLoading,
    isError: isParkingsMetaError,
    error: parkingsMetaError
  } = $derived($getParkingsMetaQuery)

  let open = $state<boolean>(false)
  let selectedParking = $state<parkingModel.ParkingMeta>()

  const selectParking = (id: number) => {
    selectedParking = parkingsMetaData![id]
    open = true
  }

  let parkingsOccupancy = $derived(
    occupancyData?.occupancy.map((parking) => ({
      parkingId: parking.parkingId,
      latLng: latLng({
        lat: parking.coordinates.latitude,
        lng: parking.coordinates.longitude,
        alt: parking.occupancy / 100
      })
    })) || []
  )
</script>

{#if isOccupancyDataLoading || isParkingsMetaLoading}
  <div class="h-full w-full">
    <div class="flex h-7/8 w-full items-center justify-center">
      <Loader2Icon class="size-[20%] max-w-40 animate-spin" />
    </div>
  </div>
{:else if isOccupancyDataError || isParkingsMetaError}
  <div class="h-full w-full">
    <div class="flex h-7/8 w-full items-center justify-center">
      <p class="text-destructive text-center text-xl font-semibold">
        <span>Something went wrong...</span>
        <br />
        <span
          >Message: {occupancyDataError?.message ?? parkingsMetaError?.message ?? 'Unknown error'} ({occupancyDataError?.status ??
            parkingsMetaError?.status})</span
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
      {#each parkingsOccupancy as { parkingId, latLng }}
        <Circle
          options={{ radius: 50, color: valueToColor(latLng.alt || 0), opacity: 0.5 }}
          {latLng}
        >
          <Popup>
            <div class="flex flex-col gap-2">
              <span class="font-medium">
                Occupancy: {((latLng.alt || 0) * 100).toFixed()}%
              </span>
              <Button variant="secondary" onclick={() => selectParking(parkingId)}>Show info</Button
              >
            </div>
          </Popup>
        </Circle>
      {/each}

      {#if parkingsOccupancy.length > 0}
        <Heat
          latLngs={parkingsOccupancy.map((parking) => parking.latLng)}
          options={LEAFLET_HEATMAP_OPTIONS}
        />
      {/if}
    </Map>

    <Sheet {open} onOpenChange={(value) => (open = value)}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>General info</SheetTitle>
          <SheetDescription>Parking metadata</SheetDescription>
        </SheetHeader>

        <div class="flex flex-col px-4">
          <table
            class="[&_td:nth-child(odd)]:text-muted-foreground w-full border-collapse text-sm
            [&_td]:py-2 [&_td:nth-child(even)]:ps-2 [&_td:nth-child(even)]:font-medium [&_td:nth-child(odd)]:pe-2
            [&_tr]:border-b"
          >
            <tbody>
              <tr class="border-t">
                <td>Name</td>
                <td>
                  <span>
                    {selectedParking?.nameEn}
                    <br />
                    ({selectedParking?.nameRu})
                  </span>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  {selectedParking?.addressStreetEn}
                  <br />
                  ({selectedParking?.addressStreetRu})
                </td>
              </tr>
              <tr>
                <td>Subway</td>
                <td>
                  {selectedParking?.subwayEn} ({selectedParking?.subwayRu})
                </td>
              </tr>
              <tr>
                <td>Coordinates</td>
                <td>
                  {selectedParking?.latitude}&deg; N,
                  {selectedParking?.longitude}&deg; E
                </td>
              </tr>

              <tr>
                <td>Total spaces</td>
                <td>
                  {selectedParking?.totalSpaces}
                </td>
              </tr>
              <tr>
                <td>Common spaces</td>
                <td>
                  {selectedParking?.commonSpaces}
                </td>
              </tr>
              <tr>
                <td>Handicapped spaces</td>
                <td>
                  {selectedParking?.handicappedSpaces}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SheetContent>
    </Sheet>
  </div>
{/if}
