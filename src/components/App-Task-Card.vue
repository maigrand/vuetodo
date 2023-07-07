<template>
  <div class="app-task-card__wrapper">
    <input type="text" v-model="inputData" @change="onChange"/>
    <button @click="onClick">X</button>
  </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'
import {TaskModel} from '@/types/TaskModel'

const props = defineProps({
  task: {type: Object as () => TaskModel, required: true},
})

const emit = defineEmits<{
  (e: 'set-selected'): void,
  (e: 'title-change', title: string): void,
}>()

const inputData = ref(props.task.title)

function onClick() {
  emit('set-selected')
}

function onChange() {
  emit('title-change', inputData.value)
}

</script>

<style scoped>
.app-task-card__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  background-color: #323232;
  width: 400px;
}
</style>
