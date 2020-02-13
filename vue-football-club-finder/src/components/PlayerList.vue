
<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="player in players" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/${player.id}/country-list`">
                <p>{{player.name}}</p>

            </router-link>
        </li>
    </ul>
      
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PlayerList',
  data() {
    return {
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

    // const areaId = parseInt(this.$route.params.id);

    axios.get(`https://api.football-data.org/v2/teams/57`, config)
    .then(response => {
        this.players = response.data.squad;
      
    })
    .catch(e => {
      this.players.push(e)
    })


    // console.log(this.$route.params.id)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.blank-flag{
    height: 200px;
    width: 100%;
    background-color: gray;
    font-size: 24px;
    text-align: center;
    p{
        line-height: 200px;
        color: white;
    }
    @media only screen and (max-width: 480px) {
        height: 78px;
    }
}
</style>


