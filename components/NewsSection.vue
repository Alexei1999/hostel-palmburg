<template lang="pug">
  .accordion
    template(v-for="(tab,index) in newsFiltered" )
      nuxt-link.accordion__tab.card.news-section(:class="{ 'news-section--hover-normal': !isHoverBorder, 'news-section--hover-border': isHoverBorder }" :to="localePath('/news/' + (tab.slug ? tab.slug : ''))" :key="index")
        .news-section__image
          img(:src="tab.image.jpg")
        .news-section__content
          .news-section__content_title {{tab.title[actualLocale]}}
          .news-section__content_description {{tab.description[actualLocale]}}
          .news-section__content_date {{tab.date}}
</template>

<script>
export default {
  name: 'AppNewsSection',
  props: {
    news: {
      type: Array,
      default: () => []
    },
    hoverBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    actualLocale () {
      return this.$i18n.locale
    },
    newsFiltered () {
      const routeParam = this.$route.params.id ? this.$route.params.id : ''
      return this.news?.filter(room => room.slug !== routeParam)
    },
    isHoverBorder () {
      return this.hoverBorder
    }
  }
}
</script>
