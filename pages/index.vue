<template>
  <section class="container">
    <div class="container__initial">
      <img src="~/assets/ars-icon.png" width="15%" />
      <h2 class="title">{{ $t('initial.description') }}</h2>
      <h1 class="title">{{ $t('initial.title') }}</h1>
    </div>
    <div class="container__about">
      <section>
        <h3>{{ $t('about.first.title') }}</h3>
        <p>
          {{ $t('about.first.description1') }}
        </p>
        <p>
          {{ $t('about.first.description2') }}
        </p>
        <h4>
          {{ $t('about.second.title') }}
        </h4>
        <p>
          {{ $t('about.second.description1') }}
        </p>
      </section>
    </div>
    <div class="container__footer">
      <section class="container__foooter--title">
        <h1>{{ $t('footer.title') }}</h1>
      </section>
      <section class="container__footer--cards">
        <section class="cards--card">
          <h1>{{ $t('footer.cardRpg.title') }}</h1>
          <span>{{ $t('footer.cardRpg.description') }}</span>
          <nuxt-link to="/rpg">{{ $t('footer.cardRpg.to') }}</nuxt-link>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style scoped>
.container {
  overflow-x: hidden;
}

.container__initial {
  margin: 0 auto;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container__initial > img {
  margin-bottom: 5rem;
}

.container__initial > h1 {
  font-size: 6rem;
}

.container__initial > h2 {
  font-size: 1.5rem;
}

.container__about {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--background-section);
}

.container__about > section {
  padding: 5rem;
  height: auto;
}

.container__about > section > h3 {
  font-size: 4rem;
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

.container__footer {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--background-footer);
}

.container__footer--cards {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 35vh;
}

.cards--card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100%;
  padding: 1rem;
  background-color: var(--background-secondary);
  color: var(--font-secondary);
  border-radius: 0.5rem;
}

.container__foooter--title {
  pointer-events: none;
  font-size: 6rem;
}

.cards--card > h1 {
  pointer-events: none;
  font-size: 2rem;
}

.cards--card > a {
  text-decoration: none;
  padding: 1rem 4rem;
  color: var(--font-primary);
  background: var(--background-primary);
  border-radius: 2rem;
  transition: all 0.25s ease;
}

.cards--card > a:hover {
  background-color: var(--background-section);
}
</style>
