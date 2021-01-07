<template>
  <div id="app">
    <Header></Header>
    <Tabber></Tabber>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>
<script>
import Header from './components/Header'
import Tabber from './components/Tabbar'
import Player from './views/Player'
export default {
  name: 'App',
  components: {
    Tabber,
    Header,
    Player
  }
}
</script>
<style lang="scss">

</style>
