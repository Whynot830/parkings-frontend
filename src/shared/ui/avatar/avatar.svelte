<script lang="ts">
  import { Avatar as AvatarPrimitive } from 'bits-ui'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AvatarPrimitive.RootProps = $props()
</script>

<AvatarPrimitive.Root
  bind:ref
  data-slot="avatar"
  class={cn('relative flex size-9 shrink-0 overflow-hidden rounded-full', className)}
  {...restProps}
/>
