<template lang="pug">
  header.header
    .container
      AppMobileLangMenu
      AppLogo
      AppMobileMenu
      AppHeaderNav
</template>

<script>
import AppHeaderNav from '~/components/layout/HeaderNav'
import AppLogo from '~/components/Logo'
import AppMobileMenu from '~/components/layout/MobileMenu'
import AppMobileLangMenu from '~/components/layout/MobileLangMenu'

export default {
  name: 'AppHeader',
  components: {
    AppMobileLangMenu,
    AppMobileMenu,
    AppLogo,
    AppHeaderNav
  }
}
</script>
