<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Header />

  <RouterView />
</template>

<script>
import Header from './components/header/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>