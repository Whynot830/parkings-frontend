<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import { Skeleton } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
      docs: {
        description: {
          component: 'Use to show a placeholder while content is loading'
        }
      }
    }
  })
</script>

<Story name="Default">
  <div class="space-y-4">
    <div class="flex items-center space-x-4">
      <Skeleton class="size-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-[250px]" />
        <Skeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <div class="space-y-2">
      <Skeleton class="h-24 w-full" />
      <div class="grid grid-cols-3 gap-2">
        <Skeleton class="h-4" />
        <Skeleton class="h-4" />
        <Skeleton class="h-4" />
      </div>
    </div>
  </div>
</Story>
