<template lang="pug">
  .reviews_section
    .container
      .wrapper.wrapper--slider
        h2.title {{this.$tt('reviewsSection.titleAll')}}
        .card-slider
          hooper(ref="carousel" :wheelControl="false" @slide="checkSlideOption" :key="Boolean(reviews)")
            slide(v-for="(review,idx) in reviews" :key="idx")
              .review-card__container
                .review-card
                  .review-card__wrapper
                    .review-card__img
                      picture
                        //- source(type="image/webp" :srcSet="room.imgSrc.webp.srcSet")
                        //- source(type="image/avif" :srcSet="room.imgSrc.avif.srcSet")
                        //- source(type="image/jpeg" :srcSet="room.imgSrc.jpg.srcSet")
                        img(:src="review.photo.jpg")
                  h3.review-card__title {{review.name[actualLocale]}}
                  .review-card__description {{review.text[actualLocale]}}

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
import { mapState } from 'vuex'

export default {
  name: 'AppReviews',
  props: {
    isFiltered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      reviewsCards: []
    }
  },
  computed: {
    ...mapState('data', ['reviews', '$tt']),
    sectionTitle () {
      return this.title
    },
    translate () {
      return this.$tt('common')
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
      if (aboutSlide.currentSlide === (slider.slidesCount - Math.min(slider.config.itemsToShow, slider.slidesCount))) {
        nextButton.disabled = true
        prevButton.disabled = false
      }
    }
  }
}
</script>
