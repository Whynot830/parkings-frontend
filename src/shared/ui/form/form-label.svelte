<script lang="ts">
  import * as FormPrimitive from 'formsnap'

  import type { WithoutChild } from 'bits-ui'

  import { Label } from '@/shared/ui'
  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    children,
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LabelProps> = $props()
</script>

<FormPrimitive.Label {...restProps} bind:ref>
  {#snippet child({ props })}
    <Label {...props} class={cn('data-fs-error:text-destructive', className)}>
      {@render children?.()}
    </Label>
  {/snippet}
</FormPrimitive.Label>
