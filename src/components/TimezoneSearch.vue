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

function add(t: Timezone){
  addToTimezone(t)
  index.value = 0
  input.value = ''
}

function onKeyDown(e: KeyboardEvent){
  if(e.key === "ArrowDown"){
    index.value = (index.value + 1) % searchResult.value.length
  }
  else if(e.key === "ArrowUp"){
    index.value = (index.value - 1 + searchResult.value.length) % searchResult.value.length
  }
  else if(e.key === "Enter"){
    add(searchResult.value[index.value].item)
  }
}

</script>

<template>
  <div relative>
    <!-- 双向绑定input，为啥要声明ref呢 -->
    <!-- 输入框css那么一设置 质感立马上去了 -->
    <input v-model="input" type="text" placeholder="Search zone..." 
    p="x3 y2" border="~ base rounded" bg-transparent w-full box-border
    @keydown="onKeyDown" />
    <div v-show="input.length > 0" 
      absolute top-full  
      left-0 right-0  max-h-100 overflow-auto bg-base z-24
      >
      <div v-for="item, idx of searchResult" 
        :key="item.refIndex" 
        >
        <TimezoneItem 
          :class="idx === index ? 'bg-gray:10' : ''" :timezone="item.item" 
          @click="add(item.item)"
          hover:bg-gray:10
           />
      </div>

      
    </div>
  </div>

</template>