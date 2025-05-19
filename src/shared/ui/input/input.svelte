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

  const inputClass = cn(
    'selection:bg-primary dark:bg-input/30 selection:text-primary-foreground border-input ring-offset-background placeholder:text-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-2 text-sm font-medium outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'file:me-3 file:cursor-pointer file:border-0  file:text-sm file:font-medium',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    className
  )
</script>

{#if type === ''}
  <input bind:this={ref} class={inputClass} type="file" bind:files bind:value {...restProps} />
{:else if type === 'password'}
  <div class="relative flex items-center justify-between">
    <input
      bind:this={ref}
      class={cn(inputClass, 'pr-9')}
      type={passwordVisible ? 'text' : 'password'}
      bind:value
      {...restProps}
    />
    <Button
      variant="ghost"
      size="icon-sm"
      class="absolute right-1 size-7 p-0 [&_svg]:size-5"
      onclick={() => (passwordVisible = !passwordVisible)}
    >
      {#if passwordVisible}
        <span class="sr-only">Hide password</span>
        <EyeIcon />
      {:else}
        <span class="sr-only">Show password</span>
        <EyeOffIcon />
      {/if}
    </Button>
  </div>
{:else}
  <input bind:this={ref} class={inputClass} {type} bind:value {...restProps} />
{/if}
