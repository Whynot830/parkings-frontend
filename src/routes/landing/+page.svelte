<script lang="ts">
  import { MapPinIcon, UsersIcon, ClockIcon, TrendingUpIcon, CheckIcon } from '@lucide/svelte'
  import { latLng } from 'leaflet'
  import { Circle, Map, Popup, TileLayer } from 'sveaflet'
  import { Heat } from 'sveaflet-heat'

  import { LEAFLET_HEATMAP_OPTIONS } from '@/shared/const'
  import { valueToColor } from '@/shared/lib'
  import { theme } from '@/shared/stores'
  import { Button, Card, CardContent } from '@/shared/ui'

  // Mock data for the interactive map
  const mockParkings = [
    { id: 1, lat: 55.7558, lng: 37.6176, occupancy: 0.2, name: 'ТЦ Охотный Ряд', spaces: 150 },
    { id: 2, lat: 55.7539, lng: 37.6208, occupancy: 0.8, name: 'Красная площадь', spaces: 80 },
    { id: 3, lat: 55.7522, lng: 37.6156, occupancy: 0.6, name: 'ГУМ', spaces: 200 },
    { id: 4, lat: 55.7601, lng: 37.6186, occupancy: 0.3, name: 'Большой театр', spaces: 120 },
    { id: 5, lat: 55.7485, lng: 37.6184, occupancy: 0.9, name: 'Зарядье', spaces: 90 },
    { id: 6, lat: 55.7558, lng: 37.6094, occupancy: 0.4, name: 'Александровский сад', spaces: 110 },
    { id: 7, lat: 55.7617, lng: 37.6283, occupancy: 0.7, name: 'Лубянка', spaces: 160 },
    { id: 8, lat: 55.7447, lng: 37.6077, occupancy: 0.5, name: 'Кремлевская набережная', spaces: 140 }
  ]

  const parkingsOccupancy = mockParkings.map((parking) => ({
    parkingId: parking.id,
    latLng: latLng({
      lat: parking.lat,
      lng: parking.lng,
      alt: parking.occupancy
    }),
    ...parking
  }))

  const features = [
    {
      icon: MapPinIcon,
      title: 'Точная геолокация',
      description: 'Находите свободные места рядом с вашим местоположением в режиме реального времени'
    },
    {
      icon: ClockIcon,
      title: 'Экономия времени',
      description: 'Сокращаем время поиска парковки до 70% благодаря умным алгоритмам'
    },
    {
      icon: TrendingUpIcon,
      title: 'Аналитика загруженности',
      description: 'Прогнозируем загруженность парковок на основе исторических данных'
    },
    {
      icon: UsersIcon,
      title: 'Сообщество водителей',
      description: 'Делитесь информацией о парковках с другими участниками сообщества'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Активных пользователей' },
    { value: '1200+', label: 'Парковочных зон' },
    { value: '70%', label: 'Экономия времени' },
    { value: '4.8★', label: 'Рейтинг в App Store' }
  ]
</script>

<svelte:head>
  <title>ParkOut - Умный поиск парковок в Москве</title>
  <meta name="description" content="Находите свободные парковочные места в режиме реального времени. Экономьте время и деньги с ParkOut." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <!-- Navigation -->
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <MapPinIcon class="h-8 w-8 text-blue-600" />
          <span class="text-2xl font-bold text-gray-900 dark:text-white">ParkOut</span>
        </div>
        <div class="flex items-center space-x-4">
          <Button variant="ghost" href="#features">Возможности</Button>
          <Button variant="ghost" href="#demo">Демо</Button>
          <Button href="/app">Открыть приложение</Button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative overflow-hidden py-20 sm:py-32">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Найдите парковку
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            за секунды
          </span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Революционное приложение для поиска свободных парковочных мест в режиме реального времени. 
          Экономьте время, деньги и нервы с ParkOut.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" href="/app" class="text-lg px-8 py-4">
            Попробовать бесплатно
          </Button>
          <Button variant="outline" size="lg" href="#demo" class="text-lg px-8 py-4">
            Посмотреть демо
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-16 bg-white/50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div class="text-gray-600 dark:text-gray-300">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Почему выбирают ParkOut?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Мы используем передовые технологии для решения проблемы поиска парковки в городе
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as feature}
          <Card class="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent class="space-y-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                <svelte:component this={feature.icon} class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p class="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>
  </section>

  <!-- Interactive Map Demo -->
  <section id="demo" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Интерактивная карта парковок
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Попробуйте нашу карту в действии. Кликните на точки, чтобы увидеть детальную информацию о парковках
        </p>
      </div>

      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        <div class="h-96 sm:h-[500px] relative">
          <Map options={{ center: [55.7558, 37.6176], zoom: 14, minZoom: 12 }}>
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
            
            {#each parkingsOccupancy as { parkingId, latLng, name, spaces, occupancy }}
              <Circle
                options={{ 
                  radius: 80, 
                  color: valueToColor(latLng.alt || 0), 
                  opacity: 0.8,
                  fillOpacity: 0.6
                }}
                {latLng}
              >
                <Popup>
                  <div class="p-2 min-w-48">
                    <h4 class="font-semibold text-gray-900 mb-2">{name}</h4>
                    <div class="space-y-1 text-sm text-gray-600">
                      <div class="flex justify-between">
                        <span>Загруженность:</span>
                        <span class="font-medium" style="color: {valueToColor(occupancy)}">
                          {(occupancy * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div class="flex justify-between">
                        <span>Всего мест:</span>
                        <span class="font-medium">{spaces}</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Свободно:</span>
                        <span class="font-medium text-green-600">
                          {Math.round(spaces * (1 - occupancy))}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" class="w-full mt-3">
                      Построить маршрут
                    </Button>
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
        </div>
        
        <!-- Map Legend -->
        <div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-center space-x-8 text-sm">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded-full bg-green-500"></div>
              <span class="text-gray-600 dark:text-gray-300">Свободно (0-40%)</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span class="text-gray-600 dark:text-gray-300">Занято (40-70%)</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded-full bg-red-500"></div>
              <span class="text-gray-600 dark:text-gray-300">Переполнено (70%+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Разработка и тестирование веб-приложений
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Наша команда специализируется на создании современных веб-приложений 
            с использованием передовых технологий и лучших практик разработки.
          </p>
          
          <div class="space-y-4">
            {#each ['Современный стек технологий', 'Адаптивный дизайн', 'Высокая производительность', 'Безопасность данных'] as benefit}
              <div class="flex items-center space-x-3">
                <CheckIcon class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">Технологический стек</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="font-semibold mb-2">Frontend</div>
                <ul class="space-y-1 opacity-90">
                  <li>• SvelteKit</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Leaflet Maps</li>
                </ul>
              </div>
              <div>
                <div class="font-semibold mb-2">Backend</div>
                <ul class="space-y-1 opacity-90">
                  <li>• Node.js</li>
                  <li>• PostgreSQL</li>
                  <li>• Docker</li>
                  <li>• Nginx</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
        Готовы начать экономить время?
      </h2>
      <p class="text-xl text-blue-100 mb-8">
        Присоединяйтесь к тысячам водителей, которые уже используют ParkOut для поиска парковки
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" href="/app" class="text-lg px-8 py-4">
          Начать использовать
        </Button>
        <Button size="lg" variant="outline" class="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
          Связаться с нами
        </Button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <MapPinIcon class="h-8 w-8 text-blue-400" />
            <span class="text-2xl font-bold">ParkOut</span>
          </div>
          <p class="text-gray-400 mb-4">
            Умное решение для поиска парковочных мест в городе. 
            Экономьте время и деньги с нашим приложением.
          </p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Продукт</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#features" class="hover:text-white transition-colors">Возможности</a></li>
            <li><a href="#demo" class="hover:text-white transition-colors">Демо</a></li>
            <li><a href="/app" class="hover:text-white transition-colors">Приложение</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Контакты</h3>
          <ul class="space-y-2 text-gray-400">
            <li>info@parkout.ru</li>
            <li>+7 (495) 123-45-67</li>
            <li>Москва, Россия</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 ParkOut. Все права защищены.</p>
      </div>
    </div>
  </footer>
</div>