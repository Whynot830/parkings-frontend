<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Badge, badgeVariants } from '$lib/components/ui'

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
    }
  })
</script>

<script lang="ts">
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Badge {...args}>{args.children}</Badge>
{/snippet}

<Story name="Default" args={{ variant: 'default' }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Destructive" args={{ variant: 'destructive' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="With Inner Html"><Badge><span class="font-extrabold">Badge</span></Badge></Story>
