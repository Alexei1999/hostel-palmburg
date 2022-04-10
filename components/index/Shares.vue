<template lang="pug">
  .shares-section(v-if="canRender")
    .container
      .wrapper
        h2.title {{ this.$tt('shares.title') }}
        .shares-section__cards
          .shares-section__card(v-if="icons.share1")
            img.shares-section__card-icon(:src='icons.share1')
            .shares-section__card_text
              .shares-section__card-title {{ this.$tt('shares.share1.title') }}
              .shares-section__card-description {{ this.$tt('shares.share1.description') }}
          .shares-section__card(v-if="icons.share2")
            img.shares-section__card-icon(:src='icons.share2')
            .shares-section__card_text
              .shares-section__card-title {{ this.$tt('shares.share2.title') }}
              .shares-section__card-description {{ this.$tt('shares.share2.description') }}
          .shares-section__card(v-if="icons.share3")
            img.shares-section__card-icon(:src='icons.share3')
            .shares-section__card_text
              .shares-section__card-title {{this.$tt('shares.share3.title') }}
              .shares-section__card-description {{ this.$tt('shares.share3.description') }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppShares',
  computed: {
    ...mapState('data', ['sharesData', '$tt']),
    icons () {
      return {
        share1: this.sharesData?.share1?.image?.jpg,
        share2: this.sharesData?.share2?.image?.jpg,
        share3: this.sharesData?.share3?.image?.jpg
      }
    },
    canRender () {
      return Object.values(this.icons).some(Boolean)
    }
  }
}
</script>
