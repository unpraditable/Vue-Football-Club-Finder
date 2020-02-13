<template>
  <div class="home">
    <h1>Find Football Club Here</h1>
    <h2>Select Your Country</h2>
    <Areas />
  </div>
</template>

<script>
// @ is an alias to /src
import Areas from '@/components/Areas.vue'

export default {
  name: 'Area',
  components: {
    Areas
  }
}
</script>
