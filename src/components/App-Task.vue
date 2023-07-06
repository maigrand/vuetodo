<template>
  <div>
    <h1>{{ todo.text }}</h1>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  todo: Object
})

</script>

<style scoped>

</style>
