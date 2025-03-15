<script>
  import { Calendar as CalendarPrimitive } from 'bits-ui'
  import { ChevronLeft, ChevronRight } from 'lucide-svelte'

  import { Calendar, Button } from '$lib/components/ui'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex flex-col gap-52">
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Button variant="default">123</Button>
  <Calendar type="single"></Calendar>

  <CalendarPrimitive.Root
    class="border-dark-10 bg-background-alt shadow-card mt-6 rounded-[15px] border p-[22px]"
    weekdayFormat="short"
    fixedWeeks={true}
    type="single"
  >
    {#snippet children({ months, weekdays })}
      <CalendarPrimitive.Header class="flex items-center justify-between">
        <CalendarPrimitive.PrevButton
          class="rounded-9px bg-background-alt hover:bg-muted inline-flex size-10 items-center justify-center active:scale-98 active:transition-all"
        >
          <ChevronLeft class="size-6" />
        </CalendarPrimitive.PrevButton>
        <CalendarPrimitive.Heading class="text-[15px] font-medium" />
        <CalendarPrimitive.NextButton
          class="rounded-9px bg-background-alt hover:bg-muted inline-flex size-10 items-center justify-center active:scale-98 active:transition-all"
        >
          <ChevronRight class="size-6" />
        </CalendarPrimitive.NextButton>
      </CalendarPrimitive.Header>
      <div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        {#each months as month, i (i)}
          <CalendarPrimitive.Grid class="w-full border-collapse space-y-1 select-none">
            <CalendarPrimitive.GridHead>
              <CalendarPrimitive.GridRow class="mb-1 flex w-full justify-between">
                {#each weekdays as day}
                  <CalendarPrimitive.HeadCell
                    class="text-muted-foreground w-10 rounded-md text-xs font-normal!"
                  >
                    <div>{day.slice(0, 2)}</div>
                  </CalendarPrimitive.HeadCell>
                {/each}
              </CalendarPrimitive.GridRow>
            </CalendarPrimitive.GridHead>
            <CalendarPrimitive.GridBody>
              {#each month.weeks as weekDates}
                <CalendarPrimitive.GridRow class="flex w-full">
                  {#each weekDates as date}
                    <CalendarPrimitive.Cell
                      {date}
                      month={month.value}
                      class="relative size-10 p-0! text-center text-sm"
                    >
                      <CalendarPrimitive.Day
                        class="rounded-9px group text-foreground hover:border-foreground data-selected:bg-foreground data-disabled:text-foreground/30 data-selected:text-background data-unavailable:text-muted-foreground relative inline-flex size-10 items-center justify-center border border-transparent bg-transparent p-0 text-sm font-normal whitespace-nowrap data-disabled:pointer-events-none data-outside-month:pointer-events-none data-selected:font-medium data-unavailable:line-through"
                      >
                        <div
                          class="bg-foreground group-data-selected:bg-background absolute top-[5px] hidden size-1 rounded-full group-data-today:block"
                        ></div>
                        {date.day}
                      </CalendarPrimitive.Day>
                    </CalendarPrimitive.Cell>
                  {/each}
                </CalendarPrimitive.GridRow>
              {/each}
            </CalendarPrimitive.GridBody>
          </CalendarPrimitive.Grid>
        {/each}
      </div>
    {/snippet}
  </CalendarPrimitive.Root>
</div>
