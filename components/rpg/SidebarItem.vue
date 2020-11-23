<template>
  <article
    class="item"
    @click.prevent="$router.push(localeRoute({ name: `rpg${to}` }))"
  >
    <fa-icon :icon="icon[0]" :size="icon[1]" />
    <p>{{ title }}</p>
  </article>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    icon: {
      required: true,
      type: Array,
    },
    title: {
      required: true,
      type: String,
    },
    to: {
      required: false,
      default: "",
      type: String,
    },
  },
});
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item:hover {
  background-color: var(--aside-hover);
}

@media (max-width: 768px) {
  .item > p {
    display: none;
  }
}
</style>
