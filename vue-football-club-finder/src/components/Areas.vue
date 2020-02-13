
<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <li v-for="area in areas" :key="area.id" class="col-6 col-sm-6 col-md-3">
            <a href="#" v-if="area.ensignUrl">
                <img :src=area.ensignUrl width="100%" :alt=area.name class="img-fluid" />
                <p>{{area.name}}</p>

            </a>
            <a href="#" v-else>
                <div class="blank-flag">
                    <p>{{area.name}} Flag</p>
                </div>
                <p>{{area.name}}</p>
            </a>
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
      this.areas = response.data.areas
    })
    .catch(e => {
      this.areas.push(e)
    })

  }
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


