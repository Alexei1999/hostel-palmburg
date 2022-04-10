<template lang="pug">
  .faqSection
    .container
      .wrapper(:style="{'padding-bottom': '0'}")
        h2.title(:style="{'text-transform': 'uppercase'}") {{ $tt('newsSection.titleAll') }}
        app-list-section(:news="newsSliced")
        span.btn.btn--secondary.btn--section
          nuxt-link(:to="localePath('/news')") {{ this.$tt('common.showMore') }}
</template>

<script>
import { mapState } from 'vuex'
import AppListSection from '~/components/ListSection'

export default {
  name: 'AppNews',
  components: {
    AppListSection
  },
  computed: {
    ...mapState('data', ['$tt', 'news']),
    newsSliced () {
      return this.news?.slice(0, 3) ?? []
    }
  }
}
</script>
