<template lang="pug">
  .faq
    .container
      .wrapper
        app-accordion(:accordionContent="questions")
</template>

<script>
import { mapState } from 'vuex'
import AppAccordion from '~/components/Accordion'

export default {
  name: 'Faq',
  components: { AppAccordion },
  computed: {
    ...mapState('data', ['faq']),
    questions () {
      return this.faq ?? []
    }
  }
}
</script>
