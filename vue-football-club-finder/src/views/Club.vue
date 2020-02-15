<template>
  <div class="club-list-page">
    <header class="banner club-list-banner">
      <div class="container">
        <h1>{{this.country}}</h1>
      </div>
    </header>
    <div class="container">
      <Clubs :clubs="clubs"/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Clubs from '@/components/Clubs.vue'
import axios from 'axios';
export default {
  name: 'Club',
  components: {
    Clubs
  },
  data() {
    return {
      clubs: [],
      country: "Loading...",
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
    } //function untuk mendapatkan main color klub untuk menyempurnakan kode nanti
  },

  // Fetches posts when the component is created.
  created() {
    let config = {
        headers: {
            "X-Auth-Token": this.api_key,
        }
    }

    let competitions = [];

    const countryId = parseInt(this.$route.params.countryId);
    
    axios.get(`https://api.football-data.org/v2/competitions?areas=${countryId}&plan=TIER_ONE`, config)
    .then(response => {
        for(let i =0;i<response.data.competitions.length;i++) {
            axios.get(`https://api.football-data.org/v2/competitions/${response.data.competitions[i].id}/teams`, config)
            .then(response => {
                let new_array = response.data.teams;
                this.clubs = this.clubs.concat(new_array);
                
            })
        }    
    })

    axios.get(`https://api.football-data.org/v2/areas/${countryId}`, config)
    .then(response => {
        this.country = response.data.name;
    })

    .catch(e => {
      console.log(e)
    })

    console.log(this.clubs);
    
  }
}
</script>
