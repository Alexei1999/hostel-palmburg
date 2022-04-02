<template lang="pug">
  .rooms
    .container
      .wrapper
        .rooms__cards
          .rooms__cards-wrapper(v-for="(room,idx) in rooms" :key="idx")
            .rooms-card
              //hooper(:wheelControl="false")
              //  slide.rooms-card__img(v-for="x in room.imageSet.slice(0, 3)" :key="x")
              //    img(:src="x")
              //  hooper-navigation(slot="hooper-addons")
              //  hooper-pagination(slot="hooper-addons")
              .rooms-card__img
                picture
                  //- source(type="image/webp" :srcSet="room.imgSrc.webp.srcSet")
                  //- source(type="image/avif" :srcSet="room.imgSrc.avif.srcSet")
                  //- source(type="image/jpeg" :srcSet="room.imgSrc.jpg.srcSet")
                  img(:src="room.imgSrc.jpg")
              .rooms-card__wrapper
                h3.rooms-card__title {{room.title[actualLocale]}}
                .rooms-card__description {{room.content[actualLocale]}}
                .rooms-card__buttons
                  span.rooms-card__btn.btn
                    nuxt-link(:to="localePath('/rooms/'+room.slug)") {{ translate.learnMore }}
                  span.rooms-card__btn.btn.btn--secondary
                    button(@click="toggleBookingModal") {{ translate.booking }}
</template>

<script>
import { mapActions } from 'vuex'
import { roomsData } from '~/static/rooms'

export default {
  name: 'Rooms',
  computed: {
    rooms () {
      return roomsData
    },
    translate () {
      return this.$t('common')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  methods: { ...mapActions('layout', ['toggleBookingModal']) }
}
</script>
