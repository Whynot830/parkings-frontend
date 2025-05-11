<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

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
    }
  })
</script>

<Story name="Default">
  <div class="flex justify-center">
    <Calendar type="single" />
  </div>
</Story>

<Story name="Multiple">
  <div class="flex justify-center">
    <Calendar type="multiple" />
  </div>
</Story>
