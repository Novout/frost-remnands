<template>
  <section id="main">
    <header class="header">
      <h1 id="title">Frost Remnands</h1>
      <section>
        <nuxt-link to="/">{{ $t('header.home') }}</nuxt-link>
        <nuxt-link to="/">{{ $t('header.rpg') }}</nuxt-link>
        <nuxt-link to="/">{{ $t('header.news') }}</nuxt-link>
        <fa-icon icon="adjust" size="2x" @click.prevent="colorMode" />
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          ><fa-icon icon="language" size="2x" />{{ locale.name }}
        </nuxt-link>
      </section>
    </header>
    <main>
      <Nuxt />
    </main>
  </section>
</template>

<script>
export default {
  colorMode: 'dark',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    colorMode() {
      this.$colorMode.preference === 'light'
        ? (this.$colorMode.preference = 'dark')
        : (this.$colorMode.preference = 'light')
    },
  },
}
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-color);
  padding: 3vh 10vw;
  height: 5vh;
  max-width: 100%;
}

.header > h1 {
  font-weight: 700;
  pointer-events: none;
}

.header > section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header > section > svg {
  padding: 0 20px;
  cursor: pointer;
}

.header > section > a {
  color: var(--font-primary);
  font-family: 'Raleway', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 20px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.header > section > a:hover {
  padding: 0 20px 20px 20px;
  border-bottom: 3px solid var(--font-primary);
}

.header > section > a:last-child {
  display: flex;
  align-items: center;
}

.header > section > a > svg {
  position: relative;
  left: -5px;
}

.main {
  padding: 0 10vw;
}

@media (max-width: 768px) {
  .header > h1 {
    display: none;
  }

  .header > section > svg {
    display: none;
  }

  .header > section {
    width: 100vw;
    padding: 0;
  }

  .header {
    padding: 3vh 0;
  }
}
</style>
