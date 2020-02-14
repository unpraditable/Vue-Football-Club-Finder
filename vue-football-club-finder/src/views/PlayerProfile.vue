<template>
  <div class="hello">
    <h2>{{playerInfo.name}}</h2>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>