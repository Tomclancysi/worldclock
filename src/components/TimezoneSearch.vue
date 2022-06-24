<script setup lang="ts">
import timezones from '../composoable/data'
import fuse from 'fuse.js' // 默认导出
import {Timezone} from '../types' // 报错 但是能run
import zones from '../composoable/state'

// 这写法跟vue2 风格挺不一样
const fs = new fuse(timezones, {
  keys: ['name']
})

const input = ref<string>('') // 这个就是输入框，搞成reactive的。如果是普通变量是不能双向绑定的
const index = ref<number>(0)
const searchResult = computed(()=>{
  // return timezone.filter(i => i.utc.find(u => u.includes(input.value)))
  // console.log('search result ', fs.search(input.value))
  return fs.search(input.value)
})
function addToTimezone(zone: Timezone){
  zones.value.push(zone);
  console.log(zones.value)
}

</script>

<template>
  <div>
    <!-- 双向绑定input，为啥要声明ref呢 -->
    <input v-model="input" type="text"/>
    <div>
      <button
       v-for="i of searchResult" 
       :key="i.refIndex"
       @click="addToTimezone(i.item)"
       flex gap2>
        <!-- 这个attribute控制css 格式太强了！少写好多 -->
        <div font-mono w-10 text-right>{{i.item.offset}}</div>
        <div font-mono>{{i.item.name}}</div>
      </button>
    </div>
  </div>

</template>