<template lang="pug">
  .room-current
    .container
      .wrapper
        .card-about
          .card-about__img
            picture
              //- source(type="image/webp" :srcSet="img.webp.srcSet")
              //- source(type="image/avif" :srcSet="img.avif.srcSet")
              //- source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="newsItem.image.jpg")
          .card-about__wrapper
            span
              h2.card-about__title {{newsItem.title && newsItem.title[actualLocale]}}
            span(v-html="newsItem && newsItem.content[actualLocale]")
            .card-about__buttons
              span.card-about__btn.btn
                nuxt-link(:to="localePath('/news')") {{translate.back}}
              span.card-about__btn.btn.btn--secondary
                nuxt-link(:to="localePath('/')") {{translate.toHomepage}}
    .rooms_section(v-if="newsSLiced.length")
     .container
      .wrapper
        .accordion
          h2.title {{this.$tt('newsSection.titleCurrent')}}
          app-news-section(:news="newsSLiced" :hoverBorder="true")

</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppNewsSection from '~/components/NewsSection'

export default {
  name: 'NewId',
  components: { AppNewsSection },
  validate ({ params }) {
    if (!this.news) { return true }

    for (const news of this.news) {
      if (news.slug === params.id) {
        return true
      }
    }
    return false
  },
  computed: {
    ...mapState('data', ['$tt', 'news']),
    newsItem () {
      return this.news?.find(news => news.slug === this.$route.params.id) ?? { image: { jpg: '' }, content: {} }
    },
    newsSLiced () {
      const filteredNews = this.news?.filter(news => news.slug !== this.$route.params.id)
      return filteredNews?.slice(0, 5) ?? []
    },
    translate () {
      return this.$tt('common')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  mounted () {
    if (process.browser) {
      const svg = document.getElementsByClassName('icon')
      for (let i = 0; i < svg.length; i++) {
        svg[i].removeAttribute('width')
        svg[i].removeAttribute('height')
        svg[i].getElementsByTagName('path')[0].remove()
      }
    }
  },
  methods: {
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
