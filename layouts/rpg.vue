<template>
  <section>
    <Header />
    <main>
      <Sidebar />
      <transition name="rpg" mode="out-in">
        <Nuxt />
      </transition>
    </main>
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "@/components/Header";
import Sidebar from "@/components/rpg/Sidebar";

export default defineComponent({
  transition: {
    name: "rpg",
    mode: "out-in",
  },
  colorMode: "dark",
  components: {
    Header,
    Sidebar,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
});
</script>

<style scoped>
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
