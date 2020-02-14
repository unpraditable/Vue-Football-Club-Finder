<template>
  <div class="home">
    <header class="banner club-list-banner">
      <div class="container">
        <h1>Vue Football Club Finder</h1>
      </div>
    </header>
    <h2 style="margin-bottom: 30px;">Choose An Area</h2>
    <div class="container">
      <Areas />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Areas from '@/components/Areas.vue'

export default {
  name: 'Area',
  components: {
    Areas
  }
}
</script>
