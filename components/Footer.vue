<template>
  <footer class="footer">
    <a
      :href="
        $route.path === '/' || $route.path === '/en'
          ? '#header'
          : localePath({ name: 'index' })
      "
      >{{ $t("footer.home") }}</a
    >
    <nuxt-link :to="localePath({ name: 'rpg' })">
      {{ $t("footer.rpg") }}
    </nuxt-link>
    <nuxt-link :to="localePath({ name: 'news' })">
      {{ $t("footer.news") }}
    </nuxt-link>
  </footer>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({});
</script>

<style scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-background);
  height: 8vh;
  max-width: 100%;
  padding: 20px;
}

.footer > a {
  color: var(--footer-text);
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer {
    padding: 10px 0;
  }

  .footer > a {
    font-size: 0.9rem;
  }
}
</style>
