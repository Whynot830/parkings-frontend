<script lang="ts">
  import { CopyIcon, CheckIcon } from '@lucide/svelte'

  import { Button, Card, CardContent, Badge, Label, Input } from '@/shared/ui'

  let address = $state('Красная площадь, 1')
  let datetime = $state(new Date().toISOString().slice(0, 16))
  let isLoading = $state(false)
  let showResult = $state(false)
  let copiedCurl = $state(false)
  let copiedSdk = $state(false)

  const mockResult = {
    occupancyRate: 73,
    confidence: 75,
    parkingId: 'moscow_park_827',
    modelVersion: 'v2025-10-02-17:45',
    updated: '10.10.2025, 17:43:25',
    coordinates: '55.7558, 37.6173'
  }

  const curlExample = `
  curl -X POST https://api.parkingpredict.com/v1/predict \\\t
       -H "Authorization: Bearer DEMO_KEY" \\
       -H "Content-Type: application/json" \\
       -d '{
          "address": "Красная площадь, 1",
          "datetime": "2025-10-10T14:41"
        }'`

  const sdkExample = `
  import { ParkingPredict } from 'parkingpredict-sdk';

  const client = new ParkingPredict('DEMO_KEY');

  const prediction = await client.predict({
    address: 'Красная площадь, 1',
    datetime: '2025-10-10T14:41'
  });`

  function handlePredict() {
    isLoading = true
    showResult = false

    setTimeout(() => {
      isLoading = false
      showResult = true
    }, 1500)
  }

  function copyCurl() {
    navigator.clipboard.writeText(curlExample)
    copiedCurl = true
    setTimeout(() => (copiedCurl = false), 2000)
  }

  function copySdk() {
    navigator.clipboard.writeText(sdkExample)
    copiedSdk = true
    setTimeout(() => (copiedSdk = false), 2000)
  }
</script>

<section
  class="bg-accent py-20"
  style="background-image: url('pattern-bg1.png'); background-size: cover; background-blend-mode:overlay;"
>
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-12 max-w-3xl text-center">
      <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
        <CardContent class="p-6">
          <h2 class="mb-4 text-3xl font-bold lg:text-5xl">Попробуйте прямо сейчас</h2>
          <p class="text-muted-foreground dark:text-primary text-lg font-medium">
            Введите адрес и время, чтобы получить прогноз вероятности найти парковочное место
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Parameters Card -->
      <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
        <CardContent class="p-6">
          <h3 class="mb-6 text-xl font-semibold">Параметры запроса</h3>

          <div class="space-y-4">
            <div>
              <Label class="text-muted-foreground dark:text-primary mb-2" for="datetime"
                >Адрес</Label
              >
              <Input
                class="bg-card/20"
                id="address"
                type="text"
                bind:value={address}
                placeholder="Введите адрес..."
              />
            </div>

            <div>
              <Label class="text-muted-foreground dark:text-primary mb-2" for="datetime"
                >Дата и время</Label
              >
              <Input
                class="bg-card/20"
                id="datetime"
                type="datetime-local"
                bind:value={datetime}
                placeholder="дд.мм.гггг, чч:мм"
              />
            </div>

            <Button class="w-full" size="lg" onclick={handlePredict} disabled={isLoading}>
              {isLoading ? 'Получение прогноза...' : 'Получить прогноз'}
            </Button>

            <h3 class="mt-6 mb-6 text-xl font-semibold">Результат</h3>

            {#if isLoading}
              <div class="flex h-[400px] items-center justify-center">
                <div class="text-center">
                  <div
                    class="border-primary mx-auto mb-4 size-12 animate-spin rounded-full border-4 border-t-transparent"
                  ></div>
                  <p class="text-muted-foreground dark:text-primary">Анализируем данные...</p>
                </div>
              </div>
            {:else if showResult}
              <div class="space-y-6">
                <!-- Main Result -->
                <div>
                  <div class="text-muted-foreground dark:text-primary mb-2 text-sm">
                    Вероятность
                  </div>
                  <div class="flex items-baseline gap-2">
                    <span class="text-destructive text-5xl font-bold">
                      {mockResult.occupancyRate}%
                    </span>
                    <Badge variant="destructive">Высокая</Badge>
                  </div>
                </div>

                <!-- Confidence -->
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-muted-foreground dark:text-primary text-sm">Уверенность</div>
                    <div class="text-2xl font-semibold">
                      {mockResult.confidence}%
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground dark:text-primary text-sm">Parking ID</div>
                    <div class="font-mono text-sm">
                      {mockResult.parkingId}
                    </div>
                  </div>
                </div>

                <div class="bg-border h-px"></div>

                <!-- Details -->
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground dark:text-primary">Модель:</span>
                    <span class="font-mono">{mockResult.modelVersion}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground dark:text-primary">Обновлено:</span>
                    <span>{mockResult.updated}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground dark:text-primary">Координаты:</span>
                    <span class="font-mono">{mockResult.coordinates}</span>
                  </div>
                </div>

                <div class="bg-muted rounded-md p-4">
                  <p class="text-muted-foreground dark:text-primary text-sm">
                    <strong>Рекомендация:</strong> Вероятность найти место низкая. Рекомендуем рассмотреть
                    альтернативные парковки поблизости или изменить время визита.
                  </p>
                </div>
              </div>
            {:else}
              <div class="flex h-[400px] items-center justify-center text-center">
                <div>
                  <div
                    class="bg-primary/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full"
                  >
                    <svg
                      class="text-primary size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <p class="text-muted-foreground dark:text-primary">
                    Запустите прогноз для просмотра результата
                  </p>
                </div>
              </div>
            {/if}
          </div>

          <!-- cURL Example -->
        </CardContent>
      </Card>

      <!-- Result Card -->
      <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
        <CardContent class="flex flex-1 flex-col justify-around">
          <div>
            <div class="mb-2 flex items-center justify-between">
              <h4 class="text-sm font-semibold">cURL</h4>
              <button
                onclick={copyCurl}
                class="text-muted-foreground dark:text-primary hover:text-foreground transition-colors"
                title="Копировать"
              >
                {#if copiedCurl}
                  <CheckIcon class="size-4" />
                {:else}
                  <CopyIcon class="size-4" />
                {/if}
              </button>
            </div>
            <pre class="bg-card/50 overflow-x-auto rounded-md p-4 text-xs">
              <code class="bg-transparent">{curlExample}</code>
            </pre>
          </div>

          <!-- SDK Example -->
          <div class="mt-6">
            <div class="mb-2 flex items-center justify-between">
              <h4 class="text-sm font-semibold">SDK</h4>
              <button
                onclick={copySdk}
                class="text-muted-foreground dark:text-primary hover:text-foreground transition-colors"
                title="Копировать"
              >
                {#if copiedSdk}
                  <CheckIcon class="size-4" />
                {:else}
                  <CopyIcon class="size-4" />
                {/if}
              </button>
            </div>
            <pre class="bg-card/50 overflow-x-auto rounded-md p-4 text-xs">
              <code class="bg-transparent">{sdkExample}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
