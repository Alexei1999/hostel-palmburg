<template lang="pug">
  .mobile-menu
    .header-nav__i18n.mobile-menu__lang
      nuxt-link.header-nav__i18n-btn.mobile-menu__lang-btn(@click.native="changeLanguage('ru')" :to="switchLocalePath('ru')" exact) РУС
      nuxt-link.header-nav__i18n-btn.mobile-menu__lang-btn(@click.native="changeLanguage('en')" :to="switchLocalePath('en')" exact) ENG
</template>

<script>
export default {
  name: 'AppMobileLangMenu',
  methods: {
    changeLanguage (lang) {
      this.$i18n.setLocale(lang)
    }
  }
}
</script>
