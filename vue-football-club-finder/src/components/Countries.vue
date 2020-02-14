
<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="country in countries" :key="country.id" class="col-6 col-sm-6 col-md-3">
            <router-link :to="`/club-list/`"  v-if="country.ensignUrl">
                <img :src=country.ensignUrl width="100%" :alt=country.name class="img-fluid" />
                <p>{{country.name}}</p>

            </router-link>
            <router-link :to="`/club-list`" v-else>
                <div class="blank-flag">
                    <p>{{country.name}} Flag</p>
                </div>
                <p>{{country.name}}</p>
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


