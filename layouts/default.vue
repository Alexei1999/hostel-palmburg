<template lang="pug">
  div
    AppSprites
    AppHeader
    app-intro
    Nuxt
    app-footer
    booking-modal
</template>
<script>
import BookingModal from '@/components/BookingModal'
import AppSprites from '~/components/Sprites'
import AppHeader from '~/components/layout/Header'
import AppLogo from '~/components/Logo'
import AppIntro from '~/components/Intro'
import AppFooter from '~/components/layout/Footer'

export default {
  components: {
    BookingModal,
    AppFooter,
    AppIntro,
    AppLogo,
    AppHeader,
    AppSprites
  }
}
</script>
