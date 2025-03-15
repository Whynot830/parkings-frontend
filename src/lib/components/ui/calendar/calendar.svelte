<script lang="ts">
  import { Calendar as CalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui'

  import {
    Day,
    Cell,
    Grid,
    Header,
    Months,
    GridRow,
    Heading,
    GridBody,
    GridHead,
    HeadCell,
    NextButton,
    PrevButton
  } from './index'

  import { cn } from '$lib/utils.js'

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
    <Header>
      <PrevButton />
      <Heading />
      <NextButton />
    </Header>
    <Months>
      {#each months as month}
        <Grid>
          <GridHead>
            <GridRow class="flex">
              {#each weekdays as weekday}
                <HeadCell>
                  {weekday.slice(0, 2)}
                </HeadCell>
              {/each}
            </GridRow>
          </GridHead>
          <GridBody>
            {#each month.weeks as weekDates}
              <GridRow class="mt-2 w-full">
                {#each weekDates as date}
                  <Cell {date} month={month.value}>
                    <Day />
                  </Cell>
                {/each}
              </GridRow>
            {/each}
          </GridBody>
        </Grid>
      {/each}
    </Months>
  {/snippet}
</CalendarPrimitive.Root>
