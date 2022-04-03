<template lang="pug">
  .faqSection
    .container
      .wrapper
        h2.title FAQ
        app-accordion(:accordionContent="questions")
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/faq')") {{ this.t && this.t.common.showMore }}
</template>

<script>
import AppAccordion from '~/components/Accordion'

export default {
  name: 'AppFaqSection',
  components: { AppAccordion },
  props: {
    faq: {
      type: Array,
      default: () => []
    },
    t: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    questions () {
      return this.faq?.slice(0, 3)
    }
  }
}
</script>
