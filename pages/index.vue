<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-100 min-h-screen">
      <Navbar />
      <div class="flex h-screen">
        <MainCard />
      </div>
    </div>
    <div
      class="fixed bottom-0 right-0 mb-2 mr-2 text-gray-800 text-xs bg-teal-200
             py-1 px-3 rounded-full shadow-md"
    >
      Built with Nuxt.js + Tailwind CSS by
      <a class="text-green-900 underline" href="https://ign.uy">@iign</a>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MainCard from '../components/MainCard'
export default {
  components: {
    Navbar,
    MainCard
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
