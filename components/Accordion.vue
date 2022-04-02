<template lang="pug">
  .accordion
    label(v-for="(tab,index) in accordionContent"  :key="index").accordion__tab.card
      input(type='radio' name='checkbox-accordion').accordion__input
      .accordion__header
        .accordion__title {{tab.title[actualLocale]}}
        svg.accordion__icon
          use(xlink:href="#angle")
      .accordion__content
        p {{tab.description[actualLocale]}}
</template>

<script>
export default {
  name: 'AppAccordion',
  props: {
    accordionContent: {
      type: Array,
      required: true
    }
  },
  computed: {
    actualLocale () {
      return this.$i18n.locale
    }
  }
}
</script>
