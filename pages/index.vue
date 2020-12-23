<template>
  <div class="container mx-auto md:my-6 p-5 rounded-2xl shadow bg-gray-100 border">
    <div>
      <lottie-player class="mx-auto" src="https://assets6.lottiefiles.com/packages/lf20_FphqrJ.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
    <hr class="my-2">
    <div class="text-center">
      <h1 class="text-2xl font-bold">NuxtJS Multiple Domain Detection</h1>
      <h2 class="text-xl"><b>Serving From:</b>&nbsp;{{$store.state.tenant.domain}}</h2>
      <h3 class="text-lg my-4">
        Fixed image for the domain.
        <nuxt-link to="/randomImage" class="font-bold text-blue-700 hover:text-blue-500">View Random Image.</nuxt-link>
      </h3>
      <img :src="uniquePhotoUrl" class="mx-auto rounded-2xl shadow">
    </div>

    <hr class="my-4">

    <div class="text-center">
      <h3 class="text-lg">
        Nuxt is detecting the domain from which the request was made in the beforeCreate method of the Vue lifecycle.
      </h3>

      <img src="/vue-lifecycle.png" class="mt-2 rounded-2xl shadow mx-auto">

    </div>

  </div>
</template>

<script>
  export default {
    transition: "default",
    computed: {
      uniquePhotoUrl() {
        return `https://picsum.photos/seed/${this.$store.state.tenant.domain}/1080/720`;
      }
    },
  }
</script>

