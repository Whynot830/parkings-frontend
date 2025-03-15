import { type VariantProps, tv } from 'tailwind-variants'

import type { WithElementRef } from 'bits-ui'
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'

// TODO: svg:not class added

export const buttonVariants = tv({
  base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[18px] [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
      outline:
        'border-input bg-background hover:bg-accent hover:text-accent-foreground border active:bg-accent/80',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
      link: 'text-primary underline-offset-4 hover:underline active:text-primary/80'
    },
    size: {
      default: 'h-9 px-3',
      sm: 'h-8 px-2.5',
      lg: 'h-10 px-4 py-2 text-base [&_svg]:size-5',
      icon: 'h-9 w-9 [&_svg]:size-5',
      'icon-sm': 'h-8 w-8'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']

export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
  WithElementRef<HTMLAnchorAttributes> & {
    variant?: ButtonVariant
    size?: ButtonSize
  }
