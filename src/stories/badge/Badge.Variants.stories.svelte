<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

  import { Badge, badgeVariants } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Badge/Variants',
    component: Badge,
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: Object.keys(badgeVariants.variants.variant)
      },
      children: {
        control: { type: 'text' }
      }
    },
    args: {
      variant: 'default',
      // @ts-expect-error snippet issue
      children: 'Bagde'
    },
    parameters: {
      docs: {
        description: {
          component: 'A badge or a component that looks like a badge'
        }
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof Badge>
</script>

{#snippet template(args: Args)}
  <Badge {...args}>{args.children}</Badge>
{/snippet}

<Story name="Default" args={{ variant: 'default' }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Destructive" args={{ variant: 'destructive' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="With Inner Html">
  <span class="font-extrabold">Badge</span>
</Story>
