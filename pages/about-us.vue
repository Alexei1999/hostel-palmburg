<template lang="pug">
  .about-us
    .container
      app-about-us-card(:aboutUsImg="aboutUsImg")
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
  },
  async asyncData ({ $axios }) {
    return {
      aboutUsImg: await $axios.$get('/about-us-img.json')
    }
  },
  data () {
    return {
      aboutUsImg: null
    }
  }
}
</script>
