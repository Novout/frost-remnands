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
</style>
