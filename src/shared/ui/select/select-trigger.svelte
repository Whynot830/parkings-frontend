<script lang="ts">
  import { ChevronDown } from '@lucide/svelte'
  import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<SelectPrimitive.TriggerProps> = $props()
</script>

<SelectPrimitive.Trigger
  bind:ref
  class={cn(
    'border-input bg-background ring-offset-background focus:ring-ring data-placeholder:text-muted-foreground flex h-10 w-full cursor-pointer items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <ChevronDown class="size-4 opacity-50" />
</SelectPrimitive.Trigger>
