<template lang="pug">
  .faq
    .container
      .wrapper
        app-accordion(:accordionContent="questions")
</template>

<script>
import AppAccordion from '~/components/Accordion'
import { faq } from '~/content/faq'

export default {
  name: 'Faq',
  components: { AppAccordion },
  computed: {
    questions () {
      return faq
    }
  }
}
</script>
