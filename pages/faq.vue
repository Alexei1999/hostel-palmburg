<template lang="pug">
  .faq
    .container
      .wrapper
        app-accordion(:accordionContent="questions")
</template>

<script>
import AppAccordion from '~/components/Accordion'

export default {
  name: 'Faq',
  components: { AppAccordion },
  async asyncData ({ $axios }) {
    return {
      faq: await $axios.$get('/faq.json')
    }
  },
  data () {
    return {
      faq: null
    }
  },
  computed: {
    questions () {
      return this.faq ?? []
    }
  }
}
</script>
