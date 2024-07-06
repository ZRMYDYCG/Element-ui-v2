<template>
    <div class="my-component">
        <!-- 组件的模板内容 -->
        <button @click="handleClick">点击我</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {

    name: 'MyComponent', // 组件的名称

    // 组件的属性
    props: {
        // ...
    },

    // 组件的数据对象
    data() {
        return {
            // ...
        };
    },

    // 计算属性
    computed: {
        // ...
    },

    // 侦听器，用于监听数据的变化
    watch: {
        // ...
    },

    // 组件的方法
    methods: {
        // ...
    },

    // 生命周期钩子 - 组件实例刚刚被创建
    created() {
        // ...
    },

    // 生命周期钩子 - 组件已经被挂载到 DOM 上
    mounted() {
        // ...
    },

    // 生命周期钩子 - 组件实例被销毁前
    beforeDestroy() {
        // ...
    },

    // 生命周期钩子 - 组件已经被销毁
    destroyed() {
        // ...
    },

    // 可以在这里注册其他组件
    components: {
        // ...
    },

    // 自定义指令
    directives: {
        // ...
    },

    // 自定义过滤器
    filters: {
        // ...
    },

    // 混入其他选项
    mixins: [
        // ...
    ],

    // 继承另一个组件的选项
    extends: {
        // ...
    },

    // 子组件的事件监听器
    el: {
        // ...
    },

    // 组件的模板
    template: `
    <div>{{ message }}</div>
  `,

    // 渲染函数
    render(createElement) {
        // ...
    },

    // 组件的渲染上下文
    context: 'active', // 'active' 或 'parent'

    // 父组件模板中 v-model 的绑定
    model: {
        prop: 'initialMessage',
        event: 'change'
    },

    // 父组件模板中 v-bind 的绑定
    inheritAttrs: false,

    // 组件的类名绑定
    class: {
        // ...
    },

    // 组件的样式绑定
    style: {
        // ...
    },

    // 组件的属性绑定
    attrs: {
        // ...
    },

    // 组件的事件绑定
    on: {
        // ...
    },

    // 组件的自定义事件
    emits: [
        // ...
    ],

    // 组件的提供/注入
    provide: {
        // ...
    },
    inject: {
        // ...
    },

    // 组件的异步组件选项
    async: {
        // ...
    },

    // 组件的错误处理
    errorCaptured: (err, vm, info) => {
        // ...
    },

    // 组件的选项合并策略
    optionMergeStrategies: {
        // ...
    },

    // 组件的资源
    resources: {
        // ...
    },

    // 组件的自定义选项
    [key: string]: any
};
</script>

<style lang="scss" scoped>
/* 组件的样式 */
.my-component {
    /* 样式规则 */
    color: red;
}
</style>
