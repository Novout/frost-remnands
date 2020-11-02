<template>
  <section id="main">
    <Header />
    <main>
      <Nuxt />
    </main>
    <footer class="footer">
      <a
        :href="$route.path === '/' ? '#header' : localePath({ name: 'index' })"
        >{{ $t('footer.home') }}</a
      >
      <nuxt-link :to="localePath({ name: 'rpg' })">{{
        $t('footer.rpg')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'news' })">{{
        $t('footer.news')
      }}</nuxt-link>
    </footer>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@/components/Header'

export default defineComponent({
  components: {
    Header,
  },
})
</script>

<style>
body {
  background: url('../assets/landing.png');
  background-size: cover;
  background-attachment: fixed;
  color: var(--font-primary);
}

.dark-mode body {
  background: url('../assets/landing_black.png');
  background-size: cover;
  background-attachment: fixed;
}

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
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .header {
    padding: 3vh 5vw;
  }

  .header > section > a {
    padding: 0 5px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 3vh 0;
  }

  .header > h1 {
    display: none;
  }

  .header > section {
    width: 100vw;
    padding: 0;
  }

  .header > section > a {
    font-size: 1rem;
    padding: 0;
  }

  .footer {
    padding: 10px 0;
  }

  .footer > a {
    font-size: 0.9rem;
  }
}
</style>
