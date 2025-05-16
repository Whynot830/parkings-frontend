<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import {
    TooltipTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    buttonVariants
  } from '@/shared/ui'

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
      disableCloseOnTriggerClick: {
        control: { type: 'boolean' }
      },
      disableHoverableContent: {
        control: { type: 'boolean' }
      },
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
      children: 'Nice!',
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
    },
    render: template
  })
</script>

{#snippet template(args: any)}
  <TooltipProvider>
    <Tooltip
      open={args.open}
      delayDuration={args.delayDuration}
      disabled={args.disabled}
      disableCloseOnTriggerClick={args.disableCloseOnTriggerClick}
      disableHoverableContent={args.disableHoverableContent}
    >
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
