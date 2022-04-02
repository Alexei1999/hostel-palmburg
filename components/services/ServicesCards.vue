<template lang="pug">
  .services-cards
    .services-cards__card-wrapper(v-for="({ slug, imgSrc }, idx) in items" :key="slug")
      .services-cards__card
        .services-cards__card-icon
          img(:src="imgSrc.jpg")
        h3.services-cards__card-title {{ locale[slug] }}
</template>

<script>
export default {
  name: 'AppServicesCards',
  props: {
    items: {
      type: Array,
      default: () => {}
    },
    locale: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
