<template>
  <Banner></Banner>
</template>

<script>
import { getBanner } from '@/api/getData'
import Banner from '@/components/Banner'

export default {
  name: 'Recommend',
  components: { Banner },
  comments: Banner,
  created () {
    getBanner()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
