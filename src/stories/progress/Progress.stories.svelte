<script module lang="ts">
  import { defineMeta, type StoryContext } from '@storybook/addon-svelte-csf'

  import { Progress } from '@/shared/ui'
  import type { ComponentProps } from 'svelte'

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
    },
    render: template
  })

  type Args = ComponentProps<typeof Progress>
</script>

{#snippet template(args: Args)}
  <Progress {...args} />
{/snippet}

<Story name="Default" />
