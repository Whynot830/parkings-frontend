<script lang="ts">
  import { badgeVariants, type BadgeVariant } from './variants'

  import type { WithElementRef } from 'bits-ui'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant
  } = $props()
</script>

<svelte:element
  this={href ? 'a' : 'span'}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn(badgeVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
