<template lang="pug">
  .aboutUs-section
    .container
      .wrapper
        h2.title {{ translate.whyUs.title }}
        .aboutUs-section__cards
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg.card1ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs.card1.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card1.content }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg.card2ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs.card2.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card2.content }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg.card3ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs.card3.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card3.content }}
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/about-us')") {{ translate.common.showMore }}
</template>

<script>
import { whyUsImg } from '~/static/whyUs'

export default {
  name: 'AppAboutUs',
  data () {
    return {
      whyUsImg
    }
  },
  computed: {
    translate () {
      return {
        common: this.$t('common'),
        whyUs: this.$t('whyUs')
      }
    }
  }
}
</script>
