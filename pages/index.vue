<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-200 min-h-screen">
      <Navbar />
      <div class="flex min-h-screen pt-12">
        <MainCard />
      </div>
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
