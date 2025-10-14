<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'

  const useCases = [
    {
      icon: '🚗',
      title: 'Водители',
      description: 'Экономия до 30 минут на поиске парковки каждый день'
    },
    {
      icon: '🏢',
      title: 'Бизнес-центры',
      description: 'Оптимизация использования корпоративных парковок'
    },
    {
      icon: '🏛️',
      title: 'Городские службы',
      description: 'Аналитика для планирования транспортной инфраструктуры'
    },
    {
      icon: '🚚',
      title: 'Службы доставки',
      description: 'Быстрый поиск мест для временной остановки'
    },
    {
      icon: '🏥',
      title: 'Медучреждения',
      description: 'Приоритетный доступ к парковкам для экстренных случаев'
    },
    {
      icon: '🛍️',
      title: 'Торговые центры',
      description: 'Управление потоками посетителей в пиковые часы'
    }
  ]
</script>

<section
  class="bg-accent py-20"
  style="background-image: url('pattern-bg2.png'); background-size: cover; background-blend-mode: overlay;"
>
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-3xl text-center">
      <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
        <CardContent class="p-6">
          <h2 class="mb-4 text-3xl font-bold lg:text-5xl">Кто сможет экономить время с ParkOut</h2>
          <p class="text-muted-foreground dark:text-primary text-lg font-medium">
            Решение для каждого участника городской среды
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each useCases as useCase}
        <Card
          class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs transition-transform hover:scale-105"
        >
          <CardHeader class="justify-center text-center">
            <CardTitle>
              <div class="mb-4 text-6xl">{useCase.icon}</div>
              <h3 class="p-0 text-2xl font-semibold">{useCase.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground dark:text-primary font-medium">
              {useCase.description}
            </p>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
