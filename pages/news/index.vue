<template lang="pug">
  .faq(v-if="questions && questions.length")
    .container
      .wrapper(:style="{'padding-top': '0'}")
        app-shares
        h2.title(:style="{'text-transform': 'uppercase', 'margin-top': '40px'}") {{ $tt('newsSection.titleAll') }}
        app-news-section(:news="questions")
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
