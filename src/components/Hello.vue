<script setup lang="ts">
import { computed } from "@vue/runtime-core"

const props = defineProps<{
    name: string
}>()

const uppercase = computed(()=> props.name.toLocaleUpperCase())
</script>

<template>    
  <div class="font-sans text-3xl" text="green 3xl">
    Hello,{{uppercase}}
  </div>
  <div i-carbon-bee text="5xl"> </div>
</template>