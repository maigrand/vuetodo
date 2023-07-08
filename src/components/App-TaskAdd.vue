<template>
  <div class="app-task-add__wrapper">
    <input
      class="app-task-add__input"
      v-if="isInputMode"
      @keyup.enter="createNewTask"
      v-model="inputData"
      placeholder="Write something..."
    />
    <button
      type="button"
      class="app-task-add__button"
      @click="isInputMode = !isInputMode"
      v-if="!isInputMode"
    >
      Add a task
    </button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { TaskModel } from '@/types/TaskModel';

const props = defineProps({
  todosLength: { type: Number, required: true },
});

const emit = defineEmits<{(e: 'add-task', task: TaskModel): void
}>();

const inputData = ref('');
const isInputMode = ref(false);

function createNewTask() {
  emit('add-task', {
    id: props.todosLength + 1,
    title: inputData.value,
    completed: false,
    selected: false,
  });
  inputData.value = '';
  isInputMode.value = false;
}

</script>

<style scoped>

.app-task-add__wrapper {

}

.app-task-add__input {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background: linear-gradient(to right, #562F84 -50%, #2A5D6A 150%);
  color: white;
}

.app-task-add__button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background: linear-gradient(to right, #562F84 -50%, #2A5D6A 150%);
  cursor: pointer;
  color: white;
}

</style>
