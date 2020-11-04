<template>
  <section id="main">
    <Header />
    <main>
      <Sidebar />
      <Nuxt />
    </main>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@/components/Header'
import Sidebar from '@/components/rpg/Sidebar'

export default defineComponent({
  colorMode: 'dark',
  components: {
    Header,
    Sidebar,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
})
</script>

<style scoped>
main {
  display: flex;
}
</style>
