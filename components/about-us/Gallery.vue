<template lang="pug">
  .gallery
    .wrapper
      h2.title {{ translate.galleryTitle }}
      hooper.gallery__slider(ref="carousel1" :settings="hooperSettings" @slide="checkSlideOption")
        slide(v-for="(img,i) in galleryImages" :key="i").gallery__slide
          .gallery__img
            picture
              //- source(type="image/webp" :srcSet="img.webp.srcSet")
              //- source(type="image/avif" :srcSet="img.avif.srcSet")
              //- source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img.jpg")
      .gallery__buttons
        button(@click.prevent="slidePrev" ref="prevBtn").gallery__btn
          span
            svg(style="transform: rotate(180deg);")
              use(xlink:href="#angle")
        button(@click.prevent="slideNext" ref="nextBtn").gallery__btn
          span
            svg
              use(xlink:href="#angle")
</template>
<script>
export default {
  name: 'AppGallery',
  props: {
    aboutUsImg: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        wheelControl: false,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          1200: {
            itemsToShow: 2
          },
          1092: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  computed: {
    galleryImages () { return this.aboutUsImg?.galery ?? [] },
    translate () {
      return this.$t('aboutUs')
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel1.slidePrev()
    },
    slideNext () {
      this.$refs.carousel1.slideNext()
    },
    checkSlideOption (aboutSlide) {
      const slider = this.$refs.carousel1
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
