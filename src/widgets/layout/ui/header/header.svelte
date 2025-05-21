<script lang="ts">
  import { ThemeSwitch } from '@/features/theme'
</script>

<header class="bg-background w-full border-b px-4 py-2">
  <div class="flex items-center justify-between">
    <span class="text-xl font-bold">ParkOut</span>

    <!-- TODO: move to other panel -->
    <span class="m-auto font-medium">Данные на {new Date().toLocaleString(undefined, {})}</span>
    <ThemeSwitch />
  </div>
</header>
