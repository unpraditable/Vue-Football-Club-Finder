<template>
  <div class="home">
    <h1>Find Football Club Here</h1>
    <h2>Select Your Country</h2>
    <Countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from '@/components/Countries.vue'

export default {
  name: 'Country',
  components: {
    Countries
  }
}
</script>
