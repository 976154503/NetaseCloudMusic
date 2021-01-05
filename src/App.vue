<template>
  <div id="app">
    <Header></Header>
    <Tabber></Tabber>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Tabber from '@/components/Tabbar'
export default {
  name: 'App',
  components: { Tabber, Header }
}
</script>
<style lang="scss">

</style>
