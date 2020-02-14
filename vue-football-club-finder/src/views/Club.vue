<template>
  <div class="home">
    <h1>Find Football Club Here</h1>
    <h2>Select Your Club</h2>
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
