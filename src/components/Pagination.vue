<template>
  <el-pagination
  :page-size="6"
  layout="prev, pager, next"
  @current-change='clicked'
  :total="filtered.length">
</el-pagination>
</template>

<script>
export default {
  props: ['filtered'],
  methods: {
    clicked (ev) {
      this.$emit('clicked', ev)
    },
    startClicked () {
      // Метод задает стартовые 6 карточек
      this.clicked(1)
    }
  },
  mounted () {
    this.startClicked()
  }
}
</script>

<style lang="scss" scoped>
 .el-pagination {
   display: flex;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width: 360px) {
      width: 80%;
  }
 }
</style>
