<script setup lang="ts">
import zones from './composoable/state'
</script>

<template>
<div border="~ gray" m2 g2>
  <ActionBar/>
  <pre>{{zones}}</pre>
  <!-- <TimezoneSearch/> -->
</div>
</template>

<style>
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    background: #222;
    color: white;
    color-scheme: dark;
  }
</style>
