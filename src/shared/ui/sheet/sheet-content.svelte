<script lang="ts">
  import { XIcon } from '@lucide/svelte'
  import { Dialog as SheetPrimitive, type WithoutChildrenOrChild } from 'bits-ui'

  import SheetOverlay from './sheet-overlay.svelte'
  import { sheetVariants, type Side } from './variants'

  import type { Snippet } from 'svelte'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    class: className,
    side = 'right',
    portalProps,
    children,
    ...restProps
  }: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & {
    portalProps?: SheetPrimitive.PortalProps
    side?: Side
    children: Snippet
  } = $props()
</script>

<SheetPrimitive.Portal {...portalProps}>
  <SheetOverlay />
  <SheetPrimitive.Content
    bind:ref
    data-slot="sheet-content"
    class={cn(sheetVariants({ side }), 'sm:max-w-2xl', className)}
    {...restProps}
  >
    {@render children?.()}
    <SheetPrimitive.Close
      class="ring-offset-background focus-visible:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none"
    >
      <XIcon class="size-4" />
      <span class="sr-only">Close</span>
    </SheetPrimitive.Close>
  </SheetPrimitive.Content>
</SheetPrimitive.Portal>
