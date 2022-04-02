<template lang="pug">
  .services-cards
    .services-cards__card-wrapper(v-for="(service,key) in services" :key="key")
      .services-cards__card
        .services-cards__card-icon
          svg
            use(:xlink:href="'#'+key")
        h3.services-cards__card-title {{service}}
</template>

<script>
export default {
  name: 'AppServicesCards',
  props: {
    services: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
