<template lang="pug">
  .wrapper
    .card-about
      hooper(ref="carousel" :settings="hooperSettings").card-about__slider
        slide.card-about__slide(v-for="(img,i) in aboutImages" :key="i")
          .card-about__img
            picture
              source(type="image/webp" :srcSet="img.webp.srcSet")
              //- source(type="image/avif" :srcSet="img.avif.srcSet")
              source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img.jpg.src")
        hooper-navigation(slot="hooper-addons")
        hooper-pagination(slot="hooper-addons")
      .card-about__wrapper
        h2.card-about__title {{ translate.title }}
        .card-about__content
          p.card-about__text {{ translate.content[0] }}
          p.card-about__text {{ translate.content[1] }}
          p.card-about__text {{ translate.content[2] }}
        h2.card-about__title {{ translate.advantagesTitle }}
        .card-about__content(v-for="(advantage,idx) in translate.advantages" :key="idx")
          h3.card-about__text-title {{advantage.title}}
          p.card-about__text {{advantage.description}}
        .card-about__buttons
          span.card-about__btn.btn
            nuxt-link(:to="localePath('/faq')") {{ translate.living }}
          span.card-about__btn.btn.btn--secondary
            nuxt-link(:to="localePath('/contacts')") {{ translate.contactsUs }}
</template>

<script>
export default {
  name: 'AppAboutUsCard',
  data () {
    return {
      aboutImages: [
        {
          jpg: require('@/assets/images/about-us/1.jpg?resize'),
          webp: require('@/assets/images/about-us/1.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/1.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/2.jpg?resize'),
          webp: require('@/assets/images/about-us/2.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/2.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/3.jpg?resize'),
          webp: require('@/assets/images/about-us/3.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/3.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/4.jpg?resize'),
          webp: require('@/assets/images/about-us/4.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/4.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/5.jpg?resize'),
          webp: require('@/assets/images/about-us/5.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/5.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/6.jpg?resize'),
          webp: require('@/assets/images/about-us/6.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/6.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/7.jpg?resize'),
          webp: require('@/assets/images/about-us/7.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/7.jpg?resize&f1ormat=avif')
        },
        {
          jpg: require('@/assets/images/about-us/8.jpg?resize'),
          webp: require('@/assets/images/about-us/8.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/8.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/9.jpg?resize'),
          webp: require('@/assets/images/about-us/9.jpg?resize&format=webp'),
          // // avif: require('@/assets/images/about-us/9.jpg?resize&format=avif')
        }
      ],
      hooperSettings: {
        wheelControl: false
      }
    }
  },
  computed: {
    translate () {
      return this.$t('aboutUs')
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
