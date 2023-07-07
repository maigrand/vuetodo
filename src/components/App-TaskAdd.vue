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
  todosLength: { type: Number, required: true}
})

const emit = defineEmits<{
  (e: 'add-task', task: TaskModel): void
}>()

const inputData = ref('')

function createNewTask() {
  emit('add-task', {
    id: props.todosLength + 1,
    title: inputData.value,
    completed: false,
    selected: false,
  })
  inputData.value = ''
}

</script>

<style scoped>

</style>
