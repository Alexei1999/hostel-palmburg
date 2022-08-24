<template lang="pug">
  .reviews_section(v-if="reviews && reviews.length")
    .container(ref="container")
      .wrapper.wrapper--slider(style="padding-bottom: 40px;")
        h2.title {{this.$tt('reviewsSection.titleAll')}}
        .card-slider
          hooper(ref="carousel" :wheelControl="false" @slide="checkSlideOption" :key="Boolean(reviews)")
            slide(v-for="(review,idx) in reviews" :key="idx")
              .review-card__container(:style="{ 'transition': 'visibility, height 0.1s', 'visibility': currentSlide !== idx ? 'hidden' : 'inherit', 'height': currentSlide !== idx ? '0px' : 'auto' }")
                .review-card
                  .review-card__wrapper
                    .review-card__img
                      picture
                        //- source(type="image/webp" :srcSet="room.imgSrc.webp.srcSet")
                        //- source(type="image/avif" :srcSet="room.imgSrc.avif.srcSet")
                        //- source(type="image/jpeg" :srcSet="room.imgSrc.jpg.srcSet")
                        img(:src="review.photo.jpg")
                  h3.review-card__title {{review && review.name[actualLocale]}}
                  .review-card__description {{review && review.text[actualLocale]}}

        .card-slider__buttons
          button(@click.prevent="slidePrev" ref="prevBtn").card-slider__btn
            span
              svg(style="transform: rotate(180deg);")
                use(xlink:href="#angle")
          button(@click.prevent="slideNext" ref="nextBtn").card-slider__btn
            span
              svg
                use(xlink:href="#angle")
        .booking(style="padding-top: 46px; display: flex; justify-content: center;")
          .feedback(id="feedback")
            .feedback__company
              picture
                img(src="@/assets/images/booking-logo.svg" alt="Логотип сервиса Booking.com")
            p.feedback__text {{ rating && rating.text[actualLocale] }}
            span.feedback__num {{ rating && rating.rating }}
  </div>

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
      reviewsCards: [],
      currentSlide: -1
    }
  },
  computed: {
    ...mapState('data', ['reviews', 'rating', '$tt']),
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
    scrollToReviews () {
      this.$nextTick(() => {
        this.$refs.container.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
      })
    },
    slidePrev () {
      this.$refs.carousel.slidePrev()
      this.scrollToReviews()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
      this.scrollToReviews()
    },
    checkSlideOption (aboutSlide) {
      const slider = this.$refs.carousel
      const nextButton = this.$refs.nextBtn
      const prevButton = this.$refs.prevBtn

      if (slider.currentSlide !== null || !isNaN(slider.currentSlide)) {
        this.currentSlide = slider.currentSlide
      }

      nextButton.disabled = false
      prevButton.disabled = false
      if (aboutSlide.currentSlide === 0) {
        prevButton.disabled = true
        nextButton.disabled = false
      }
      if (
        aboutSlide.currentSlide ===
        slider.slidesCount -
          Math.min(slider.config.itemsToShow, slider.slidesCount)
      ) {
        nextButton.disabled = true
        prevButton.disabled = false
      }
    }
  }
}
</script>
