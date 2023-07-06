<template>
  <div>
    <AppTask v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script lang="ts" setup>

import AppTask from '@/components/App-Task.vue'
import {TaskModel} from '@/types/TaskModel'

defineProps({
  todos: Array as () => TaskModel[]
})

</script>

