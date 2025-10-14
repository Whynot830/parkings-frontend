<script lang="ts">
  import {
    HeroSection,
    FeaturesSection,
    PlatformFeaturesSection,
    UseCasesSection,
    HowItWorksSection,
    MapDemoSection,
    CtaSection,
    Footer,
    PredictionDemoSection,
    ApiDocumentationSection
  } from './ui'
</script>

<svelte:head>
  <title>ParkOut - ML-прогнозирование парковочных мест</title>+
</svelte:head>

<div class="min-h-screen">
  <div class="from-background via-background to-accent/5 min-h-screen bg-gradient-to-br">
    <HeroSection />

    <FeaturesSection />
    <PlatformFeaturesSection />
    <UseCasesSection />
    <HowItWorksSection />
    <PredictionDemoSection />
    <ApiDocumentationSection />
    <MapDemoSection />
    <CtaSection />
    <Footer />
  </div>
</div>
