<template lang="pug">
  .services
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').free }}
        app-services-cards(:items="this.services.free" :locale="this.$t('freeServices')")
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ this.$t('quote').title }}
          .quote__description {{ this.$t('quote').description }}
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').paid }}
        app-services-cards(:items="this.services.paid" :locale="this.$t('paidServices')")

</template>

<script>
import AppServicesCards from '~/components/services/ServicesCards'
import { servicesData } from '~/static/services'

export default {
  name: 'Services',
  components: { AppServicesCards },
  computed: {
    services () {
      return servicesData
    }
  }
}
</script>
