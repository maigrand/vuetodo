<template>
  <div class="app-task-card">
    <input type="text" v-model="inputData" @change="onChange"/>
    <button @click="onClick">X</button>
  </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'
import {TaskModel} from '@/types/TaskModel'

const props = defineProps({
  task: Object as () => TaskModel,
})

const emit = defineEmits<{
  (e: 'set-selected'): void,
  (e: 'title-change', title: string): void,
}>()

const inputData = ref(props?.task?.title)

function onClick() {
  emit('set-selected')
}

function onChange() {
  emit('title-change', inputData.value ? inputData.value : '')
}

</script>

<style scoped>
.app-task-card {
  width: 100%;
  height: 100%;
  background-color: #232323;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
