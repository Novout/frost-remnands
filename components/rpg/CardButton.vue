<template>
  <article class="item" :class="disable" @click.prevent="url">
    <fa-icon :icon="icon[0]" :size="icon[1]" />
    <p v-if="!disabled">{{ title }}</p>
    <p v-else>{{ $t("rpg.default.disabled") }}</p>
  </article>
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";

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
  },
  setup(props) {
    const url = () => {
      window.location.href = props.link;
    };

    const disable = computed(() => {
      return props.disabled ? "download-off" : "";
    });

    return { url, disable };
  },
});
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item:hover {
  background-color: var(--card-hover);
}

.item:focus {
  color: aqua;
}

.download-off {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 768px) {
  .item > p {
    display: none;
  }
}
</style>
