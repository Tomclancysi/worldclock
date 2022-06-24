<script setup lang="ts">
import timezone from 'timezones.json'
import fuse from 'fuse.js' // 默认导出

// const newTimezone = timezone.map((ent)=>{
//   let result = new Array
//   for(let utcItem of ent.utc){
//     var base = Object.create(ent)
//     base.utc = utcItem
//     result.push(base)
//   }
//   return result
// }).reduce((prev, cur)=>{
//   return prev.concat(cur)
// })
// console.log(newTimezone)
// 上面想用map做完后 reduce拼接起来。实际上拼接直接有下面这个API
// const timezone = timezoneRow.flatMap((i)=>{
//   return i.utc.map((u)=>{
//     return {
//       name: u,
//       offset: i.offset
//     }
//   })
// })

interface Timezone{ // ts面向对象 所以interface就是定义一个接口类型
  name: string
  offset:number
}
// 这写法跟vue2 风格挺不一样
const fs = new fuse(timezone, {
  keys: ['utc', 'value', 'abbr']
})
const zones = ref<Timezone[]>([]) // warpper 包装成一个reactive的对象 可以修改其value
const input = ref<string>('') // 这个就是输入框，搞成reactive的。如果是普通变量是不能双向绑定的
const searchResult = computed(()=>{
  // return timezone.filter(i => i.utc.find(u => u.includes(input.value)))
  // console.log('search result ', fs.search(input.value))
  return fs.search(input.value)
})


</script>

<template>
  <div>
    <!-- 双向绑定input，为啥要声明ref呢 -->
    <input v-model="input" type="text"/>
    <div>
      <div v-for="i of searchResult" :key="i.refIndex">{{i.item.text}}</div>
    </div>
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
