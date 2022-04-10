<template lang="pug">
  .accordion
    div(v-for="(tab,index) in news" :key="index").accordion__tab.card.news
      .news__image
        img(:src="tab.image.jpg")
      .news__content
        .news__content_title {{tab.title[actualLocale]}}
        .news__content_description {{tab.description[actualLocale]}}
        .news__content_date {{tab.date}}
</template>

<script>
export default {
  name: 'AppListSection',
  props: {
    news: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    actualLocale () {
      return this.$i18n.locale
    }
  },
  watch: {
    news (val) {
      console.log('piska', val)
    }
  }
}
</script>
