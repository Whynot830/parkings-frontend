<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import type { ComponentProps } from 'svelte'

  import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
      docs: {
        description: {
          component: 'An image element with a fallback for representing the user'
        }
      }
    },
    render: template
  })

  type Args = ComponentProps<typeof AvatarImage> & ComponentProps<typeof Avatar>
</script>

{#snippet template(args: Args)}
  <Avatar {...args}>
    <AvatarImage width="2px" height="50px" src="cat-avatar.jpg" alt="cat-avatar" />
    <AvatarFallback>WN</AvatarFallback>
  </Avatar>
{/snippet}

<Story name="With Image" />

<Story
  name="With Image (Delay)"
  args={{
    delayMs: 500
  }}
/>

<Story name="Without Image">
  {#snippet template()}
    <Avatar>
      <AvatarImage width="2px" height="50px" alt="avatar" />
      <AvatarFallback>WN</AvatarFallback>
    </Avatar>
  {/snippet}
</Story>
