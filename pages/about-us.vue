<template lang="pug">
  .about-us
    .container
      app-about-us-card
      app-gallery
</template>

<script>
import AppAboutUsCard from '~/components/about-us/AboutUsCard'
import AppGallery from '~/components/about-us/Gallery'

export default {
  name: 'AboutUs',
  components: {
    AppGallery,
    AppAboutUsCard
  }
}
</script>
