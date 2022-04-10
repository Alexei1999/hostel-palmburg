<template lang="pug">
  .faq
    .container
      .wrapper(:style="{'padding-top': '0'}")
        app-shares
        h2.title(:style="{'text-transform': 'uppercase'}") {{ $tt('newsSection.titleAll') }}
        app-news-section(:news="news")
</template>

<script>
import { mapState } from 'vuex'
import AppNewsSection from '~/components/NewsSection'
import AppShares from '~/components/index/Shares'

export default {
  name: 'News',
  components: { AppNewsSection, AppShares },
  computed: {
    ...mapState('data', ['news', '$tt']),
    questions () {
      return this.news ?? []
    }
  }
}
</script>
