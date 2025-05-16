<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

  import { Calendar } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
      docs: {
        description: {
          component:
            'A calendar component that allows users to select dates (Controls are <b>NOT</b> interactive! SB problem)'
        }
      },
      controls: {
        disable: true
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof Calendar>
</script>

{#snippet template(args: Args)}
  <div class="flex justify-center">
    <Calendar {...args} />
  </div>
{/snippet}

<Story name="Default" args={{ type: 'single' }} />

<Story name="Multiple" args={{ type: 'multiple' }} />
