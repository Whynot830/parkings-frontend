<script>
  import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
</script>

<footer
  class="bg-accent relative border-t px-4 py-10"
  style="background-image: url('pattern-bg2.png'); background-size: cover; background-blend-mode:overlay;"
>
  <div class="container mx-auto flex flex-col items-center justify-center gap-3 border-transparent">
    <Card class="bg-card/20 border-transparent shadow-lg backdrop-blur-xs">
      <CardContent>
        <h3 class="p-0 text-3xl font-bold">ParkOut</h3>
      </CardContent>
    </Card>

    <Card class="bg-card/20 border-transparent py-4 shadow-lg backdrop-blur-xs">
      <CardContent class="px-4">
        <p class="text-muted-foreground dark:text-primary text-lg font-medium">
          Умная система поиска парковок для современного города
        </p>
      </CardContent>
    </Card>

    <Card class="bg-card/20 border-transparent py-4 shadow-lg backdrop-blur-xs">
      <CardContent class="px-4">
        <p class="text-muted-foreground dark:text-primary text-sm font-medium">
          © 2025 ParkOut. Все права защищены.
        </p>
      </CardContent>
    </Card>
  </div>
</footer>
