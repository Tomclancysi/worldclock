import timezoneRow from 'timezones.json'

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
const timezone = timezoneRow.flatMap((i)=>{
  return i.utc.map((u)=>{
    return {
      name: u,
      offset: i.offset,
      isdst: i.isdst
    }
  })
})

export default timezone