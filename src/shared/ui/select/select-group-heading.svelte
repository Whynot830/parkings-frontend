<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: SelectPrimitive.GroupHeadingProps = $props()
</script>

<SelectPrimitive.GroupHeading
  bind:ref
  class={cn('py-1.5 ps-8 pe-2 text-sm font-semibold', className)}
  {...restProps}
/>
