<template lang="pug">
  .error-page
    .container
      .wrapper
        .error-page__wrapper
          h1.error-page__status-code {{ error.statusCode }}
          h2.error-page__title {{ error.message }}
          p.error-page__info The page you are looking for was moved, removed, renamed or might never existed.
          span.error-page__btn.btn.btn--primary
            nuxt-link(to="/") Home page
</template>

<script>
import AppHeader from '~/components/layout/Header'
import AppIntro from '~/components/Intro'
import AppFooter from '~/components/layout/Footer'
export default {
  components: { AppFooter, AppIntro, AppHeader },
  props: {
    error: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
