<script lang="ts">
  import { CopyIcon, CheckIcon } from '@lucide/svelte'

  import { Card, CardContent, Badge } from '@/shared/ui'

  let activeTab = $state<'curl' | 'javascript' | 'python'>('curl')
  let copiedRequest = $state(false)
  let copiedResponse = $state(false)

  const requestExamples = {
    curl: `curl -X POST https://api.parkingpredict.com/v1/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "parking_id": "moscow_park_123",
    "coords": [55.7558, 37.6173],
    "datetime": "2025-10-10T18:00:00+03:00"
  }'`,
    javascript: `const response = await fetch('https://api.parkingpredict.com/v1/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    parking_id: 'moscow_park_123',
    coords: [55.7558, 37.6173],
    datetime: '2025-10-10T18:00:00+03:00'
  })
});

const data = await response.json();`,
    python: `import requests

response = requests.post(
    'https://api.parkingpredict.com/v1/predict',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'parking_id': 'moscow_park_123',
        'coords': [55.7558, 37.6173],
        'datetime': '2025-10-10T18:00:00+03:00'
    }
)

data = response.json()`
  }

  const responseExample = `{
  "parking_id": "moscow_park_123",
  "coords": [55.7558, 37.6173],
  "datetime": "2025-10-10T18:00:00+03:00",
  "probability": 0.27,
  "confidence": 0.83,
  "model_version": "v2025-10-09-17:45",
  "updated_at": "2025-10-10T17:56:00+03:00"
}`

  function copyRequest() {
    navigator.clipboard.writeText(requestExamples[activeTab])
    copiedRequest = true
    setTimeout(() => (copiedRequest = false), 2000)
  }

  function copyResponse() {
    navigator.clipboard.writeText(responseExample)
    copiedResponse = true
    setTimeout(() => (copiedResponse = false), 2000)
  }
</script>

<section class="bg-accent/30 px-4 py-20">
  <div class="mx-auto max-w-7xl">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold sm:text-4xl">API Документация</h2>
      <p class="text-muted-foreground dark:text-primary text-lg">
        Простые REST endpoints для получения прогнозов парковочных мест
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Request Card -->
      <Card>
        <CardContent class="p-6">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="text-xl font-semibold">Запрос</h3>
            <button
              onclick={copyRequest}
              class="text-muted-foreground dark:text-primary hover:text-foreground transition-colors"
              title="Копировать"
            >
              {#if copiedRequest}
                <CheckIcon class="size-4" />
              {:else}
                <CopyIcon class="size-4" />
              {/if}
            </button>
          </div>

          <!-- Tabs -->
          <div class="mb-4 flex gap-2 border-b">
            <button
              class="px-4 py-2 text-sm font-medium transition-colors {activeTab === 'curl'
                ? 'border-primary text-primary border-b-2'
                : 'text-muted-foreground dark:text-primary hover:text-foreground'}"
              onclick={() => (activeTab = 'curl')}
            >
              cURL
            </button>
            <button
              class="px-4 py-2 text-sm font-medium transition-colors {activeTab === 'javascript'
                ? 'border-primary text-primary border-b-2'
                : 'text-muted-foreground dark:text-primary hover:text-foreground'}"
              onclick={() => (activeTab = 'javascript')}
            >
              JavaScript
            </button>
            <button
              class="px-4 py-2 text-sm font-medium transition-colors {activeTab === 'python'
                ? 'border-primary text-primary border-b-2'
                : 'text-muted-foreground dark:text-primary hover:text-foreground'}"
              onclick={() => (activeTab = 'python')}
            >
              Python
            </button>
          </div>

          <pre class="bg-muted overflow-x-auto rounded-md p-4 text-xs"><code
              >{requestExamples[activeTab]}</code
            ></pre>

          <div class="mt-6 space-y-4">
            <div>
              <div class="mb-1 text-sm font-semibold">Endpoint:</div>
              <code class="bg-muted rounded px-2 py-1 font-mono text-sm">POST /v1/predict</code>
            </div>

            <div>
              <div class="mb-1 text-sm font-semibold">Auth:</div>
              <code class="bg-muted rounded px-2 py-1 font-mono text-sm">Bearer YOUR_API_KEY</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Response Card -->
      <Card>
        <CardContent class="p-6">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="text-xl font-semibold">Ответ</h3>
            <button
              onclick={copyResponse}
              class="text-muted-foreground dark:text-primary hover:text-foreground transition-colors"
              title="Копировать"
            >
              {#if copiedResponse}
                <CheckIcon class="size-4" />
              {:else}
                <CopyIcon class="size-4" />
              {/if}
            </button>
          </div>

          <pre class="bg-muted overflow-x-auto rounded-md p-4 text-xs"><code>{responseExample}</code
            ></pre>

          <div class="mt-6 space-y-3">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-muted-foreground dark:text-primary">probability:</div>
                <div class="font-medium">Вероятность 0-1</div>
              </div>
              <div>
                <div class="text-muted-foreground dark:text-primary">confidence:</div>
                <div class="font-medium">Уверенность модели</div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-muted-foreground dark:text-primary">model_version:</div>
                <div class="font-medium">Версия ML-модели</div>
              </div>
              <div>
                <div class="text-muted-foreground dark:text-primary">updated_at:</div>
                <div class="font-medium">Время обновления</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
