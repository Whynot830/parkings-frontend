<script lang="ts">
  import { InfoIcon } from '@lucide/svelte'
  import { latLng } from 'leaflet'
  import { Circle, Map, Popup, TileLayer } from 'sveaflet'
  import { Heat } from 'sveaflet-heat'

  import { LEAFLET_HEATMAP_OPTIONS } from '@/shared/const'
  import { mockParkingOccupancy } from '@/shared/data'
  import { valueToColor } from '@/shared/lib'
  import { theme } from '@/shared/stores'
  import { Card, Badge, CardContent, CardHeader, CardTitle } from '@/shared/ui'

  const parkingsData = mockParkingOccupancy.occupancy.map((parking) => {
    const occupancyRate = parking.occupancy / 100

    return {
      parkingId: parking.parking_id,
      latLng: latLng({
        lat: parking.coordinates.latitude,
        lng: parking.coordinates.longitude,
        alt: occupancyRate
      }),
      occupancy: occupancyRate,
      freeSpaces: parking.free_spaces,
      totalSpaces: parking.total_spaces,
      freeHandicappedSpaces: parking.free_handicapped_spaces,
      handicappedSpaces: parking.handicapped_spaces
    }
  })

  function getOccupancyStatus(occupancy: number): string {
    if (occupancy > 0.7) return 'Высокая загруженность'
    if (occupancy > 0.4) return 'Средняя загруженность'
    return 'Много свободных мест'
  }

  function getOccupancyBadgeVariant(occupancy: number): 'default' | 'secondary' | 'destructive' {
    if (occupancy > 0.7) return 'destructive'
    if (occupancy > 0.4) return 'secondary'
    return 'default'
  }
</script>

<section
  class="bg-accent py-20"
  style="background-image: url('pattern-bg2.png'); background-size: cover; background-blend-mode:overlay;"
>
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-3xl rounded-sm text-center">
      <Card
        class="bg-card/20 mx-auto mb-4 w-fit border-transparent py-4 shadow-lg backdrop-blur-xs"
      >
        <CardContent class="px-4">
          <p class="text-3xl font-bold lg:text-5xl">Интерактивная карта загруженности</p>
        </CardContent>
      </Card>
      <Card
        class="bg-card/20 mx-auto mb-4 w-fit border-transparent py-4 shadow-lg backdrop-blur-xs"
      >
        <CardContent class="px-4">
          <p class="text-muted-foreground dark:text-primary text-lg font-medium">
            Посмотрите актуальную загруженность парковок в режиме реального времени
          </p>
        </CardContent>
      </Card>

      <Card class="bg-card/20 mx-auto w-fit border-transparent py-4 shadow-lg backdrop-blur-xs">
        <CardContent class="px-4">
          <p>
            Всего парковок на карте: <span class="font-semibold">{mockParkingOccupancy.total}</span>
          </p>
        </CardContent>
      </Card>
    </div>

    <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
      <CardHeader>
        <CardTitle class="text-center text-xl">
          Карта загруженности по состоянию на 10/13/2025, 9:05:25 PM
        </CardTitle>
      </CardHeader>
      <CardContent class="h-[384px] sm:h-[480px] md:h-[600px] lg:h-[720px] xl:h-[840px]">
        <div class="flex h-full min-h-0 flex-col">
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

            {#each parkingsData as parking}
              <Circle
                options={{
                  radius: 80,
                  color: valueToColor(parking.latLng.alt || 0),
                  opacity: 0.7,
                  fillOpacity: 0.5
                }}
                latLng={parking.latLng}
              >
                <Popup>
                  <div class="flex min-w-[240px] flex-col gap-3">
                    <div>
                      <h4 class="text-base font-semibold">Парковка #{parking.parkingId}</h4>
                      <div class="text-muted-foreground dark:text-primary">
                        {parking.latLng.lat.toFixed(6)}, {parking.latLng.lng.toFixed(6)}
                      </div>
                    </div>

                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-muted-foreground dark:text-primary">Загруженность:</span>
                        <Badge variant={getOccupancyBadgeVariant(parking.occupancy)}>
                          <span class="font-black">
                            {(parking.occupancy * 100).toFixed(0)}%
                          </span>
                        </Badge>
                      </div>

                      <div class="text-muted-foreground dark:text-primary">
                        {getOccupancyStatus(parking.occupancy)}
                      </div>
                    </div>

                    <div class="bg-border h-px"></div>

                    <div class="space-y-1.5">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground dark:text-primary">Свободно:</span>
                        <span class="font-semibold"
                          >{parking.freeSpaces} / {parking.totalSpaces}</span
                        >
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-muted-foreground dark:text-primary"
                          >Для людей с ограниченными возможностями:</span
                        >
                        <span class="font-semibold whitespace-nowrap">
                          {parking.freeHandicappedSpaces} / {parking.handicappedSpaces}
                        </span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Circle>
            {/each}

            {#if parkingsData.length > 0}
              <Heat
                latLngs={parkingsData.map((parking) => parking.latLng)}
                options={LEAFLET_HEATMAP_OPTIONS}
              />
            {/if}
          </Map>
        </div>
      </CardContent>
    </Card>

    <div class="mt-8 text-center">
      <Card class="bg-card/20 mx-auto w-fit border-transparent backdrop-blur-xs">
        <CardContent
          class="text-muted-foreground dark:text-primary flex items-center gap-2 font-medium"
        >
          <InfoIcon class="me-2" />
          Кликните на точки на карте, чтобы увидеть детальную информацию о парковке
        </CardContent>
      </Card>

      <div class="mt-6 flex flex-wrap justify-center gap-6">
        <Card class="bg-card/20 w-fit border-transparent backdrop-blur-xs">
          <CardContent class="flex items-center gap-2 p-3">
            <div class="size-3 rounded-full bg-green-500"></div>
            <span class="font-medium">Свободно (&lt;40%)</span>
          </CardContent>
        </Card>
        <Card class="bg-card/20 w-fit border-transparent backdrop-blur-xs">
          <CardContent class="flex items-center gap-2 p-3">
            <div class="size-3 rounded-full bg-yellow-500"></div>
            <span class="font-medium">Средняя (40-70%)</span>
          </CardContent>
        </Card>
        <Card class="bg-card/20 w-fit border-transparent backdrop-blur-xs">
          <CardContent class="flex items-center gap-2 p-3">
            <div class="size-3 rounded-full bg-red-500"></div>
            <span class="font-medium">Занято (&gt;70%)</span>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
