<template>
  <div id="app">
    <div class="root">
      <div class="taskAdd">
        <AppTaskAdd :todos="todos"/>
      </div>
      <div class="list">
        <AppTaskList :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppTaskAdd from '@/components/App-TaskAdd.vue'
import AppTaskList from '@/components/App-TaskList.vue'
import {computed, reactive} from 'vue'

const todosLC = computed(() => {
  const todosLCRaw = localStorage.getItem('todos')
  let todosLC = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }
  return todosLC
})

const todos = reactive(todosLC.value)

</script>

<style>
html, body {
  background-color: #232323;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #548ee7;
  //margin-top: 60px;
}
.root {
  //display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
}
.taskAdd {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
