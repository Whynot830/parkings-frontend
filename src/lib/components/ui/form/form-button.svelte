<script lang="ts">
  import { type ButtonProps, Button } from '$lib/components/ui'

  let { ref = $bindable(null), ...restProps }: ButtonProps = $props()
</script>

<Button bind:ref type="submit" {...restProps} />
