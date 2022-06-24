import { Timezone } from "@/types"
const zones = ref<Timezone[]>([]) // warpper 包装成一个reactive的对象 可以修改其value
export default zones