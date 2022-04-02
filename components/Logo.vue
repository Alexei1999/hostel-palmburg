<template lang="pug">
  .logo
    nuxt-link(:to="localePath('/')")
      img.logo__img(src="@/assets/images/logo_hostel.svg")
</template>

<script>
export default {
  name: 'AppLogo'
}
</script>
