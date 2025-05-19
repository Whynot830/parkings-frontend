<script lang="ts">
  import { MonitorIcon, MoonIcon, SunIcon } from '@lucide/svelte'

  import { cn, withViewTransition } from '@/shared/lib'
  import { theme } from '@/shared/stores'
  import { buttonVariants, Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui'
</script>

<Tooltip delayDuration={200}>
  <TooltipTrigger
    style={{ viewTransitionName: 'theme-toggle' }}
    class={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }))}
    onclick={() => withViewTransition(() => theme.toggle())}
  >
    {#if $theme === 'dark'}
      <MoonIcon />
    {:else if $theme === 'light'}
      <SunIcon />
    {:else}
      <MonitorIcon />
    {/if}
  </TooltipTrigger>
  <TooltipContent>Theme</TooltipContent>
</Tooltip>
