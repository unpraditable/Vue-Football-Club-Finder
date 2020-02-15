<template>
  <div class="hello">
      <ul v-if="clubs.length" class="row list-unstyled">
        <!-- if parent Area = World -->
        <li v-for="club in clubs" :key="club.id" class="col-6 col-sm-6 col-md-3 ">
            <router-link class="card-link" :to="`/club-profile/${club.id}`">
              <div class="club-card">
                  <header :style="`background-color: ${club.clubColors}` "></header>
                  <div class="club-icon-container">
                    <img v-if="club.crestUrl" :src=club.crestUrl :alt=club.name class="club-icon" />
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

export default {
  name: 'Clubs',
  props: ['clubs']
}

</script>