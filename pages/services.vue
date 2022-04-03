<template lang="pug">
  .services
    .container
      .wrapper
        h2.title {{ this.$tt('serviceTypes').free }}
        app-services-cards(:items="this.services && this.services.free" :locale="this.$tt('freeServices')")
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ this.$tt('quote').title }}
          .quote__description {{ this.$tt('quote').description }}
    .container
      .wrapper
        h2.title {{ this.$tt('serviceTypes').paid }}
        app-services-cards(:items="this.services && this.services.paid" :locale="this.$tt('paidServices')")

</template>

<script>
import { mapState } from 'vuex'
import AppServicesCards from '~/components/services/ServicesCards'

export default {
  name: 'Services',
  components: { AppServicesCards },
  computed: {
    ...mapState('data', ['$tt', 'services'])
  }
}
</script>
