<template>
  <section class="container">
    <div id="initial" class="container__initial">
      <img
        src="~/assets/ars-icon.png"
        width="15%"
        :alt="$i18n.t('default.img.main')"
      />
      <h2>{{ $t('initial.description') }}</h2>
      <h1>{{ $t('initial.title') }}</h1>
      <a
        class="button-primary"
        :href="$route.path.includes('/en') ? 'en#about' : '#about'"
        >{{ $t('initial.about') }}</a
      >
    </div>
    <div id="about" class="container__about">
      <section>
        <h3>{{ $t('about.first.title') }}</h3>
        <p>
          {{ $t('about.first.description1') }}
        </p>
        <p>
          {{ $t('about.first.description2') }}
        </p>
        <a
          class="button-primary"
          href="https://www.moddb.com/mods/arsa-random-story"
          target="_blank"
          rel="noopener"
          >{{ $t('about.first.mod') }}</a
        >
        <h4>
          {{ $t('about.second.title') }}
        </h4>
        <p>
          {{ $t('about.second.description1') }}
        </p>
        <p>
          {{ $t('about.second.description2') }}
        </p>
        <nuxt-link class="button-primary" :to="localePath({ name: 'rpg' })">{{
          $t('about.second.rpg')
        }}</nuxt-link>
      </section>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {
    return {
      title: this.$i18n.t('default.head.index'),
    }
  },
})
</script>

<style scoped>
.container {
  overflow-x: hidden;
}

.container__initial {
  margin: 0 auto;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.container__initial > h1 {
  background: none;
  font-size: 6rem;
}

.container__initial > h2 {
  font-weight: 400;
  font-size: 1.5rem;
}

.container__about {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--background-clean);
}

.container__about > section {
  padding: 5rem;
  height: auto;
}

.container__about > section > h3 {
  font-size: 2.2rem;
  border-bottom: 2px solid var(--font-primary);
}

.container__about > section > h4 {
  margin-top: 40px;
  font-size: 1.75rem;
  border-bottom: 1px solid var(--font-primary);
}

.container__about > section > p {
  padding-top: 20px;
}

@media (max-width: 768px) {
  .container__about > section {
    padding: 2rem;
  }
}

@media only screen and (max-width: 1024px) {
  .container__initial > h1 {
    font-size: 2em;
  }
}
</style>
