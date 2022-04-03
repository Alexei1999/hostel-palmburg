<template lang="pug">
  .contacts
    .container
      .wrapper
        .card-about(style="margin:0 auto;max-width:1000px")
          .card-about__map
            app-google-map-section(v-if="currentMap === 'google'")
            app-yandex-map-section(v-if="currentMap === 'yandex'")
            .card-about__map-buttons
              button.card-about__map-btn(@click="currentMap = 'google'")
                img(src="@/assets/images/gmap.png")
              button.card-about__map-btn(@click="currentMap = 'yandex'")
                img(src="@/assets/images/yamap.png")
          .card-about__wrapper
            .card-about__content
              .card-about__contacts
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#phone")
                  a(href="tel:+74012374646") {{ translate.common.phone }}
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#envelop")
                  a(href="mailto:hostelpalmburg@gmail.com") hostelpalmburg@gmail.com
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#mobile-alt")
                  p +7 (963) 738 46 46
                  a(href="viber://chat?number=%2B79637384646" target="_blank")
                    svg.card-about__contact-icon.card-about__contact-icon--text
                      use(xlink:href="#viber")
                  a(href="https://wa.me/+79637384646" target="_blank")
                    svg.card-about__contact-icon.card-about__contact-icon--text
                      use(xlink:href="#whatsapp")
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#map-marker")
                  | {{ translate.common.address }}
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ translate.documents.title }}
          .quote__description {{ translate.documents.description }}
            a(href="/docs/dog_ru.docx" target="_blank" style="text-decoration: underline;") {{ translate.documents.link }}
</template>

<script>
import { mapState } from 'vuex'

import AppGoogleMapSection from '~/components/contacts/GoogleMapSection'
import AppYandexMapSection from '~/components/contacts/YandexMapSection'

export default {
  name: 'Contacts',
  components: {
    AppYandexMapSection,
    AppGoogleMapSection
  },
  data () {
    return {
      currentMap: 'google'
    }
  },
  computed: {
    ...mapState('data', ['$tt']),
    translate () {
      return {
        common: this.$tt('common'),
        documents: this.$tt('documents')
      }
    }
  }
}
</script>
