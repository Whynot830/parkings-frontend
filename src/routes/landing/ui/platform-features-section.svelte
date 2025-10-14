<script lang="ts">
  import { BracesIcon, CodeXmlIcon, CpuIcon } from '@lucide/svelte'

  import { cn } from '@/shared/lib'
  import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'

  const platformFeatures = [
    {
      title: 'Получение данных',
      description:
        'Агрегация данных из достоверного источника МосТранспорта в режиме реального времени.',
      icon: BracesIcon
    },
    {
      title: 'Использование ML',
      description:
        'ML-модель непрерывно обучается на новых данных, постоянно улучшая точность прогнозов каждый день.',
      icon: CpuIcon
    },
    {
      title: 'Простое API',
      description:
        'Два REST API эндпоинта — получение текущих данных и прогнозов. Интеграция за считанные минуты, удобная документация.',
      icon: CodeXmlIcon
    }
  ]
</script>

<section class="bg-accent/30 py-20">
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold lg:text-5xl">Возможности платформы</h2>
      <p class="text-muted-foreground dark:text-primary text-lg">
        Всё необходимое для интеграции ML-прогнозирования парковок в ваше приложение.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-3">
      {#each platformFeatures as feature}
        <Card class="bg-accent border-transparent shadow-lg transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle class="flex flex-col items-center gap-3 text-center">
              <div class="bg-primary text-accent rounded-md p-3">
                <feature.icon class="size-7" />
              </div>
              <h3 class="p-0 text-2xl font-semibold">{feature.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground dark:text-primary font-medium">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
