<template>
  <div class="app-task__wrapper">
    <div class="app-task__input">
      <input type="checkbox" :checked="isChecked" @click="setChecked">
    </div>
    <div class="app-task__title">
      <div @click="setSelected">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {TaskModel} from '@/types/TaskModel'
import {computed} from 'vue'

const props = defineProps({
  todo: {type: Object as () => TaskModel, required: true}
})

const emit = defineEmits<{
  (e: 'set-checked', taskId: number): void
  (e: 'set-selected', taskId: number): void
}>()

const isChecked = computed(() => props.todo.completed)

function setChecked() {
  emit('set-checked', props.todo.id)
}

function setSelected() {
  emit('set-selected', props.todo.id)
}

</script>

<style scoped>
.app-task__wrapper {
  display: grid;
  grid-template-columns: 1fr 11fr;
  margin-top: 4px;
  background-color: #323232;
  border: 16px solid #323232;
  border-radius: 4px;
  width: 600px;
}
.app-task__wrapper:first-child {
  margin: 0;
}

.app-task__input {
  align-items: first baseline;
}

.app-task__title {
  align-items: center;
}
</style>
