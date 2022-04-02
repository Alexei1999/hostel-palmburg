<template lang="pug">
  .rooms_section
    .container
      .wrapper.wrapper--slider
        h2.title {{sectionTitle}}
        .card-slider
          hooper(ref="carousel" :settings="hooperSettings" @slide="checkSlideOption")
            slide(v-for="(room,idx) in rooms" :key="idx").card-slider__slide
              .room-card
                .room-card__wrapper
                  .room-card__img
                    picture
                      //- source(type="image/webp" :srcSet="room.imgSrc.webp.srcSet")
                      //- source(type="image/avif" :srcSet="room.imgSrc.avif.srcSet")
                      //- source(type="image/jpeg" :srcSet="room.imgSrc.jpg.srcSet")
                      img(:src="room.imgSrc.jpg")
                  h3.room-card__title {{room.title[actualLocale]}}
                  .room-card__description {{room.content[actualLocale]}}
                  span.room-card__btn.btn
                    nuxt-link(:to="localePath('/rooms/'+ room.slug)" ) {{ translate.learnMore }}
        .card-slider__buttons
          button(@click.prevent="slidePrev" ref="prevBtn").card-slider__btn
            span
              svg(style="transform: rotate(180deg);")
                use(xlink:href="#angle")
          button(@click.prevent="slideNext" ref="nextBtn").card-slider__btn
            span
              svg
                use(xlink:href="#angle")

</template>

<script>
import { roomsData } from '~/static/rooms'

export default {
  name: 'AppRoomsSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    isFiltered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      roomCards: [],
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        wheelControl: false,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  computed: {
    sectionTitle () {
      return this.title
    },
    rooms () {
      const routeParam = this.$route.params.id ? this.$route.params.id : ''
      return roomsData.filter(room => room.slug !== routeParam)
    },
    translate () {
      return this.$t('common')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    },
    checkSlideOption (aboutSlide) {
      const slider = this.$refs.carousel
      const nextButton = this.$refs.nextBtn
      const prevButton = this.$refs.prevBtn
      nextButton.disabled = false
      prevButton.disabled = false
      if (aboutSlide.currentSlide === 0) {
        prevButton.disabled = true
        nextButton.disabled = false
      }
      if (aboutSlide.currentSlide === slider.slidesCount - Math.min(slider.config.itemsToShow, slider.slidesCount)) {
        nextButton.disabled = true
        prevButton.disabled = false
      }
    }
  }
}
</script>
