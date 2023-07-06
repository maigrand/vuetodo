<template>
  <div>
    <input v-model="inputData"/>
    <button @click="createNewTask" @keyup.enter="createNewTask">+</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const props = defineProps({
  todos: Array
})

const inputData = ref('')

console.log("AppTaskAddTodos", props.todos)

function createNewTask() {
  props?.todos?.push({ text: inputData.value} )
  const todosLCRaw = localStorage.getItem('todos')
  let todosLC = []
  if (todosLCRaw) {
    todosLC = JSON.parse(todosLCRaw)
  }
  todosLC.push({ text: inputData.value} )
  localStorage.setItem('todos', JSON.stringify(todosLC))
}

// export default {
//   name: 'AppTaskAdd',
//   props: {
//     todos: Array
//   },
//   setup(props: any) {
//     const inputData = ref('')
//
//     function createNewTask() {
//       props.todos.push({ text: inputData.value} )
//     }
//
//     return {
//       inputData,
//       createNewTask
//     }
//   }
//   // data() {
//   //   return {
//   //     inputData: ''
//   //   }
//   // },
//   // methods: {
//   //   createNewTask() {
//   //     this.todos.push(this.inputData)
//   //   }
//   // }
// }
</script>

<style scoped>

</style>
