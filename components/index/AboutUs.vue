<template lang="pug">
  .aboutUs-section
    .container
      .wrapper
        h2.title {{ translate.whyUs && translate.whyUs.title }}
        .aboutUs-section__cards
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card1ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs && translate.whyUs.card1.title }}
            .aboutUs-section__card-description {{ translate.whyUs && translate.whyUs.card1.content }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card2ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs && translate.whyUs.card2.title }}
            .aboutUs-section__card-description {{ translate.whyUs && translate.whyUs.card2.content }}
          .aboutUs-section__card
            img.aboutUs-section__card-icon(:src='whyUsImg && whyUsImg.card3ImgSrc.jpg')
            .aboutUs-section__card-title {{ translate.whyUs && translate.whyUs.card3.title }}
            .aboutUs-section__card-description {{ translate.whyUs && translate.whyUs.card3.content }}
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/about-us')") {{ translate.common && translate.common.showMore }}
</template>

<script>
export default {
  name: 'AppAboutUs',
  props: {
    whyUsImg: {
      type: Object,
      default: () => null
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
