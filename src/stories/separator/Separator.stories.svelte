<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import { Separator } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Separator',
    component: Separator,
    parameters: {
      docs: {
        description: {
          component: 'Visually or semantically separates content'
        }
      }
    }
  })
</script>

<Story name="Default">
  <div class="m-auto max-w-sm rounded-md border p-4">
    <div class="space-y-1">
      <h3>shadcn/svelte</h3>
      <p class="text-muted-foreground">A collection of re-usable components</p>
    </div>
    <Separator class="my-4" />
    <div class="flex justify-around">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</Story>
