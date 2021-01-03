<template>
  <Banner :bannerData="bannerData"></Banner>
</template>

<script>
import { getBanner } from '@/api/getData'
import Banner from '@/components/Banner'

export default {
  name: 'Recommend',
  components: { Banner },
  comments: Banner,
  data () {
    return {
      bannerData: []
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
  }
}
</script>

<style scoped>

</style>
