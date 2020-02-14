<template>
  <div class="hello">
    <ul class="row list-unstyled">
      <!-- if parent Area = World -->
      <li v-for="area in areas" :key="area.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <router-link :to="`/${area.id}/country-list`">
          <div class="area-card">
            <p>{{area.name}}</p>
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Areas',
    data() {
      return {
        areas: [],
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

      axios.get(`https://api.football-data.org/v2/areas/`, config)
        .then(response => {
          // JSON responses are automatically parsed.
          if (this.$route.params.id) {
            this.areas = response.data.areas.filter(area => area.parentAreaId === this.$route.params.id)
          } else {
            this.areas = response.data.areas.filter(area => area.parentAreaId === 2267);
          }

        })
        .catch(e => {
          this.areas.push(e)
        })

      console.log(this.areas);


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>