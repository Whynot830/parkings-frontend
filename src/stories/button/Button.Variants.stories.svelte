<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { fn } from '@storybook/test'

  import type { ComponentProps } from 'svelte'

  import { Button, buttonVariants } from '@/shared/ui'

  const onclickFn = fn().mockName('onclick')

  const { Story } = defineMeta({
    title: 'Components/Button/Variants',
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

<Story name="Default" args={{ variant: 'default' }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Destructive" args={{ variant: 'destructive' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="Ghost" args={{ variant: 'ghost' }} />

<Story name="Link" args={{ variant: 'link' }} />

<Story name="With Inner Html">
  <span class="font-extrabold">Button</span>
</Story>
