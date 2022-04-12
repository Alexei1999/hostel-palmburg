<template lang="pug">
  .aboutUs-section
    .container
      .wrapper
        h2.title {{ this.$tt('whyUs.title') }}
        .aboutUs-section__cards
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card1ImgSrc.jpg')
            .aboutUs-section__card-title {{ this.$tt('whyUs.card1.title') }}
            .aboutUs-section__card-description {{ this.$tt('whyUs.card1.content') }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card2ImgSrc.jpg')
            .aboutUs-section__card-title {{ this.$tt('whyUs.card2.title') }}
            .aboutUs-section__card-description {{ this.$tt('whyUs.card2.content') }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card3ImgSrc.jpg')
            .aboutUs-section__card-title {{this.$tt('whyUs.card3.title') }}
            .aboutUs-section__card-description {{ this.$tt('whyUs.card3.content') }}
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/about-us')") {{ translate.common && translate.common.showMore }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppAboutUs',
  computed: {
    ...mapState('data', ['whyUsImg', '$tt']),
    translate () {
      return {
        common: this.$tt('common'),
        whyUs: this.$tt('whyUs')
      }
    },
    canRender () {
      return Boolean(this.whyUsImg)
    }
  }
}
</script>
