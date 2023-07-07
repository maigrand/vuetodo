<template>
  <div class="app-task-card__wrapper">
    <div class="app-task-card__input">
      <input type="text" v-model="inputData" @change="onChange"/>
      <button @click="deleteTask">delete</button>
    </div>
    <div class="app-task-card-button__close">
      <button @click="closeCard">X</button>
    </div>
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
  (e: 'delete-task', taskId: number): void,
}>()

const inputData = ref(props.task.title)

function closeCard() {
  emit('set-selected')
}

function onChange() {
  emit('title-change', inputData.value)
}

function deleteTask() {
  emit('delete-task', props.task.id)
}

</script>

<style scoped>
.app-task-card__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-color: #323232;
  width: 400px;
}

.app-task-card-button__close {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
