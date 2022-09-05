<template lang="pug">
  div
    script(type="text/javascript" src="/bnovo.js")
    script(type="text/javascript" src="/booking.js" defer: true)
    AppSprites
    AppHeader
    app-intro
    Nuxt
    app-footer
    booking-modal
</template>
<script>
import { mapActions } from "vuex";
import BookingModal from "@/components/BookingModal";
import AppSprites from "~/components/Sprites";
import AppHeader from "~/components/layout/Header";
import AppLogo from "~/components/Logo";
import AppIntro from "~/components/Intro";
import AppFooter from "~/components/layout/Footer";

const baseUrl =
  process.env.NODE_ENV === "development" ? "" : "https://hostelpalmburg.ru";

export default {
  components: {
    BookingModal,
    AppFooter,
    AppIntro,
    AppLogo,
    AppHeader,
    AppSprites,
  },
  data() {
    return {
      shares: null,
      whyUsImg: null,
      roomsData: null,
      reviews: null,
      aboutUsImg: null,
      faq: null,
      services: null,
      rating: null,

      ru: null,
      en: null,
    };
  },
  async fetch() {
    this.setData({
      aboutUsImg: await this.$axios.$get(`${baseUrl}/about-us-img.json`),
      whyUsImg: await this.$axios.$get(`${baseUrl}/why-us.json`),
      sharesData: await this.$axios.$get(`${baseUrl}/shares.json`),
      roomsData: await this.$axios.$get(`${baseUrl}/rooms.json`),
      reviews: await this.$axios.$get(`${baseUrl}/reviews.json`),
      faq: await this.$axios.$get(`${baseUrl}/faq.json`),
      services: await this.$axios.$get(`${baseUrl}/services.json`),
      news: await this.$axios.$get(`${baseUrl}/news.json`),
      rating: await this.$axios.$get(`${baseUrl}/rating.json`),
      newHostels: await this.$axios.$get(`${baseUrl}/newHostels.json`),
    });

    this.ru = await this.$axios.$get(`${baseUrl}/ru.json`);
    this.en = await this.$axios.$get(`${baseUrl}/en.json`);
  },
  computed: {
    locale() {
      return this.$i18n.locale === "en" ? this.en : this.ru;
    },
  },
  watch: {
    locale(val) {
      if (!val) {
        return () => (typeof val === "string" ? " ".repeat(val.length) : "");
      }

      const translateFunction = (str) => {
        const target = str || val;

        if (!str || !val) {
          const target = str || val;
          return typeof target === "string" ? " ".repeat(target.length) : "";
        }

        try {
          const result = str.split(".").reduce((obj, field) => obj[field], val);
          return result;
        } catch {
          return typeof target === "string" ? " ".repeat(target.length) : "";
        }
      };

      this.setTranslate(translateFunction);
    },
  },
  methods: { ...mapActions("data", ["setData", "setTranslate"]) },
};
</script>
