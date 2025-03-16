<script module lang="ts">
  import { defineMeta, setTemplate, type StoryContext } from '@storybook/addon-svelte-csf'

  import {
    TooltipTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    buttonVariants
  } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Tooltip',
    component: Tooltip,

    argTypes: {
      children: {
        control: { type: 'text' }
      },
      open: {
        control: { type: 'boolean' }
      },
      delayDuration: {
        control: { type: 'number' }
      },
      disabled: {
        control: { type: 'boolean' }
      },
      // @ts-expect-error attributes issue
      side: {
        control: { type: 'select' },
        options: ['top', 'right', 'bottom', 'left']
      },
      sideOffset: {
        control: { type: 'number' }
      },
      align: {
        control: { type: 'select' },
        options: ['start', 'center', 'end']
      },
      alignOffset: {
        control: { type: 'number' }
      }
    },
    args: {
      // @ts-expect-error snippet issue
      children: 'Nice!',
      open: false,
      side: 'top',

      align: 'center'
    },
    parameters: {
      docs: {
        description: {
          component:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it'
        }
      }
    }
  })
</script>

<script>
  setTemplate(template)
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
{#snippet template(args: any, _context: StoryContext<typeof Story>)}
  <TooltipProvider>
    <Tooltip delayDuration={args.delayDuration} open={args.open}>
      <TooltipTrigger class={buttonVariants({ variant: 'outline' })}>Hover me!</TooltipTrigger>
      <TooltipContent
        side={args.side}
        sideOffset={args.sideOffset}
        align={args.align}
        alignOffset={args.alignOffset}
      >
        {args.children}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
{/snippet}

<Story name="Default" />
