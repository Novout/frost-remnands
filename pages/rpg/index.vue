<template>
  <section class="container__rpg">
    <h1 class="h1">{{ $t('rpg.index.title') }}</h1>
    <span class="span">{{ $t('rpg.index.description') }}</span>
    <section class="container__card">
      <article class="card">
        <h2 class="h2">{{ $t('rpg.index.playerbook.card.title') }}</h2>
        <span>{{ $t('rpg.index.playerbook.card.description') }}</span>
        <section class="button-container">
          <a class="button-secondary" href="https://www.dropbox.com/s/?dl=1">{{
            $t('rpg.index.playerbook.card.buttonBR')
          }}</a>
          <a
            class="button-secondary-disabled"
            href="https://www.dropbox.com/s/?dl=1"
            >{{ $t('rpg.index.playerbook.card.buttonEN') }}</a
          >
        </section>
      </article>
      <article class="card">
        <h2 class="h2">{{ $t('rpg.index.gmbook.card.title') }}</h2>
        <span>{{ $t('rpg.index.gmbook.card.description') }}</span>
        <section class="button-container">
          <a
            class="button-secondary-disabled"
            href="https://www.dropbox.com/s/?dl=1"
            >{{ $t('rpg.index.gmbook.card.buttonBR') }}</a
          >
          <a
            class="button-secondary-disabled"
            href="https://www.dropbox.com/s/?dl=1"
            >{{ $t('rpg.index.gmbook.card.buttonEN') }}</a
          >
        </section>
      </article>
    </section>
  </section>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
}
</style>
