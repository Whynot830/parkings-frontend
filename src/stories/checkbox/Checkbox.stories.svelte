<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

  import { Checkbox, Label } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
      disabled: {
        control: { type: 'boolean' }
      }
    },
    args: {
      disabled: false
    },
    parameters: {
      docs: {
        description: {
          component: 'A control that allows the user to toggle between checked and not checked'
        }
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof Checkbox>
</script>

{#snippet template(args: Args)}
  <Checkbox {...args} />
{/snippet}

<Story name="Default" />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="With Label">
  {#snippet template()}
    <div class="flex items-center gap-2">
      <Checkbox id="checkbox" />
      <Label for="checkbox" class="cursor-pointer">Label for checkbox</Label>
    </div>
  {/snippet}
</Story>
