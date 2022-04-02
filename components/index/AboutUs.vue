<template lang="pug">
  .aboutUs-section
    .container
      .wrapper
        h2.title {{ translate.whyUs.title }}
        .aboutUs-section__cards
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#map")
            .aboutUs-section__card-title {{ translate.whyUs.card1.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card1.content }}
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#sofa")
            .aboutUs-section__card-title {{ translate.whyUs.card2.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card2.content }}
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#headset")
            .aboutUs-section__card-title {{ translate.whyUs.card3.title }}
            .aboutUs-section__card-description {{ translate.whyUs.card3.content }}
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/about-us')") {{ translate.common.showMore }}
</template>

<script>
export default {
  name: 'AppAboutUs',
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
