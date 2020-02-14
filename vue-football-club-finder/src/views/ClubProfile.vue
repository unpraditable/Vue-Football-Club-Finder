<template>
  <div class="home">
    <h1>{{clubInfo.name}}</h1>
    <PlayerList :players="players" />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerList from '@/components/PlayerList.vue'
import axios from 'axios';

export default {
  name: 'ClubProfile',
  components: {
    PlayerList
  },
  data() {
    return {
      clubInfo: [],
      players: [],
      errors: []
    }
  },
  

  // Fetches posts when the component is created.
  created() {
    let config = {
        headers: {
            "X-Auth-Token": this.api_key,
        }
    }

    const clubId = parseInt(this.$route.params.clubId);

    axios.get(`https://api.football-data.org/v2/teams/${clubId}`, config)
    .then(response => {
        this.clubInfo = response.data;
        this.players = this.clubInfo.squad;
    })
    .catch(e => {
      this.players.push(e)
    })


    // console.log(this.$route.params.id)
  }
}
</script>
