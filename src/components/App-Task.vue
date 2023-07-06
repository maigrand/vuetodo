<template>
  <div>
    <h1>{{ todo.text }}</h1>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  todo: Object
})

console.log('AppTaskTodo', props.todo)

</script>

<style scoped>

</style>
