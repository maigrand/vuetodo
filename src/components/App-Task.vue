<template>
  <div class="app-task__wrapper">
    <input type="checkbox" :checked="isChecked" @click="setChecked">
    <div @click="setSelected">{{ todo.title }}</div>
    <button @click="deleteTodo">X</button>
  </div>
</template>

<script lang="ts" setup>

import {TaskModel} from '@/types/TaskModel'
import {computed} from 'vue'

const props = defineProps({
  todo: Object as () => TaskModel
})

const emit = defineEmits<{
  (e: 'delete-task', taskId: number): void
  (e: 'set-checked', taskId: number): void
  (e: 'set-selected', taskId?: number): void
}>()

const isChecked = computed(() => props?.todo?.completed)

function setChecked() {
  if (props?.todo) {
    emit('set-checked', props?.todo?.id)
  }
}

function deleteTodo() {
  if (props?.todo) {
    emit('delete-task', props?.todo?.id)
  }
}

function setSelected() {
  if (props?.todo) {
    emit('set-selected', props?.todo?.id)
  }
}

</script>

<style scoped>
.app-task__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-task__wrapper h1 {
  margin-left: 8px;
}
</style>
