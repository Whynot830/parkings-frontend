<script lang="ts">
  import { Calendar as CalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui'

  import * as Calendar from './index'

  import { cn } from '@/shared/lib'

  let {
    ref = $bindable(null),
    value = $bindable(),
    placeholder = $bindable(),
    class: className,
    weekdayFormat = 'short',
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
  class={cn('p-3', className)}
  {...restProps}
>
  {#snippet children({ months, weekdays })}
    <Calendar.CalendarHeader>
      <Calendar.CalendarPrevButton />
      <Calendar.CalendarHeading />
      <Calendar.CalendarNextButton />
    </Calendar.CalendarHeader>
    <Calendar.CalendarMonths>
      {#each months as month (month)}
        <Calendar.CalendarGrid>
          <Calendar.CalendarGridHead>
            <Calendar.CalendarGridRow class="flex">
              {#each weekdays as weekday (weekday)}
                <Calendar.CalendarHeadCell>
                  {weekday.slice(0, 2)}
                </Calendar.CalendarHeadCell>
              {/each}
            </Calendar.CalendarGridRow>
          </Calendar.CalendarGridHead>
          <Calendar.CalendarGridBody>
            {#each month.weeks as weekDates (weekDates)}
              <Calendar.CalendarGridRow class="mt-2 w-full">
                {#each weekDates as date (date)}
                  <Calendar.CalendarCell {date} month={month.value}>
                    <Calendar.CalendarDay />
                  </Calendar.CalendarCell>
                {/each}
              </Calendar.CalendarGridRow>
            {/each}
          </Calendar.CalendarGridBody>
        </Calendar.CalendarGrid>
      {/each}
    </Calendar.CalendarMonths>
  {/snippet}
</CalendarPrimitive.Root>
