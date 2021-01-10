<template>
  <section class="anim">
    <Header />
    <Nuxt />
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "@/components/Header";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style>
@keyframes appear {
  0% {
    opacity: 0;
  }
}

.anim {
  animation: 1s appear;
}

body {
  background: url("../assets/landing.png");
  background-size: cover;
  background-attachment: fixed;
  color: var(--font-primary);
}

.dark-mode body {
  background: url("../assets/landing_black.png");
  background-size: cover;
  background-attachment: fixed;
}
</style>
