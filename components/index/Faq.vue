<template lang="pug">
  .faqSection
    .container
      .wrapper
        h2.title FAQ
        app-accordion(:accordionContent="questions")
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/faq')") {{ this.$t('common').showMore }}
</template>

<script>
import AppAccordion from '~/components/Accordion'
import { faq } from '~/content/faq'

export default {
  name: 'AppFaqSection',
  components: { AppAccordion },
  computed: {
    questions () {
      return faq.slice(0, 3)
    }
  }
}
</script>
