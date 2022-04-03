<template lang="pug">
  .wrapper
    .card-about
      hooper(ref="carousel" :settings="hooperSettings").card-about__slider
        slide.card-about__slide(v-for="(img,i) in aboutImages" :key="i")
          .card-about__img
            picture
              //- source(type="image/webp" :srcSet="img.webp.srcSet")
              //- source(type="image/avif" :srcSet="img.avif.srcSet")
              //- source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img.jpg")
        hooper-navigation(slot="hooper-addons")
        hooper-pagination(slot="hooper-addons")
      .card-about__wrapper
        span(v-html="content")
        .card-about__buttons
          span.card-about__btn.btn
            nuxt-link(:to="localePath('/faq')") {{ translate.living }}
          span.card-about__btn.btn.btn--secondary
            nuxt-link(:to="localePath('/contacts')") {{ translate.contactsUs }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppAboutUsCard',
  data () {
    return {
      hooperSettings: {
        wheelControl: false
      }
    }
  },
  computed: {
    ...mapState('data', ['aboutUsImg', '$tt']),
    aboutImages () {
      return this.aboutUsImg?.slider ?? []
    },
    content () {
      return this.$tt('aboutUsContent')
    },
    translate () {
      return this.$tt('aboutUs')
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
  }
}
</script>
