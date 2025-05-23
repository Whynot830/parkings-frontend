<script lang="ts">
  import { EyeIcon, EyeOffIcon } from '@lucide/svelte'

  import type { WithElementRef } from 'bits-ui'
  import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements'

  import { cn } from '@/shared/lib'
  import { Button } from '@/shared/ui'

  type InputType = Exclude<HTMLInputTypeAttribute, 'file'>

  type Props = WithElementRef<
    Omit<HTMLInputAttributes, 'type'> &
      ({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
  >

  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    ...restProps
  }: Props = $props()

  let passwordVisible = $state(false)

  const inputClass =
    'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-background file:me-3 file:cursor-pointer file:border-0  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
</script>

{#if type === 'file'}
  <input
    bind:this={ref}
    class={cn(inputClass, className)}
    type="file"
    bind:files
    bind:value
    {...restProps}
  />
{:else if type === 'password'}
  <div class="relative flex items-center justify-between">
    <input
      bind:this={ref}
      class={cn(inputClass, className)}
      type={passwordVisible ? 'text' : 'password'}
      bind:value
      {...restProps}
    />
    <Button
      variant="ghost"
      size="icon-sm"
      class="absolute right-1 h-8 w-8 p-0 [&_svg]:size-5"
      onclick={() => (passwordVisible = !passwordVisible)}
    >
      {#if passwordVisible}
        <span class="sr-only">Hide password</span>
        <EyeIcon />
      {:else}
        <span class="sr-only">Show password</span>
        <EyeOffIcon class="" />
      {/if}
    </Button>
  </div>
{:else}
  <input bind:this={ref} class={cn(inputClass, className)} {type} bind:value {...restProps} />
{/if}
