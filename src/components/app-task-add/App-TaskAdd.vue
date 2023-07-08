<template>
  <div class="app-task-add__wrapper">
    <input
      v-if="hasInputMode"
      v-model="inputData"
      class="app-task-add__input"
      id="create"
      placeholder="Write something..."
      @keyup.enter="createNewTask"
      @blur="switchInputMode()"
    />
    <button
      v-else
      class="app-task-add__button"
      type="button"
      @click="openEdit()"
    >
      Add a task
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, watch } from 'vue';
import { AddTaskProps, AddTaskEmits } from "@/components/app-task-add/types";

const props = defineProps<AddTaskProps>();
const emit = defineEmits<AddTaskEmits>();

const inputData = ref<string>('');
const hasInputMode = ref<boolean>(false);

const switchInputMode = () => {
  hasInputMode.value = !hasInputMode.value;
};

const openEdit = () => {
  switchInputMode();
  nextTick(() => {
    document.getElementById('create')?.focus();
  });
};

function createNewTask() {
  emit('add-task', {
    id: props.todosLength + 1,
    title: inputData.value,
    completed: false,
    selected: false,
  });
  hasInputMode.value = false;
}

watch(hasInputMode, (value) => {
  if (!value) inputData.value = '';
});
</script>

<style lang="scss" scoped>
.app-task-add {
  &__button, &__input {
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    background: linear-gradient(to right, #562F84 -50%, #2A5D6A 150%);
    color: white;

    outline: none;
  }

  &__button {
    cursor: pointer;
  }
}
</style>
