<template>
  <section class="credits">
    <h1>{{ $t('rpg.credits.title.credits') }}</h1>
    <span>{{ $t('rpg.credits.text.credits') }}</span>
    <h2>{{ $t('rpg.credits.title.ars') }}</h2>
    <h2>{{ $t('rpg.credits.title.fr') }}</h2>
    <h1 class="references">{{ $t('rpg.credits.title.references') }}</h1>
    <span>{{ $t('rpg.credits.text.references') }}</span>
    <section>
      <p>
        {{
          $t('rpg.credits.description.rpgSystem', {
            msg: $i18n.t('rpg.credits.name.srd5e'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.rpgSystem', {
            msg: $i18n.t('rpg.credits.name.srd35e'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.rpgSystem', {
            msg: $i18n.t('rpg.credits.name.D$D'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.rpgLive', {
            msg: $i18n.t('rpg.credits.name.skyfall'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.rpgLive', {
            msg: $i18n.t('rpg.credits.name.mares'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.rpgLive', {
            msg: $i18n.t('rpg.credits.name.dado'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.stellaris'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.hoi'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.tw2'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.gd'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.dbd'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.civ'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.bioshock'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.gris'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.northgard'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.game', {
            msg: $i18n.t('rpg.credits.name.divinite'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.sagaLibrary', {
            msg: $i18n.t('rpg.credits.name.tw'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.library', {
            msg: $i18n.t('rpg.credits.name.udc'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.library', {
            msg: $i18n.t('rpg.credits.name.ag1'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.library', {
            msg: $i18n.t('rpg.credits.name.ag2'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.library', {
            msg: $i18n.t('rpg.credits.name.ag3'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.library', {
            msg: $i18n.t('rpg.credits.name.mill'),
          })
        }}
      </p>
      <p>
        {{
          $t('rpg.credits.description.thesis', {
            msg: $i18n.t('rpg.credits.name.pv'),
          })
        }}
      </p>
    </section>
  </section>
</template>

<style scoped>
.credits {
  max-height: calc(100vh - 190px);
  overflow: auto;
}

.credits > section > p {
  font-size: 1rem;
  pointer-events: none;
}

.credits > section > p::before {
  content: '';
  height: 8px;
  width: 8px;
  margin-right: 10px;
  background: var(--footer-background);
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.credits > span {
  pointer-events: none;
}

.credits > h1 {
  font-size: 2.5rem;
  border-bottom: 2px solid var(--footer-background);
  pointer-events: none;
}

.credits > h2 {
  margin-top: 3rem;
  border-bottom: 1px solid var(--footer-background);
  pointer-events: none;
}

.credits > section {
  margin-top: 10px;
}

.credits::-webkit-scrollbar {
  width: 8px;
}

.credits::-webkit-scrollbar-track {
  background: var(--background-primary);
}

.credits::-webkit-scrollbar-thumb {
  background: var(--font-primary);
}

.credits::-webkit-scrollbar-thumb:hover {
  background: var(--header-color);
}

.references {
  margin-top: 50px;
}

@media (max-width: 768px) {
  .credits {
    max-height: calc(100vh - 90px);
  }
}
</style>
