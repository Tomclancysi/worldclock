export interface Timezone{ // ts面向对象 所以interface就是定义一个接口类型
    name: string
    offset:number
    isdst: boolean
}