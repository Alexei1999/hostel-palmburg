<template lang="pug">
  .mobile-menu(:class="getCssMobile")
    button.burger-btn.mobile-menu__burger(@click="isMenuActive = !isMenuActive")
      span.burger-btn__top-bar
      span.burger-btn__middle-bar
      span.burger-btn__bottom-bar
    nav.mobile-menu__nav
      .div(@click="isMenuActive = !isMenuActive")
        app-logo
      button.mobile-menu__btn-close(@click="isMenuActive = !isMenuActive")
        span ×
      ul.mobile-menu__list
        li(v-for='(link,index) in links' :key="index")
          nuxt-link.mobile-menu__link(:to="localePath(link.path)" exact @click.native="isMenuActive = !isMenuActive") {{link.name[actualLocale]}}
</template>

<script>
import { linksNav } from '~/content/links'
import AppLogo from '~/components/Logo'

export default {
  name: 'AppMobileMenu',
  components: { AppLogo },
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    links () {
      return linksNav
    },
    getCssMobile () {
      return {
        'mobile-menu': !this.isMenuActive,
        'mobile-menu--active': this.isMenuActive
      }
    },
    actualLocale () {
      return this.$i18n.locale
    }
  }
}
</script>
