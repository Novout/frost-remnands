<template>
  <section class="anim">
    <Header />
    <main>
      <transition name="rpg" mode="out-in">
        <Nuxt />
      </transition>
    </main>
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "@/components/Header";

export default defineComponent({
  transition: {
    name: "rpg",
    mode: "out-in",
  },
  colorMode: "dark",
  components: {
    Header,
  },
});
</script>

<style scoped>
@keyframes appear {
  0% {
    opacity: 0;
  }
}

.anim {
  animation: 1s appear;
}

main {
  display: flex;
}

.rpg-enter-active,
.rpg-leave-active {
  transition: opacity 0.5s;
}
.rpg-enter,
.rpg-leave-active {
  opacity: 0;
}
</style>
