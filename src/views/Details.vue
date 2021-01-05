<template>
  <div class="detail">
    123
  </div>
</template>

<script>
export default {
  name: 'details',
  created () {
    console.log(123)
  }
}
</script>

<style scoped lang="scss">
.detail {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f00;
}
</style>
