<template lang="pug">
  .new-hostels(v-if="canRender")
    .container
      .wrapper
        h2.title {{ this.newHostels && this.newHostels.titlaAll[this.$i18n.locale] }}
        .new-hostels__cards
          .new-hostels__card(v-if="icons.hostel1")
            img.new-hostels__card-icon(:src='icons.hostel1')
            .new-hostels__card_text
              a.new-hostels__card-title(:href="hostel1.href" target="_blank") {{ this.hostel1.title[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel1.content1[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel1.content2[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel1.content3[this.$i18n.locale] }}
          .new-hostels__card(v-if="icons.hostel2")
            img.new-hostels__card-icon(:src='icons.hostel2')
            .new-hostels__card_text
              a.new-hostels__card-title(:href="hostel2.href" target="_blank") {{ this.hostel2.title[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel2.content1[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel2.content2[this.$i18n.locale] }}
              .new-hostels__card-description {{ this.hostel2.content3[this.$i18n.locale] }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppNewHostels',
  computed: {
    ...mapState('data', ['newHostels', '$tt']),
    icons () {
      return {
        hostel1: this.newHostels?.hostel1?.image?.jpg,
        hostel2: this.newHostels?.hostel2?.image?.jpg
      }
    },
    canRender () {
      return Object.values(this.icons).some(Boolean)
    },
    hostel1 () {
      return this.newHostels?.hostel1 ?? { image: { }, title: { } }
    },
    hostel2 () {
      return this.newHostels?.hostel2 ?? { image: { }, title: { } }
    }
  }
}
</script>
