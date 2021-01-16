<template>
  <article class="main__container__card" :style="{ backgroundColor: color }">
    <section class="card--aux">
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </section>
    <CardButton
      v-if="github"
      style="flex-grow: 1"
      :icon="['fab', 'github']"
      :title="$i18n.t('rpg.default.github', { version })"
      :link="githubLink"
      :disabled="disabled"
      :github="true"
    />
    <CardButton
      style="flex-grow: 1"
      :icon="['download', 'lg']"
      :title="$i18n.t('rpg.default.download', { version })"
      :link="link"
      :disabled="disabled"
    />
  </article>
</template>

<script>
import CardButton from "@/components/rpg/CardButton";

export default {
  components: {
    CardButton,
  },
  props: {
    color: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    version: {
      required: true,
      type: String,
    },
    link: {
      required: false,
      default: "",
      type: String,
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean,
    },
    github: {
      required: false,
      default: false,
      type: Boolean,
    },
    githubLink: {
      required: false,
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
.main__container__card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 500px;
  width: 20vw;
  padding-top: 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

@keyframes levitate {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
}

.main__container__card:hover {
  box-shadow: inset 0 0 15px 2px var(--card-focus);
  animation: 1s levitate;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.card--aux > h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  pointer-events: none;
}

.card--aux > p {
  width: 100%;
  pointer-events: none;
}

.card--aux {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 80%;
  justify-content: flex-start;
  padding: 30px;
}

@media (max-width: 1280px) {
  .main__container__card {
    width: 25vw;
  }
}

@media (max-width: 1024px) {
  .main__container__card {
    margin: 2rem 0;
    width: 100%;
  }
}
</style>
