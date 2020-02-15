
<template>
  <div class="hello">
      <ul class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="country in countries" :key="country.id" class="col-6 col-sm-6 col-md-3">

            <router-link class="card-link " :to="`/club-list/${country.id}`">
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

export default {
  name: 'Countries',
  props: ['countries'],
}

</script>
