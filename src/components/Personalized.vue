<!--推荐歌单-->
<!--推荐专辑-->
<template>
  <div>
    <div class="title"><h2>{{title}}</h2></div>
    <div class="personalized">
      <div class="item" v-for="value in personalizedData" :key="value.id">
        <img class="personalized-top" :src="value.picUrl" alt="">
        <p class="personalized-bottom">{{ value.name }}}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalizedData: {
      type: Array,
      default: () => [],
      require: true
    },
    title: {
      type: String,
      default: '',
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/base";

.title {
  @include font_size($font_large);
  @include bg_sub_color;
  @include font_color;
  border-bottom: 1px solid #ccc;
  height: 80px;
  h2 {
    line-height: 80px;
    margin-left: 10px;
    font-weight: bold;
  }
}

.personalized {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @include bg_sub_color;
  padding-top: 20px;

  .item {
    width: 200px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 200px;
      border-radius: 25px;
    }

    p {
      @include clamp(2);
      @include font_color;
      @include font_size($font_samll);
      margin: 0 10px;
      text-align: center;
    }
  }
}
</style>
