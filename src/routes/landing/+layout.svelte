<script lang="ts">
  import '@/app/app.css'
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

  import { browser } from '$app/environment'
  import { TooltipProvider } from '@/shared/ui'

  let { children } = $props()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser
      }
    }
  })
</script>

<TooltipProvider>
  <QueryClientProvider client={queryClient}>
    {@render children()}
  </QueryClientProvider>
</TooltipProvider>