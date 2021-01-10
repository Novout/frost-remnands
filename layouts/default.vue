<template>
  <section class="anim">
    <Header />
    <Nuxt />
    <Footer />
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default defineComponent({
  components: {
    Header,
    Footer,
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
