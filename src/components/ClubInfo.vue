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

export default {
  name: 'PlayerList',
  props: ['players']

}
</script>