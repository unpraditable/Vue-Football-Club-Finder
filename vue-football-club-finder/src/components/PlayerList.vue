<template>
  <div class="hello">

    <h3>Goalkeepers</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Goalkeeper')" :key="player.id" class="col-6 col-sm-6 col-md-3" >
            <router-link :to="`/${player.id}/country-list`" >
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>

    <h3>Defenders</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Defender')" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/${player.id}/country-list`" >
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>

    <h3>Midfielders</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Midfielder')" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/${player.id}/country-list`" >
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>

    <h3>Attackers</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Attacker')" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/${player.id}/country-list`">
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>
      
  </div>
</template>

<script>

export default {
  name: 'PlayerList',
  props: ['players'],
  methods: {
    filteredPlayers(position) {
      return this.players.filter(player => {
        return player.position == position      
      })
    }
  },

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


