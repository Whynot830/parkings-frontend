<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import { ResizablePaneGroup, ResizablePane, ResizableHandle } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Resizable',
    component: ResizablePaneGroup,

    parameters: {
      docs: {
        description: {
          component: 'Accessible resizable panel groups and layouts with keyboard support'
        }
      }
    },
    render: template
  })
</script>

{#snippet template()}
  <div class="flex h-96 w-full justify-center">
    <ResizablePaneGroup direction="horizontal" class="max-w-xl rounded-lg border">
      <ResizablePane defaultSize={50}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ResizablePane>
      <ResizableHandle />
      <ResizablePane defaultSize={50}>
        <ResizablePaneGroup direction="vertical">
          <ResizablePane defaultSize={25}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </ResizablePane>
          <ResizableHandle />
          <ResizablePane defaultSize={75}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Three</span>
            </div>
          </ResizablePane>
        </ResizablePaneGroup>
      </ResizablePane>
    </ResizablePaneGroup>
  </div>
{/snippet}

<Story name="Default" />
