<template lang="pug">
  .room-current
    .container
      .wrapper
        .card-about
          hooper(ref="carousel" :settings="hooperSettings").card-about__slider
            slide.card-about__slide(v-for="(img,idx) in room.imageSet" :key="idx")
              .card-about__img
                picture
                  source(type="image/webp" :srcSet="img.webp.srcSet")
                  //- source(type="image/avif" :srcSet="img.avif.srcSet")
                  source(type="image/jpeg" :srcSet="img.jpg.srcSet")
                  img(:src="img.jpg")
            hooper-navigation(slot="hooper-addons")
            hooper-pagination(slot="hooper-addons")
          .card-about__wrapper
            h2.card-about__title {{room.title[actualLocale]}}
            .card-about__content
              ul.card-about__list
                li.card-about__list-item(v-for="(advantage,idx) in room.advantages" :key="idx")
                  span {{advantage[actualLocale]}}
              p.card-about__text(v-for="(content,idx) in room.additionContent" :key="idx") {{content[actualLocale]}}
            .card-about__buttons
              span.card-about__btn.btn
                nuxt-link(:to="localePath('/rooms')") {{translate.back}}
              span.card-about__btn.btn.btn--secondary
                button(@click="toggleBookingModal") {{translate.booking}}
    .other-rooms
      app-rooms-section(:title="translateRooms" :roomsData="roomsData")

</template>

<script>
import { mapActions } from 'vuex'
import AppRoomsSection from '~/components/index/RoomsSection'

export default {
  name: 'RoomId',
  components: { AppRoomsSection },
  validate ({ params }) {
    if (!this.roomsData) { return true }

    for (const room of this.roomsData) {
      if (room.slug === params.id) {
        return true
      }
    }
    return false
  },
  async asyncData ({ $axios }) {
    return {
      roomsData: await $axios.$get('/rooms.json')
    }
  },
  data () {
    return {
      roomsData: null,
      hooperSettings: {
        wheelControl: false
      }
    }
  },
  computed: {
    room () {
      return this.roomsData?.find(room => room.slug === this.$route.params.id)
    },
    translate () {
      return this.$t('common')
    },
    translateRooms () {
      return this.$t('roomsSection.titleCurrent')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  mounted () {
    if (process.browser) {
      const svg = document.getElementsByClassName('icon')
      for (let i = 0; i < svg.length; i++) {
        svg[i].removeAttribute('width')
        svg[i].removeAttribute('height')
        svg[i].getElementsByTagName('path')[0].remove()
      }
    }
  },
  methods: {
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
