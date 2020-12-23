<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  beforeCreate () {
    this.$store.commit("tenant/setDomain", window.location.hostname);
    console.log(`Using domain: ${window.location.hostname}`);
  },
}
</script>
