<template>
  <section id="rpg">
    <nuxt-child />
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'rpg',
  head() {
    return {
      title: this.$i18n.t('default.head.rpg'),
    }
  },
})
</script>

<style scoped>
#rpg {
  width: 100%;
  padding: 50px 100px;
  background-color: var(--rpg-background);
}

@media (max-width: 1024px) {
  #rpg {
    padding: 0 15px;
  }
}
</style>
