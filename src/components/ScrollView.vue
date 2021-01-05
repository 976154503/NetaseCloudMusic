<!--滚动组件-->
<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: false,
      scrollbars: false,
      scrollX: false,
      disableMouse: true,
      disablePointer: true,
      disableTouch: false
    })

    // 监听子节点内容高度变化实时刷新滚动组件
    // 1.创建观察者对象
    /*
    * 观察者对象会监听指定内容 如果内容改变就会执行回调函数
    *拥有两个参数：mutationList:发生变化的数组  observer：观察者对象
    * */
    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })
    // 2.通过对象告诉观察者需要观察的内容
    const config = {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      subtree: true, // 观察后代节点，默认为 false
      attributeFilter: ['height', 'offsetHeight']// 观察特定属性
    }
    // 3.告诉观察者对象需要观察谁和内容
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
