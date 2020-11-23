<template>
  <header id="header" class="header">
    <h1 id="title">Frost Remnands</h1>
    <section>
      <nuxt-link :to="localePath({ name: 'index' })">
        {{ $t("header.home") }}
      </nuxt-link>
      <nuxt-link :to="localePath({ name: 'rpg' })">
        {{ $t("header.rpg") }}
      </nuxt-link>
      <nuxt-link :to="localePath({ name: 'news' })">
        {{ $t("header.news") }}
      </nuxt-link>
      <fa-icon icon="adjust" size="2x" @click.prevent="colorMode" />
      <a
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent="switchLanguage(locale.code)"
        ><fa-icon icon="language" size="2x" />{{ locale.name }}
      </a>
    </section>
  </header>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    colorMode() {
      this.$colorMode.preference === "light"
        ? (this.$colorMode.preference = "dark")
        : (this.$colorMode.preference = "light");
    },
    switchLanguage(code) {
      if (this.$route.fullPath.includes("#about")) {
        if (this.$route.fullPath.includes("/en")) {
          this.$router.push("/");
        } else {
          this.$router.push("/en");
        }

        return;
      }
      this.$router.push(this.switchLocalePath(code));
    },
  },
});
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background: var(--header-color);
  padding: 0 10vw;
  min-height: 90px;
  max-width: 100%;
  box-shadow: 0px 0px 25px 13px rgba(0, 0, 0, 0.1);
  overflow-y: none;
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
  font-family: "Raleway", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 20px;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
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

@media (max-width: 1200px) {
  .header > section > a {
    padding: 0 5px;
  }

  .header > section > a > svg {
    display: none;
  }
}

@media (max-width: 768px) {
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
}
</style>
