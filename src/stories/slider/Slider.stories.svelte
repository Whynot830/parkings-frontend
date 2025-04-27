<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Slider } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Slider',
    component: Slider,

    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['single', 'multiple']
      },
      value: {
        control: { type: 'number' }
      },
      min: {
        control: { type: 'number' }
      },
      max: {
        control: { type: 'number' }
      },
      step: {
        control: { type: 'number' }
      },
      orientation: {
        control: { type: 'select' },
        options: ['horizontal', 'vertical']
      }
    },
    args: {
      type: 'single',
      value: 70,
      step: 1
    },
    parameters: {
      docs: {
        description: {
          component: 'An input where the user selects a value from within a given range'
        }
      }
    }
  })
</script>

<script>
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Slider {...args as any} />
{/snippet}

<Story name="Default" />
<Story name="Multiple" args={{ type: 'multiple', value: [30, 70] }} />
<Story name="Vertical" args={{ orientation: 'vertical' }} />
<Story
  name="Vertical Multiple"
  args={{ type: 'multiple', orientation: 'vertical', value: [30, 70] }}
/>
