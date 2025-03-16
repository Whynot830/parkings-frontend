<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import { ScrollArea, Scrollbar } from '$lib/components/ui'

  const { Story } = defineMeta({
    title: 'Components/Scroll Area',
    component: ScrollArea,

    parameters: {
      docs: {
        description: {
          component: 'Augments native scroll functionality for custom, cross-browser styling'
        }
      }
    }
  })
</script>

<Story name="Default">
  <ScrollArea class=" m-auto h-96 w-fit rounded-md border px-4 py-2">
    <div class="flex flex-col gap-2">
      <span>Scroll Area Item 1</span>
      <span>Scroll Area Item 2</span>
      <span>Scroll Area Item 3</span>
      <span>Scroll Area Item 4</span>
      <span>Scroll Area Item 5</span>
      <span>Scroll Area Item 6</span>
      <span>Scroll Area Item 7</span>
      <span>Scroll Area Item 8</span>
      <span>Scroll Area Item 9</span>
      <span>Scroll Area Item 10</span>
      <span>Scroll Area Item 11</span>
      <span>Scroll Area Item 12</span>
      <span>Scroll Area Item 13</span>
      <span>Scroll Area Item 14</span>
      <span>Scroll Area Item 15</span>
      <span>Scroll Area Item 16</span>
      <span>Scroll Area Item 17</span>
      <span>Scroll Area Item 18</span>
      <span>Scroll Area Item 19</span>
      <span>Scroll Area Item 20</span>
      <span>Scroll Area Item 21</span>
      <span>Scroll Area Item 22</span>
      <span>Scroll Area Item 23</span>
      <span>Scroll Area Item 24</span>
      <span>Scroll Area Item 25</span>
      <span>Scroll Area Item 26</span>
      <span>Scroll Area Item 27</span>
      <span>Scroll Area Item 28</span>
      <span>Scroll Area Item 29</span>
      <span>Scroll Area Item 30</span>
      <span>Scroll Area Item 31</span>
      <span>Scroll Area Item 32</span>
      <span>Scroll Area Item 33</span>
      <span>Scroll Area Item 34</span>
      <span>Scroll Area Item 35</span>
      <span>Scroll Area Item 36</span>
      <span>Scroll Area Item 37</span>
      <span>Scroll Area Item 38</span>
      <span>Scroll Area Item 39</span>
      <span>Scroll Area Item 40</span>
    </div>
    <Scrollbar orientation="vertical" />
  </ScrollArea>
</Story>
