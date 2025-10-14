<script lang="ts">
  import { ArrowRightIcon } from '@lucide/svelte'

  import { Button, Badge } from '@/shared/ui'
</script>

<section class="bg-accent/30 relative overflow-hidden px-4 py-20">
  <div class="mx-auto max-w-7xl">
    <div class="text-center">
      <Badge variant="secondary" class="mb-6 text-sm font-medium">
        🚀 Революция в поиске парковок
      </Badge>

      <h1 class="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        Найдите парковку за
        <span class="from-primary bg-gradient-to-r to-[#b05cff92] bg-clip-text text-transparent">
          секунды
        </span>
      </h1>

      <p class="text-muted-foreground dark:text-primary mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
        ParkOut использует искусственный интеллект и данные в реальном времени, чтобы помочь вам
        найти идеальное парковочное место по всему городу
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" class="px-8 py-3 text-lg">
          Начать использовать
          <ArrowRightIcon class="ml-2 size-5" />
        </Button>
        <Button variant="outline" size="lg" class="px-8 py-3 text-lg">Посмотреть демо</Button>
      </div>
    </div>
  </div>

  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        class="from-primary/10 to-accent/10 size-[800px] rounded-full bg-gradient-to-r blur-3xl"
      ></div>
    </div>
  </div>
</section>
