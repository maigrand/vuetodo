<template>
  <div class="app-list__wrapper">
    <div
      v-if="selectedTask"
      class="app-task__card"
    >
      <AppTaskCard
        :task="selectedTask"
        @set-selected="setSelected"
        @delete-task="deleteTask"
      />
    </div>
    <div class="app-task__list--item__wrapper">
      <AppTask
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-task="deleteTask"
        @set-checked="setChecked"
        @set-selected="setSelected"
      />
    </div>
    <div class="app-task__add__wrapper">
      <AppTaskAdd :todosLength="todosLength" @add-task="addTask" />
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppTask from '@/components/App-Task.vue';
import AppTaskAdd from '@/components/App-TaskAdd.vue';
import AppTaskCard from '@/components/App-Task-Card.vue';
import { TaskModel } from '@/types/TaskModel';
import { computed, ref } from 'vue';

const todosLC = computed(() => (JSON.parse(localStorage.getItem('todos') || '[]') as TaskModel[]));
const todos = ref(todosLC.value);
const todosLength = computed(() => todos.value.length);

const selectedTask = computed(() => todos.value.find((task) => task.selected));

function addTask(task: TaskModel) {
  todos.value.unshift(task);
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

function deleteTask(taskId: number) {
  todos.value = todos.value.filter((task) => task.id !== taskId);
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

function setChecked(taskId: number) {
  const taskIndex = todos.value.findIndex((task) => task.id === taskId);
  todos.value[taskIndex].completed = !todos.value[taskIndex].completed;
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

function setSelected(taskId: number) {
  const taskIndex = todos.value.findIndex((task) => task.id === taskId);
  todos.value[taskIndex].selected = !todos.value[taskIndex].selected;
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

</script>

<style scoped>

.app-list__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-task__add__wrapper {
  position: sticky;
  bottom: 16px;
}

.app-task__list--item__wrapper {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.app-task__card {
  position: fixed;
  right: 108px;
  top: 8px;
  width: 400px;
  height: 800px;
  border: 1px solid #323232;
  background-color: #323232;
}

</style>
