<script lang="ts">
  import type { WithElementRef, WithoutChildren } from 'bits-ui'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props()
</script>

<div
  bind:this={ref}
  data-slot="skeleton"
  class={cn('bg-accent animate-pulse rounded-md', className)}
  {...restProps}
></div>
