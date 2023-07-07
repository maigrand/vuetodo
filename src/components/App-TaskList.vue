<template>
  <div class="app-list__wrapper">
    <div class="app-task-add__wrapper">
      <AppTaskAdd :todosLength="todosLength" @add-task="addTask"/>
    </div>
    <div
        class="app-task-card"
        v-if="selectedTask"
    >
      <AppTaskCard
          :task="selectedTask"
          @set-selected="setSelected"
          @title-change="handleTitleChange"
      />
    </div>
    <div class="app-list-item__wrapper">
      <AppTask
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete-task="deleteTask"
          @set-checked="setChecked"
          @set-selected="setSelected"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppTask from '@/components/App-Task.vue'
import AppTaskAdd from '@/components/App-TaskAdd.vue'
import AppTaskCard from '@/components/App-Task-Card.vue'
import {TaskModel} from '@/types/TaskModel'
import {computed, ref} from 'vue'

const todosLC = computed(() => (JSON.parse(localStorage.getItem('todos') || '[]') as TaskModel[]))
const todos = ref(todosLC.value)
const todosLength = computed(() => todos.value.length)

const selectedTask = computed(() => todos.value.find((task) => task.selected))

function addTask(task: TaskModel) {
  todos.value.unshift(task)
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function deleteTask(taskId: number) {
  todos.value = todos.value.filter((task) => task.id !== taskId)
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function setChecked(taskId: number) {
  todos.value = todos.value.map((task) => {
    if (task.id === taskId) {
      task.completed = !task.completed
    }
    return task
  })
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function setSelected(taskId?: number) {
  if (taskId) {
    todos.value = todos.value.map((task) => {
      task.selected = task.id === taskId;
      return task
    })
  } else {
    todos.value = todos.value.map((task) => {
      task.selected = false;
      return task
    })
  }
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function handleTitleChange(title: string) {
  todos.value = todos.value.map((task) => {
    if (task.selected) {
      task.title = title
    }
    return task
  })
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

</script>

<style scoped>

.app-list__wrapper {
  display: grid;
  gap: 8px;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
}

.app-task-add__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-list-item__wrapper {
  display: grid;
  gap: 16px;
}

.app-task-card {
  position: absolute;
  background-color: #323232;
  width: 200px;
  height: 200px;
  top: 100px;
}

</style>
