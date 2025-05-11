<script lang="ts">
  import { Calendar as CalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui'

  import {
    CalendarDay,
    CalendarCell,
    CalendarGrid,
    CalendarHeader,
    CalendarMonths,
    CalendarGridRow,
    CalendarHeading,
    CalendarGridBody,
    CalendarGridHead,
    CalendarHeadCell,
    CalendarNextButton,
    CalendarPrevButton
  } from './index'

  import { cn } from '$lib/utils'

  let {
    ref = $bindable(null),
    value = $bindable(),
    placeholder = $bindable(),
    class: className,
    weekdayFormat = 'short',
    fixedWeeks = true,
    ...restProps
  }: WithoutChildrenOrChild<CalendarPrimitive.RootProps> = $props()
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<CalendarPrimitive.Root
  bind:value={value as never}
  bind:ref
  bind:placeholder
  {weekdayFormat}
  {fixedWeeks}
  class={cn('p-3', className)}
  {...restProps}
>
  {#snippet children({ months, weekdays })}
    <CalendarHeader>
      <CalendarPrevButton />
      <CalendarHeading />
      <CalendarNextButton />
    </CalendarHeader>
    <CalendarMonths>
      {#each months as month}
        <CalendarGrid>
          <CalendarGridHead>
            <CalendarGridRow class="flex">
              {#each weekdays as weekday}
                <CalendarHeadCell>
                  {weekday.slice(0, 2)}
                </CalendarHeadCell>
              {/each}
            </CalendarGridRow>
          </CalendarGridHead>
          <CalendarGridBody>
            {#each month.weeks as weekDates}
              <CalendarGridRow class="mt-2 w-full">
                {#each weekDates as date}
                  <CalendarCell {date} month={month.value}>
                    <CalendarDay />
                  </CalendarCell>
                {/each}
              </CalendarGridRow>
            {/each}
          </CalendarGridBody>
        </CalendarGrid>
      {/each}
    </CalendarMonths>
  {/snippet}
</CalendarPrimitive.Root>
