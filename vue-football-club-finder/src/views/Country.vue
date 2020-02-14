<template>
  <div class="home">
    
    <header class="banner country-list-banner">
      <div class="container">
        <h1>Countries</h1>
      </div>
    </header>
    <div class="container">
      <Countries />
    </div>
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
