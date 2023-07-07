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

html, body {
  background-color: #232323;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #548ee7;
}

.app__wrapper {
  margin-top: 80px;
  justify-content: center;
  align-items: center;
}

</style>
