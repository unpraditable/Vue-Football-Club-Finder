
<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="country in countries" :key="country.id" class="col-6 col-sm-6 col-md-3">

            <router-link class="card-link " :to="`/club-list/`">
              <div class="country-card">
                  <header></header>
                  <div class="country-flag-container">
                    <div v-if="country.ensignUrl" class="country-flag" :style="`background-image:url(${country.ensignUrl});`"></div>

                  </div>
                  <div class="country-body">
                    <p>{{country.name}}</p>
                  </div>
              </div>
            </router-link>

        </li>
    </ul>
      
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Countries',
  data() {
    return {
      countries: [],
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

    const areaId = parseInt(this.$route.params.id);

    axios.get(`https://api.football-data.org/v2/areas/`, config)
    .then(response => {
      // JSON responses are automatically parsed.
        if(this.$route.params.id) {
            this.countries = response.data.areas.filter(country => country.parentAreaId === areaId)
        } else {
            this.countries = response.data.areas.filter(country => country.parentAreaId === 2267);
        }
      
    })
    .catch(e => {
      this.countries.push(e)
    })

    console.log(this.$route.params.id)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>


