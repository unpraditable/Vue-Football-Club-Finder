<template>
  <div class="home">
    <h1>Find Player Here</h1>
    <h2>Select Your Player</h2>
    <PlayerList />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerList from '@/components/PlayerList.vue'

export default {
  name: 'ClubProfile',
  components: {
    PlayerList
  }
}
</script>
