<template>
  <button class="app-task__wrapper" type="button" @click="setSelected">
    <span class="app-task__input">
      <input type="checkbox" :checked="isChecked" @click="setChecked">
    </span>
    <span class="app-task__title">
      {{ todo.title }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { AppTaskEmits, AppTaskProps } from "@/components/app-task/types";

const props = defineProps<AppTaskProps>();
const emit = defineEmits<AppTaskEmits>();

const isChecked = computed(() => props.todo.completed);

const setChecked = () => emit('set-checked', props.todo.id);
const setSelected = () => emit('set-selected', props.todo.id);
</script>

<style lang="scss" scoped>
.app-task {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 11fr 1fr;
    margin-top: 4px;
    background-color: #323232;
    padding: 16px;
    border: transparent;
    border-radius: 4px;
    width: 600px;

    color: white;

    transition: opacity 100ms ease-in;

    &:hover {
      opacity: 0.85;
    }

    &:first-child {
      margin: 0;
    }
  }

  &__input {
    align-items: center;
  }
}
</style>
