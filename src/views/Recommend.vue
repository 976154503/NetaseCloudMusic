<template>
  <div class="recommend">
    <div class="recommend-wrapper">
      <ScrollView>
        <div>
          <Banner :bannerData="bannerData"></Banner>
          <Personalized :personalizedData="personalizedData" :title="'推荐歌单'" @select="fatherSelectItem"
                        :type="'personalized'"></Personalized>
          <Personalized :personalizedData="albumData" :title="'推荐专辑'" @select="fatherSelectItem"
                        :type="'album'"></Personalized>
          <NewSongs :newSongsData="newSongsData"></NewSongs>
        </div>
      </ScrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum, getNewSongs } from '../api/getData'
import Banner from '../components/Recommend/Banner'
import Personalized from '../components/Recommend/Personalized'
import NewSongs from '../components/Recommend/NewSongs'
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
    fatherSelectItem (id, type) {
      this.$router.push({
        path: `/recommend/details/${id}/${type}`
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

  .recommend-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
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
