<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

  import { Input, Label, Checkbox } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Label',
    component: Label,

    argTypes: {
      children: {
        control: { type: 'text' }
      }
    },
    args: {
      // @ts-expect-error snippet issue
      children: 'Label'
    },
    parameters: {
      docs: {
        description: {
          component: 'An accessible label associated with controls'
        }
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof Label>
</script>

{#snippet template(args: Args)}
  <Label {...args}>{args.children}</Label>
{/snippet}

<Story name="Default" />

<Story name="With Elements">
  {#snippet template()}
    <div class="space-y-6">
      <div class="space-y-2">
        <Label for="input" class="cursor-pointer">Label for input</Label>
        <Input id="input" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="checkbox" />
        <Label for="checkbox" class="cursor-pointer">Label for checkbox</Label>
      </div>
    </div>
  {/snippet}
</Story>
