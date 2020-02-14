<template>
  <div class="club-list-page">
    <header class="banner club-list-banner">
      <div class="container">
        <h1>Country</h1>
      </div>
    </header>
    <div class="container">
      <Clubs />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Clubs from '@/components/Clubs.vue'

export default {
  name: 'Club',
  components: {
    Clubs
  }
}
</script>
