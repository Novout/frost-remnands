<template>
  <main class="main">
    <section class="main__container">
      <Card
        color="#3B86F3"
        :title="$i18n.t('rpg.playerbook.title')"
        :description="$i18n.t('rpg.playerbook.description')"
        version="v1.0.0"
        link="https://www.dropbox.com/s/q6t0vfmksu2yx5t/Restos%20da%20Geada%20-%20Livro%20do%20Jogador%20-%20v1.0.0.pdf?dl=1"
      />
      <Card
        color="#783BF3"
        :title="$i18n.t('rpg.masterbook.title')"
        :description="$i18n.t('rpg.masterbook.description')"
        version="v0.1.0"
        link="https://www.dropbox.com/s/8a0snw00ofprtv5/Restos%20da%20Geada%20-%20Livro%20do%20Mestre%20v.0.1.0.pdf?dl=1"
      />
      <Card
        color="#F3863B"
        :title="$i18n.t('rpg.compendium.title')"
        :description="$i18n.t('rpg.compendium.description')"
        :github="true"
        version="v1.1.0"
        link="https://www.dropbox.com/s/aia4zvzd4kevjci/Restos%20da%20Geada%20-%20RPG%20Setup%201.1.0.exe?dl=1"
        github-link="https://github.com/Novout/frost-remnands-desktop"
      />
    </section>
  </main>
</template>

<script>
import Card from "@/components/rpg/Card";

export default {
  components: {
    Card,
  },
  head() {
    return {
      title: this.$i18n.t("default.head.rpg"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t("default.head.description"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 190px);
  width: 100%;
}

.main__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
}

@media (max-width: 1024px) {
  .main__container {
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
}

@media (max-width: 768px) {
  .main__container {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
}
</style>
