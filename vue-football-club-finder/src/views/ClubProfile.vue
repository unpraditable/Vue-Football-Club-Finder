<template>
  <div class="club-page">
    <header class="club-banner">
      <div class="container">
        <div class="row">
          <div class="crest-container col-sm-4">
            <div class="crest">
              <img :src=clubInfo.crestUrl class="img-fluid" />
            </div>
          </div>
          <div class="club-info-container col-sm-8">
            <h1>{{clubInfo.name}}</h1>
            <div class="row">
              <div class="col-sm-6">
                <p><b>Year Founded: </b> {{clubInfo.founded}}</p>
              </div>
              <div class="col-sm-6">
                <p><b>Venue: </b> {{clubInfo.venue}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                 <p><b>Website: </b> <a :href=clubInfo.website>{{clubInfo.website}}</a></p>
              </div>
              <div class="col-sm-6">
                <p><b>Address: </b> {{clubInfo.address}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p><b>Phone: </b> <a :href="`tel:${clubInfo.phone}`">{{clubInfo.phone}}</a></p>
              </div>
              <div class="col-sm-6">
                <p><b>Email: </b> <a :href="`mailto:${clubInfo.email}`">{{clubInfo.email}}</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <PlayerList :players="players" />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PlayerList from '@/components/PlayerList.vue'
  import axios from 'axios';

  export default {
    name: 'ClubProfile',
    components: {
      PlayerList
    },
    data() {
      return {
        clubInfo: [],
        players: "Loading",
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

      const clubId = parseInt(this.$route.params.clubId);

      axios.get(`https://api.football-data.org/v2/teams/${clubId}`, config)
        .then(response => {
          this.clubInfo = response.data;
          this.players = this.clubInfo.squad;
        })
        .catch(e => {
          this.players.push(e)
        })


      // console.log(this.$route.params.id)
    }
  }
</script>