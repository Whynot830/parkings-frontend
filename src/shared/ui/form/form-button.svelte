<script lang="ts">
  import { type ButtonProps, Button } from '@/shared/ui'

  let { ref = $bindable(null), ...restProps }: ButtonProps = $props()
</script>

<Button bind:ref type="submit" {...restProps} />
