<script lang="ts">
  import { ArrowRightIcon } from '@lucide/svelte'

  import { Button, Card, CardContent } from '@/shared/ui'
</script>

<section class="bg-accent/50 px-4 py-20 md:px-8">
  <div class="mx-auto max-w-4xl">
    <Card class=" text-card-foreground bg-gradient-to-r">
      <CardContent class="p-12 text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Готовы изменить способ поиска парковки?</h2>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="outline" size="lg" class="text-lg">Связаться с нами</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
