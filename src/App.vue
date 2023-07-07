<template>
  <div id="app">
    <div class="app__wrapper">
      <AppTaskList/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppTaskList from '@/components/App-TaskList.vue'

</script>

<style>

body {
  background: #232323;
  color: #D4D2DE;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  border-collapse: collapse;
}

html, body, #app {
  height: 100%;
}

#app {
  display: grid;
}

</style>
