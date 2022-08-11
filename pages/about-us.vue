<template lang="pug">
  .about-us
    .container
      app-about-us-card(:aboutUsImg="aboutUsImg")
      app-gallery
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ translate.documents.title }}
          .quote__description {{ translate.documents.description }}
            a(href="/oferta.pdf" target="_blank" style="text-decoration: underline;") {{ translate.documents.link }}
</template>

<script>
import { mapState } from 'vuex'
import AppAboutUsCard from '~/components/about-us/AboutUsCard'
import AppGallery from '~/components/about-us/Gallery'

export default {
  name: 'AboutUs',
  components: {
    AppGallery,
    AppAboutUsCard
  },
  computed: {
    ...mapState('data', ['$tt', 'aboutUsImg']),
    translate () {
      return {
        common: this.$tt('common'),
        documents: this.$tt('documents')
      }
    }
  }
}
</script>
