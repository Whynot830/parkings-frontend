<script module lang="ts">
  import { MousePointerClickIcon } from '@lucide/svelte'
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { fn } from '@storybook/test'

  import type { ComponentProps } from 'svelte'

  import { Button, buttonVariants } from '@/shared/ui'

  const onclickFn = fn().mockName('onclick')

  const { Story } = defineMeta({
    title: 'Components/Button/Sizes',
    component: Button,
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: Object.keys(buttonVariants.variants.variant)
      },
      size: {
        control: { type: 'select' },
        options: Object.keys(buttonVariants.variants.size)
      },
      children: {
        control: { type: 'text' }
      }
    },
    args: {
      onclick: onclickFn,
      variant: 'default',
      // @ts-expect-error snippet issue
      children: 'Button'
    },
    parameters: {
      docs: {
        description: {
          component: 'A button or a component that looks like a button'
        }
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof Button>
</script>

{#snippet template(args: Args)}
  <Button {...args}>{args.children}</Button>
{/snippet}

<Story name="Default" args={{ size: 'default' }} />

<Story name="Small" args={{ size: 'sm' }} />

<Story name="Large" args={{ size: 'lg' }} />

<Story name="Icon" args={{ size: 'icon' }}>
  <MousePointerClickIcon />
</Story>

<Story name="Small Icon" args={{ size: 'icon-sm' }}>
  <MousePointerClickIcon />
</Story>
