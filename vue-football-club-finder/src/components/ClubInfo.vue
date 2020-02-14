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
  props: ['players'] // kebab case here available as camelcase in template

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


