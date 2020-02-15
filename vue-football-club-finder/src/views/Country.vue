<template>
  <div class="home">
    
    <header class="banner country-list-banner">
      <div class="container">
        <h1>{{this.continent}}</h1>
      </div>
    </header>
    <div class="container">
      <Countries :countries="countries" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from '@/components/Countries.vue'
import axios from 'axios';

export default {
  name: 'Country',
  components: {
    Countries
  },
  data() {
    return {
      continent: [],
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
        this.countries = response.data.areas.filter(country => country.parentAreaId === areaId)
        this.continent = this.countries[0].parentArea
    })
    .catch(e => {
      this.countries.push(e)
    })

  }
}
</script>
