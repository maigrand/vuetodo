<template>
  <div class="root">
    <input type="checkbox" :checked="isChecked" @click="setChecked">
    <h1>{{ todo.title }}</h1>
  </div>
</template>

<script lang="ts" setup>
import {TaskModel} from '@/types/TaskModel'
import {computed} from 'vue'

const props = defineProps({
  todo: Object as () => TaskModel
})

const isChecked = computed(() => {
  return props?.todo?.completed
})

function setChecked() {
  const todosLCRaw = localStorage.getItem('todos')
  let todosLC: TaskModel[] = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }

  const updatedTodos = todosLC.map((task) => {
    if (task.id === props?.todo?.id) {
      props.todo.completed = !task.completed
      return {
        ...task,
        completed: !task.completed
      }
    }
    return task
  })

  localStorage.setItem('todos', JSON.stringify(updatedTodos))
}

</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
}
.root h1 {
  margin-left: 8px;
}
</style>
