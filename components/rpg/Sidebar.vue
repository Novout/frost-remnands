<template>
  <aside class="sidebar">
    <SidebarItem :icon="['home', 'lg']" :title="$i18n.t('aside.initial')" />
    <SidebarItem :icon="['mountain', 'lg']" :title="$i18n.t('aside.summary')" />
    <SidebarItem :icon="['cat', 'lg']" :title="$i18n.t('aside.races')" />
    <SidebarItem :icon="['globe', 'lg']" :title="$i18n.t('aside.origin')" />
    <SidebarItem :icon="['dragon', 'lg']" :title="$i18n.t('aside.class')" />
    <SidebarItem :icon="['flag', 'lg']" :title="$i18n.t('aside.nations')" />
    <SidebarItem :icon="['cloud', 'lg']" :title="$i18n.t('aside.mist')" />
    <SidebarItem
      :icon="['trophy', 'lg']"
      :title="$i18n.t('aside.credits')"
      to="-credits"
    />
  </aside>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import SidebarItem from '@/components/rpg/SidebarItem'

export default defineComponent({
  components: {
    SidebarItem,
  },
})
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-width: 250px;
  background-color: var(--aside-background);
  height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: var(--background-primary);
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--font-primary);
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--header-color);
}

@media (max-width: 768px) {
  .sidebar {
    min-width: 120px;
  }
}
</style>
