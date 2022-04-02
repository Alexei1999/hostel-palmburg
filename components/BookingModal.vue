<template lang="pug">
  .booking-modal(:class="{ 'booking-modal--active': isBookingModalOpen }")
    .booking-modal__bg(@click="toggleBookingModal")
    .booking-modal__content
      .booking-modal__close-btn(tabindex="0" @click="toggleBookingModal")
      h4.booking-modal__title {{translate.availability}}
      <div class="left"  :id="`_bn_widget__${getLocale}`">

      </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'BookingModal',
  computed: {
    ...mapState('layout', ['isBookingModalOpen']),
    translate () {
      return this.$t('common')
    },
    getLocale () {
      return this.$i18n.locale
    }
  },
  methods: { ...mapActions('layout', ['toggleBookingModal']) }
}
</script>
