<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="club in clubs" :key="club.id" class="col-6 col-sm-6 col-md-3 ">
            <router-link :to="`/club-profile/${club.id}`">
              <div class="club-card">
                  <header :style="`background-color: ${club.clubColors}` "></header>
                  <div class="club-icon-container">
                    <img :src=club.crestUrl :alt=club.name class="club-icon" />
                  </div>
                  <div class="club-body">
                    <p>{{club.name}}</p>
                  </div>
              </div>
            </router-link>
        </li>
    </ul>
      
  </div>
</template>

<script>
import axios from 'axios';

var input = 'john smith~123 Street~Apt 4~New York~NY~12345';

var fields = input.split('~');

var name = fields[0];
var street = fields[1];

export default {
  name: 'Clubs',
  data() {
    return {
      clubs: [],
      competitions : [],
      errors: [],
      color: "black",
    }
  },

  methods: {
    getMainColor(clubId) {
      let filteredClub = this.clubs.filter(club => {
        return club.id == clubId      
      })

      let found = this.clubs.find(club => club.id == clubId);
      return filteredClub;
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

    axios.get(`https://api.football-data.org/v2/competitions/2021/teams`, config)
    .then(response => {
        this.clubs = response.data.teams;
      
    })
    .catch(e => {
      this.clubs.push(e)
    })
    // console.log(this.$route.params.id)
  },

  mounted(){
    console.log(this.getMainColor(65));
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>


