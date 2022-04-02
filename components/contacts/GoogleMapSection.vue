<template>
  <div class="map">
    <div class="map__init">
      <client-only>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0252847808058!2d20.600835484011736!3d54.69419346371548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDQxJzM5LjciTiAyMMKwMzYnMDUuNiJF!5e0!3m2!1sru!2sru!4v1618489661339!5m2!1sru!2sru"
          width="100%"
          height="550"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGoogleMapSection'
}
</script>

<style scoped>

</style>
