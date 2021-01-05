<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :bannerData="bannerData"></Banner>
        <Personalized :personalizedData="personalizedData" :title="'推荐歌单'"></Personalized>
        <Personalized :personalizedData="albumData" :title="'推荐专辑'"></Personalized>
      </div>
    </ScrollView>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum } from '@/api/getData'
import Banner from '@/components/Banner'
import Personalized from '../components/Personalized'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Recommend',
  components: {
    Personalized,
    Banner,
    ScrollView
  },
  comments: Banner,
  data () {
    return {
      bannerData: [],
      personalizedData: [],
      albumData: []
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
}
</style>
