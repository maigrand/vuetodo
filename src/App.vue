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
import {TaskModel} from '@/types/TaskModel'
import {computed, ref} from 'vue'

const todosLC = computed(() => {
  const todosLCRaw = localStorage.getItem('todos')
  let todosLC: TaskModel[] = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }
  return todosLC
})

const todos = ref(todosLC.value)

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

.root {
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
