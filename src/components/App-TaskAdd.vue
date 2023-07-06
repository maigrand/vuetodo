<template>
  <div>
    <input @keyup.enter="createNewTask" v-model="inputData"/>
    <button @click="createNewTask">+</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const props = defineProps({
  todos: Array
})

const inputData = ref('')

function createNewTask() {
  props?.todos?.push({ text: inputData.value} )
  const todosLCRaw = localStorage.getItem('todos')
  let todosLC = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }
  todosLC.push({ text: inputData.value} )
  localStorage.setItem('todos', JSON.stringify(todosLC))
}

</script>

<style scoped>

</style>
