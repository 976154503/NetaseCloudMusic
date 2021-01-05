<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :bannerData="bannerData"></Banner>
        <Personalized :personalizedData="personalizedData" :title="'推荐歌单'" @select="fatherSelectItem"></Personalized>
        <Personalized :personalizedData="albumData" :title="'推荐专辑'"></Personalized>
        <NewSongs :newSongsData="newSongsData"></NewSongs>
      </div>
    </ScrollView>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum, getNewSongs } from '../api/getData'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
import NewSongs from '../components/NewSongs'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Recommend',
  components: {
    Personalized,
    Banner,
    NewSongs,
    ScrollView
  },
  methods: {
    fatherSelectItem (id) {
      this.$router.push({
        path: `/recommend/details/${id}`
      })
    }
  },
  data: function () {
    return {
      bannerData: [],
      personalizedData: [],
      albumData: [],
      newSongsData: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        this.bannerData = data.banners
      })
      .catch((err) => {
        console.log(err)
      })

    getPersonalized()
      .then((data) => {
        this.personalizedData = data.result
      })
      .catch((err) => {
        console.log(err)
      })
    getAlbum()
      .then((data) => {
        this.albumData = data.albums.splice(0, 6)
      })
      .catch((err) => {
        console.log(err)
      })
    getNewSongs()
      .then((data) => {
        this.newSongsData = data.result
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style scoped lang="scss">
.recommend {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.v-enter {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0%);
}

.v-enter-active {
  transition: transform 1s;
}
.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}

</style>
