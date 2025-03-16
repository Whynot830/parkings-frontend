<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'
  import { fn } from '@storybook/test'
  import { MousePointerClickIcon } from 'lucide-svelte'

  import { Button, buttonVariants } from '$lib/components/ui'

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
      onclick: fn(),
      variant: 'default',
      children: 'Button'
    },
    parameters: {
      docs: {
        description: {
          component: 'A button or a component that looks like a button'
        }
      }
    }
  })
</script>

<script lang="ts">
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Button {...args}>{args.children}</Button>
{/snippet}

<Story name="Default" args={{ size: 'default' }} />

<Story name="Small" args={{ size: 'sm' }} />

<Story name="Large" args={{ size: 'lg' }} />

<Story
  name="Icon"
  args={{
    size: 'icon'
  }}
>
  <Button size="icon">
    <MousePointerClickIcon />
  </Button>
</Story>

<Story name="Small Icon">
  <Button size="icon-sm">
    <MousePointerClickIcon />
  </Button>
</Story>
