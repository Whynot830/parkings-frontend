<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Checkbox, Label } from '$lib/components/ui'

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
    }
  })
</script>

<script>
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Checkbox {...args} />
{/snippet}

<Story name="Default"></Story>

<Story name="Disabled" args={{ disabled: true }}></Story>

<Story name="With Label">
  <div class="flex items-center gap-2">
    <Checkbox id="checkbox" />
    <Label for="checkbox">Label for checkbox</Label>
  </div>
</Story>
