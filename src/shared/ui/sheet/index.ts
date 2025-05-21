import { Dialog as SheetPrimitive } from 'bits-ui'

import SheetClose from './sheet-close.svelte'
import SheetContent from './sheet-content.svelte'
import SheetDescription from './sheet-description.svelte'
import SheetFooter from './sheet-footer.svelte'
import SheetHeader from './sheet-header.svelte'
import SheetOverlay from './sheet-overlay.svelte'
import SheetTitle from './sheet-title.svelte'
import SheetTrigger from './sheet-trigger.svelte'

const Root = SheetPrimitive.Root
const SheetPortal = SheetPrimitive.Portal

export {
  Root as Sheet,
  SheetClose,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
}

export { type Side, sheetVariants } from './variants'
