<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetTitle,
    SheetHeader,
    Input,
    Label,
    SheetTrigger,
    buttonVariants,
    SheetClose
  } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Sheet',
    component: Sheet,
    parameters: {
      docs: {
        description: {
          component:
            'Extends the Dialog component to display content that complements the main content of the screen'
        }
      }
    }
  })
</script>

<Story name="Default">
  {#snippet template()}
    <Sheet>
      <SheetTrigger class={buttonVariants({ variant: 'outline' })}>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription
            >Make changes to your profile here. Click save when you're done</SheetDescription
          >
        </SheetHeader>
        <div class="grid flex-1 auto-rows-min gap-6 px-4">
          <div class="grid gap-3">
            <Label for="name" class="text-right">Name</Label>
            <Input id="name" value="Why Not" />
          </div>
          <div class="grid gap-3">
            <Label for="username" class="text-right">Username</Label>
            <Input id="username" value="@whynot" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose class={buttonVariants({ variant: 'outline' })}>Save changes</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  {/snippet}
</Story>
