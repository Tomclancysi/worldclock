<template>
      <button
       w-full flex gap2 px1 pb1
       border="b base" bg-base
       >
        <!-- 这个attribute控制css 格式太强了！少写好多 -->
        <!-- 实操一下flex布局 -->
        <div flex gap2 w-3.1415>
            <span font-mono w-10 ma text-lg>{{offset}}</span>
            <div flex="~ col wrap "  justify-evenly>
                <span font-mono text-xl text-left>
                    {{city}}
                    <sup border="~ base rounded " font-bold text-sm>Est</sup>
                </span>
                <span font-mono text-sm text-left op50>{{state}}</span>
            </div>
            <div>{{curTime}}</div>
        </div>
      </button>
</template>

<script setup lang="ts">
import type {Timezone} from '../types'
const { timezone } = defineProps<{
    timezone: Timezone
}>()
const offset = computed(()=>{
    return timezone.offset > 0 ? '+' + timezone.offset : timezone.offset
})
const state = computed(()=>{
    return timezone.name.split('/')[0]
})
const city = computed(()=>{
    var ret = timezone.name.split('/')[1]
    return ret === undefined ? '' : ret.replace('_', ' ')
})
const getCurDate = ()=>new Date().toLocaleTimeString('en-US', {timeZone: timezone.name})
const curTime = ref<string>(getCurDate())
setInterval(()=>curTime.value = getCurDate(), 30_000)

</script>
