<script module lang="ts">
  import {
    defineMeta,
    type Args,
    type StoryContext,
    setTemplate
  } from '@storybook/addon-svelte-csf'

  import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: AvatarImage,
    argTypes: {
      src: {
        control: { type: 'text' }
      }
    },
    args: {
      src: './cat-avatar.jpg'
    },
    parameters: {
      docs: {
        description: {
          component: 'An image element with a fallback for representing the user'
        }
      }
    }
  })
</script>

<script lang="ts">
  setTemplate(template)
</script>

{#snippet template(args: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <Avatar>
    <AvatarImage width="2px" height="50px" src={args.src} alt="cat-avatar" />
    <AvatarFallback>WN</AvatarFallback>
  </Avatar>
{/snippet}

<Story name="With Image" />

<Story name="With Image (Delay)">
  <Avatar delayMs={500}>
    <AvatarImage src="https://avatars.githubusercontent.com/u/23617963?s=48&v=4"></AvatarImage>
    <AvatarFallback>WN</AvatarFallback>
  </Avatar>
</Story>

<Story name="Without Image" args={{ src: undefined }} />
