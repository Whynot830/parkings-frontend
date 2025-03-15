<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Input, Label, Checkbox } from '$lib/components/ui'

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
    }
  })
</script>

<script>
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Label {...args}>{args.children}</Label>
{/snippet}

<Story name="Default" />

<Story name="With Elements">
  <div class="space-y-6">
    <div class="space-y-2">
      <Label for="input">Label for input</Label>
      <Input id="input" />
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="checkbox" />
      <Label for="checkbox">Label for checkbox</Label>
    </div>
  </div>
</Story>
