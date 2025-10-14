<script lang="ts">
  import { MapPin, Brain, Zap, Users, TrendingUp, Clock } from '@lucide/svelte'

  import { cn } from '@/shared/lib'
  import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'

  const features = [
    {
      icon: MapPin,
      title: 'Тепловая карта в реальном времени',
      description:
        'Интерактивная визуализация загруженности всех парковок города. Зеленый - свободно, красный - занято',
      gradient: 'from-primary to-primary/70'
    },
    {
      icon: Brain,
      title: 'AI-прогнозирование на 24 часа',
      description:
        'Нейросети GRU анализируют исторические данные и предсказывают загруженность с точностью 95%',
      gradient: 'from-accent to-accent/70'
    },
    {
      icon: Zap,
      title: 'Молниеносная скорость',
      description: 'Время отклика менее 5 секунд. Поддержка 1000+ одновременных пользователей',
      gradient: 'from-primary to-primary/70'
    },
    {
      icon: Users,
      title: 'Информация о спецместах',
      description:
        'Отображение количества и доступности парковочных мест для людей с ограниченными возможностями',
      gradient: 'from-accent to-accent/70'
    },
    {
      icon: TrendingUp,
      title: 'Детальная аналитика',
      description:
        'Полная информация о каждой парковке: адрес, количество мест, стоимость, координаты',
      gradient: 'from-primary to-primary/70'
    },
    {
      icon: Clock,
      title: 'Мобильная адаптивность',
      description:
        'Работает на любом устройстве. Найдите парковку со смартфона за считанные секунды',
      gradient: 'from-accent to-accent/70'
    }
  ]
</script>

<section
  class="bg-accent py-20"
  style="background-image: url('pattern-bg1.png'); background-size: cover; background-blend-mode:overlay;"
>
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-3xl text-center">
      <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
        <CardContent class="p-6">
          <h2 class="mb-4 text-3xl font-bold lg:text-5xl">Умные функции для умного города</h2>
          <p class="text-muted-foreground dark:text-primary text-lg font-medium">
            Всё необходимое для интеграции ML-прогнозирования парковок в ваше приложение
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <Card
          class={cn(
            'bg-card/20 border-transparent shadow-lg backdrop-blur-xs transition-transform hover:scale-105'
          )}
        >
          <CardHeader>
            <CardTitle class="flex items-center gap-3">
              <div class={cn('flex h-fit w-fit rounded-md p-3', 'bg-primary text-accent')}>
                <svelte:component this={feature.icon} class="size-7" />
              </div>
              <h3 class="p-0 text-xl font-semibold">{feature.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent class="font-medium">{feature.description}</CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
