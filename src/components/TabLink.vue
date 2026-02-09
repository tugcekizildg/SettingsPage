<script setup lang="ts">
import { computed } from 'vue';
import type { Tab } from '@/types';

const isActive = computed(() => props.currentTab === props.tab.key);

const props = defineProps<{
  currentTab: string;
  tab: Tab;
}>();

const emits = defineEmits<{
  click: [];
}>();
</script>
<template>
  <button
    @click="$emit('click')"
    :class="{
      'p-4 border-b-2 cursor-pointer': true,
      'border-transparent': !isActive,
      'border-teal-500 text-teal-600': isActive,
    }"
  >
    {{ tab.label }}
  </button>
</template>
