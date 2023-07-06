<template>
  <div>
    <AppTask v-for="(todo, i) in todos" :key="i" :todo="todo"/>
  </div>
</template>

<script lang="ts" setup>

import AppTask from '@/components/App-Task.vue'

const props = defineProps({
  todos: Array
})

</script>

