<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { type ComponentProps } from 'svelte'

  import { Select, SelectTrigger, SelectContent, SelectItem } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Select',
    component: Select,

    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['single', 'multiple']
      },
      open: {
        control: { type: 'boolean' }
      },
      disabled: {
        control: { type: 'boolean' }
      },
      required: {
        control: { type: 'boolean' }
      },
      allowDeselect: {
        control: { type: 'boolean' }
      }
    },
    args: {
      type: 'single',
      open: false,
      disabled: false,
      required: false,
      allowDeselect: false
    },
    parameters: {
      docs: {
        description: {
          component: 'Enables users to choose from a list of options presented in a dropdown'
        }
      }
    },
    render: template
  })

  const frameworks = [
    { value: 'svelte', label: 'Svelte' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'solid', label: 'Solid' },
    { value: 'other', label: 'Other' }
  ]
  let valueSingle = $state<string>('')
  let valueMultiple = $state<string[]>([])

  const selectedFrameworkSingle = $derived(
    valueSingle
      ? frameworks.find((framework) => framework.value === valueSingle)?.label
      : 'Select a framework'
  )
  const selectedFrameworkMultiple = $derived(
    valueMultiple.length
      ? frameworks
          .filter((framework) => valueMultiple.includes(framework.value))
          .map((framework) => framework.label)
          .join(', ')
      : 'Select your favorite frameworks'
  )

  type Args = ComponentProps<typeof Select>
</script>

{#snippet template(args: Args)}
  <div class="w-[256px]">
    <Select
      {...args as any}
      type={args.type}
      value={args.type === 'single' ? valueSingle : valueMultiple}
    >
      <SelectTrigger class="w-full">
        {args.type === 'single' ? selectedFrameworkSingle : selectedFrameworkMultiple}
      </SelectTrigger>
      <SelectContent>
        {#each frameworks as framework}
          <SelectItem value={framework.value}>{framework.label}</SelectItem>
        {/each}
      </SelectContent>
    </Select>
  </div>
{/snippet}

<Story
  name="Single Select"
  args={{
    type: 'single',
    onValueChange: (v) => {
      valueSingle = v
    }
  }}
/>
<Story
  name="Multiple Select"
  args={{
    type: 'multiple',
    onValueChange: (v) => {
      valueMultiple = v
    }
  }}
/>
