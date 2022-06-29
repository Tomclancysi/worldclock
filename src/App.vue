<script setup lang="ts">

</script>

<template>
<div border="~ base" m2 g2 bg-gray:15 h-screen>
  <div text-sans >
    <NavBar/>
    <div border="~ base rounded" m2 bg-white dark:bg-truegray-900 shadow>
      <ActionBar/>
      <TimeSchedular/>
    </div>
  </div>
  
  <!-- <TimezoneSearch/> -->
</div>
</template>

<style>
  .dark {
    color-scheme: dark;
    color: white;
  }
</style>
