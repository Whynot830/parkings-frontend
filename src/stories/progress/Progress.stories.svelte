<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Progress } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Progress',
    component: Progress,

    argTypes: {
      value: {
        control: { type: 'number' }
      }
    },
    args: {
      value: 50
    },
    parameters: {
      docs: {
        description: {
          component:
            'An indicator showing the completion progress of a task, typically displayed as a progress bar'
        }
      }
    }
  })
</script>

<script>
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Progress {...args} />
{/snippet}

<Story name="Default" />
