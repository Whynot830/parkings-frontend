<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext
  } from '@storybook/addon-svelte-csf'

  import { Input, Label } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Input',
    component: Input,

    parameters: {
      docs: {
        description: {
          component: 'A form input field or a component that looks like an input field'
        }
      }
    }
  })
</script>

<script>
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Input {...args as any} />
{/snippet}

<Story name="Default" />

<Story name="With placeholder" args={{ placeholder: 'Input placeholder' }} />

<Story name="Disabled" args={{ disabled: true, value: 'Disabled' }} />

<Story name="With Label">
  <div class="flex flex-col gap-2">
    <Label for="input">Label for input</Label>
    <Input id="input" />
  </div>
</Story>

<Story name="Date Input" args={{ type: 'date' }} />

<Story name="Email Input" args={{ type: 'email', placeholder: 'example@mail.com' }} />

<Story name="File Input" args={{ type: 'file' }} />

<Story name="Number Input" args={{ type: 'number', placeholder: 'Number' }} />

<Story name="Password Input" args={{ type: 'password' }} />

<Story name="Time Input" args={{ type: 'time' }} />
