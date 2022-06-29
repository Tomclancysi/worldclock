<template>
<div class="schedular" z-10>
    <div 
    v-for="i, idx of selectedZones" :key="i.name" relative 
    >
        <TimezoneItem :timezone="i" m-0/>
        <div absolute  left="-3" top-0 bottom-0 flex="~ col" justify-evenly
            text-xl w-3 color-truegray
        >
            <button icon-btn i-carbon-close @click="remove(idx)" />
            <button icon-btn v-if="idx != 0" i-carbon-caret-up @click="move(idx, -1)"/> 
            <button icon-btn v-if="idx != selectedZones.length-1" i-carbon-caret-down @click="move(idx, 1)"/> 
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { Timezone } from '@/types';
import selectedZones from '../composoable/state'
function remove(idx: number){
    selectedZones.value.splice(idx, 1)
}
function move(idx:number, offset:number){
    const temp = selectedZones.value[idx]
    selectedZones.value[idx] = selectedZones.value[idx + offset]
    selectedZones.value[idx + offset] = temp
    console.log(selectedZones.value)
}

</script>

<style>

</style>