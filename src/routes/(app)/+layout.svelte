<script lang="ts">
  import '@/app/app.css'
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

  import { browser } from '$app/environment'
  import { TooltipProvider } from '@/shared/ui'
  import { Header } from '@/widgets/layout'

  let { children } = $props()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser
      }
    }
  })
</script>

<!-- TODO: Layout component -->
<TooltipProvider>
  <QueryClientProvider client={queryClient}>
    <div class="w-screen-xl flex h-dvh flex-col items-center">
      <Header />
      <div class="relative flex h-full w-full flex-col items-center justify-center">
        {@render children()}
      </div>
    </div>
  </QueryClientProvider>
</TooltipProvider>
