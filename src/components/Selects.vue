<template>
  <div class='select'>
    <el-select v-model="value" placeholder="Все" size="small" @change="filter">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="reset" size='small'>Сбросить</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '0.0000',
        label: 'Безрисковые'
      }, {
        value: '0.5000',
        label: 'Умеренный риск'
      }, {
        value: '1.0000',
        label: 'Рисковые'
      }],
      value: ''
    }
  },
  methods: {
    reset () {
      this.value = ''
      this.$emit('change', this.value)
    },
    filter (e) {
      this.$emit('change', e)
    }
  },
  mounted () {
    this.reset()
  }
}
</script>
<style lang="scss" scoped>
  .select {
    width: 75%;
    margin: 0 auto;
    @media screen and (max-width: 515px) {
      width: 70%;
      display: flex;
      justify-content: space-evenly;
    }
}
</style>
