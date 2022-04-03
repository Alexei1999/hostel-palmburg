<template lang="pug">
  .intro(:class="getIntroClass")
    .rope-border
    .intro__background
      picture
        //- source(type="image/webp" :srcSet="getBgImage.webp.srcSet")
        //- source(type="image/avif" :srcSet="getBgImage.avif.srcSet")
        //- source(type="image/jpeg" :srcSet="getBgImage.jpeg.srcSet")
        img(:src="getBgImage")
    .intro__wrapper
      .container
        .intro__content
          h1.intro__title {{ getPageName }}
          p.intro__slug {{ this.$t('introTitle').indexSlug }}
          p.intro__subtitle {{ this.$t('introTitle').subtitle }}
        .intro__footer
          span.intro__btn.btn.btn--secondary
            button(@click="toggleBookingModal") {{ this.$t('common').booking }}
</template>

<script>
import { mapActions } from 'vuex'
import { introBackgrounds } from '@/content/introBackgrounds'

export default {
  name: 'AppIntro',
  data () {
    return {
      currentPageTitle: '',
      introBackgrounds: '',
      roomsData: null
    }
  },
  async fetch () {
    this.roomsData = await this.$axios.$get('/rooms.json')
  },
  computed: {
    getRouterParam () {
      return this.$route.params.id
    },
    getRoomName () {
      const param = this.getRouterParam

      const slugs = Object.values(this.roomsData?.map(room => room.slug) ?? {})

      if (!slugs.includes(param)) {
        return {
          title: 'An error has occurred',
          image: 'intro--error-page'
        }
      }
      return {
        title: this.$t(`roomsTitles.${param}`),
        image: `intro--${param}`
      }
    },

    getPageName () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
      } catch (e) {
        return 'An error has occurred'
      }
      switch (routeName) {
        case 'index':
          return this.$t('introTitle.index')
        case 'about-us':
          return this.$t('introTitle.aboutUs')
        case 'rooms':
          return this.$t('introTitle.rooms')
        case 'services':
          return this.$t('introTitle.services')
        case 'faq':
          return this.$t('introTitle.faq')
        case 'contacts':
          return this.$t('introTitle.contacts')
        case 'rooms-id':
          return this.getRoomName.title
        default:
          return routeName
      }
    },
    getIntroClass () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
      } catch (e) {
        return 'intro--error-page'
      }
      switch (routeName) {
        case 'index':
          return 'intro--main'
        case 'about-us':
          return 'intro--about'
        case 'rooms':
          return 'intro--rooms'
        case 'services':
          return 'intro--services'
        case 'faq':
          return 'intro--faq'
        case 'contacts':
          return 'intro--contacts '
        case 'rooms-id':
          return this.getRoomName.image
        default:
          return 'intro--error-page'
      }
    },
    getBgImage () {
      const param = this.getRouterParam
      const room = this.roomsData?.find(room => room.slug === param)

      if (room?.background?.jpg) {
        return room.background.jpg
      }

      const route = this.$route.path
        .slice()
        .replace('en', '')
        .replace('//', '/')
      return introBackgrounds[route]?.jpg ?? ''
    }
  },
  methods: {
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
<style lang="scss">
.intro {
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media all and (orientation: portrait) {
      img {
        width: auto;
        height: 100%;
      }
    }
  }
  &--main {
    .intro__background {
      img {
        @media screen and (max-width: 1300px) {
          width: auto;
          height: 100%;
        }
      }
    }
  }
}
</style>
