<script lang="ts">
  import { ThemeSwitch } from '@/features/theme'
</script>

<header class="bg-background w-full border-b px-4 py-2">
  <div class="flex items-center justify-between">
    <span class="text-xl font-bold">ParkOut</span>

    <!-- TODO: move to other panel -->
    <span class="text-base font-medium">Data as of {new Date().toLocaleString()}</span>
    <ThemeSwitch />
  </div>
</header>
