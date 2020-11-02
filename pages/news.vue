<template>
  <p>Test</p>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {
    return {
      title: this.$i18n.t('default.head.news'),
    }
  },
})
</script>
