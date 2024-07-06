<template>
    <button :class="bem.b()">按钮</button>
</template>

<script>
import { createNamespace } from "@/utils/index.js";
export default {
    name: 'ElButton',

    props: { // 组件的属性

    },

    data() { // 组件的数据对象
        return {
            bem: createNamespace("button")
        }
    },

    method: {

    },

    mounted() {
        console.log(this.bem.b())
    },
}
</script>

<style lang="scss" scoped>
/*小技巧：关于按钮的样式即写好几套样式，然后通过类型等各种参数去控制样式，最终实现对应效果*/

</style>