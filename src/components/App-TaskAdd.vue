<template>
  <div>
    <input @keyup.enter="createNewTask" v-model="inputData"/>
    <button @click="createNewTask">+</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {TaskModel} from '@/types/TaskModel'

const props = defineProps({
  todos: Array
})

const inputData = ref('')

function createNewTask() {

  const todosLCRaw = localStorage.getItem('todos')
  let todosLC: TaskModel[] = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }

  const task = {
    id: todosLC.length + 1,
    title: inputData.value,
    completed: false
  }

  todosLC.push(task)
  localStorage.setItem('todos', JSON.stringify(todosLC))

  props?.todos?.push(task)
  inputData.value = ''
}

</script>

<style scoped>

</style>
