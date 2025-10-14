<script lang="ts">
  const steps = [
    {
      num: '01',
      title: 'Регистрация',
      description: 'Получите demo-ключ за 2 минуты'
    },
    {
      num: '02',
      title: 'Интеграция API',
      description: 'Подключите эндпоинты в свой код'
    },
    {
      num: '03',
      title: 'Запрос прогноза',
      description: 'Отправьте координаты и время'
    },
    {
      num: '04',
      title: 'Получение данных',
      description: 'Получите вероятность и уверенность'
    },
    {
      num: '05',
      title: 'Отображение',
      description: 'Покажите результат пользователям'
    }
  ]
</script>

<section class="bg-accent/30 py-20">
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold lg:text-5xl">Как это работает</h2>
      <p class="text-muted-foreground dark:text-primary text-lg">
        От регистрации до первого прогноза за 30 минут
      </p>
    </div>

    <div class="mx-auto max-w-5xl">
      <div class="grid gap-8 md:grid-cols-5">
        {#each steps as step, i}
          <div class="relative flex flex-col items-center md:items-stretch">
            <div
              class="bg-primary text-accent mb-4 flex size-14 items-center justify-center rounded-full text-xl font-bold"
            >
              {step.num}
            </div>
            <h3 class="mb-2 font-semibold">{step.title}</h3>
            <p class="text-muted-foreground dark:text-primary text-sm">
              {step.description}
            </p>

            {#if i < steps.length - 1}
              <div class="absolute top-7 left-14 hidden w-full md:block">
                <div class="bg-accent h-0.5 w-full"></div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
