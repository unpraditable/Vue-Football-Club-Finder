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
            <router-link :to="`/player-profile/${player.id}`" >
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>

    <h3>Midfielders</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Midfielder')" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/player-profile/${player.id}`" >
                <p>{{player.name}}</p>
            </router-link>
        </li>
    </ul>

    <h3>Attackers</h3>
    
    <ul class="row list-unstyled">
        <li v-for="player in filteredPlayers('Attacker')" :key="player.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/player-profile/${player.id}`" >
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
    },
    filteredPlayersDebug(position) {
      let filteredPlayer = this.players.filter(player => {
        return player.position == position      
      })
      return filteredPlayer;
    },
  },
  created() {
    console.log(this.filteredPlayers("Defenders"))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>


