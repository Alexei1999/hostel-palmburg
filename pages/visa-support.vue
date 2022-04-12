<template lang="pug">
  .visa-support
    .container
      .wrapper
        iframe(frameborder="0" name="bplformtopiframewindow" width="100%" scrolling="no" style="min-height: 700px;" :src="'https://www.bpltech.pro/invitation/kgdhostels/' + (actualLocale ? actualLocale : 'en')")
        script(type="text/javascript" src="https://www.bpltech.pro/public/js/iframeResizer.min.js" @load="setResizerLoaded")
</template>

<script>
export default {
  name: 'VisaSupport',
  data () {
    return {
      isMounted: false,
      isResizerLoaded: false
    }
  },
  computed: {
    actualLocale () {
      return this.$i18n.locale
    },
    canResize () {
      return this.isMounted && this.isResizerLoaded
    }
  },
  watch: {
    canResize (newVal) {
      if (!newVal) { return }

      window?.iFrameResize({ heightCalculationMethod: 'max', enableInPageLinks: true })
    }
  },
  mounted () {
    this.isMounted = true
  },
  methods: {
    setResizerLoaded () {
      this.isResizerLoaded = true
    }
  }
}
</script>
