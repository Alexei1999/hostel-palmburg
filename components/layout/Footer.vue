<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__logo
          AppLogo
          .footer__subLogo
            p.footer__subtitle {{ translate.footer.title }}
            p.footer__slug {{ translate.footer.titleSlug }}
            span.footer__btn.btn.btn--secondary
              button(@click="toggleBookingModal") {{ translate.common.booking }}
        .footer__nav
          h3.footer__title {{ translate.footer.navigation }}
          ul.footer__nav-list
            li(v-for='(link,index) in links' :key="index")
              nuxt-link.footer__nav-link(:to="localePath(link.path)" exact) {{link.name[actualLocale]}}
        .footer__contacts
          h3.footer__title {{ translate.footer.contacts }}
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#mobile-alt")
            a(href="tel:+79637384646") +7 (963) 738 46 46
            a(href="viber://chat?number=%2B79637384646" target="_blank")
              svg.footer__contact-icon
                use(xlink:href="#viber")
            a(href="https://wa.me/+79637384646" target="_blank")
              svg.footer__contact-icon
                use(xlink:href="#whatsapp")
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#phone")
            a(href="tel:+74012374646") {{ translate.common.phone }}
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#envelop")
            a(href="mailto:hostelpalmburg@gmail.com") hostelpalmburg@gmail.com
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#map-marker")
            p {{ translate.common.address }}
          //.footer__contact
          //  a(href="viber://chat?number=%2B79637384646" target="_blank")
          //    svg.footer__contact-icon
          //      use(xlink:href="#viber")
          //  a(href="https://wa.me/+79637384646" target="_blank")
          //    svg.footer__contact-icon
          //      use(xlink:href="#whatsapp")
      .footer__links
        a(v-for='(link) in links2' :key="link.id" target="_blank" :href="`/${link.id}.pdf`") {{link[actualLocale]}}
    .rope-border
    .footer__center-img
    .footer__bottom-img
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppLogo from '~/components/Logo'
import { linksNav } from '~/content/links'

export default {
  name: 'AppFooter',
  data () {
    return {
      links2: [
        {
          id: 'privacyPolicyHostelPalmburg',
          ru: 'Политика конфиденциальности Хостел Пальмбург',
          en: 'Privacy Policy Hostel Palmburg'
        },
        {
          id: 'consumerCornerHostelPalmburgWithLaws',
          ru: 'Уголок потребителя Хостел Пальмбург с законами',
          en: 'Hostel Palmburg User Agreement with Laws'
        },
        {
          id: 'userAgreementPalmburg',
          ru: 'Пользовательское соглашение Пальмбург',
          en: 'User Agreement Hostel Palmburg'
        },
        {
          id: 'rulesForStayingAtHostelPalmburg',
          ru: 'Правила проживания в Хостеле Пальмбург',
          en: 'Rules for staying at Hostel Palmburg'
        },
        {
          id: 'consumerCornerHostelPalmburg',
          ru: 'Уголок потребителя Хостел Пальмбург',
          en: 'Consumer Corner Hostel Palmburg'
        }
      ]
    }
  },
  components: {
    AppLogo
  },
  computed: {
    ...mapState('data', ['$tt']),
    links () {
      return linksNav
    },
    translate () {
      return {
        footer: this.$tt('footer'),
        common: this.$tt('common')
      }
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  methods: { ...mapActions('layout', ['toggleBookingModal']) }
}
</script>
