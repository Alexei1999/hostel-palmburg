<template lang="pug">
  .faqSection
    .container
      .wrapper
        h2.title FAQ
        app-accordion(:accordionContent="questions")
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/faq')") {{ this.$tt('common.showMore') }}
</template>

<script>
import { mapState } from 'vuex'
import AppAccordion from '~/components/Accordion'

export default {
  name: 'AppFaqSection',
  components: { AppAccordion },
  computed: {
    ...mapState('data', ['$tt', 'faq']),
    questions () {
      return this.faq?.slice(0, 3)
    }
  }
}
</script>
