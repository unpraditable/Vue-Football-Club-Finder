<template>
  <div class="player-profile-container">
    <div class="player-profile">
      <header>
        <img src="http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/Photo-Missing.png" class="img-fluid" :alt=playerInfo.name />
      </header>
      <p class="shirt-number">{{playerInfo.shirtNumber}}</p>
      <h1>{{playerInfo.name}}</h1>
      <h2>{{playerInfo.position}}</h2>
      <p>Nationality: {{playerInfo.nationality}}</p>
      <p>Date of Birth: {{playerInfo.dateOfBirth}}</p>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';

  export default {
    name: 'PlayerProfile',
    data() {
        return {
        playerInfo: []
        }
    },
    created() {
      let config = {
        headers: {
            "X-Auth-Token": this.api_key,
        }
    }

    const playerId = parseInt(this.$route.params.playerId);

    axios.get(`https://api.football-data.org/v2/players/${playerId}`, config)
    .then(response => {
        this.playerInfo = response.data;
    })
    .catch(e => {
      this.playerInfo.push(e)
    })
    }
  }
</script>