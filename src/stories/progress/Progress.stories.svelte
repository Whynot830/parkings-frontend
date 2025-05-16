<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

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
    },
    render: template
  })

  type Args = ComponentProps<typeof Progress>
</script>

{#snippet template(args: Args)}
  <Progress {...args} />
{/snippet}

<Story name="Default" />
