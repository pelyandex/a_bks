<template>
  <div class="home">
    <Header />
    <h1>Продуктовая витрина с&nbsp;фильтрацией уровня риска</h1>
    <Selects @change='filterProducts'/>
    <Cards :filtered='filtered' :pageCount='pageCount'/>
    <Pagination :filtered='filtered' @clicked='pageSwap'/>
  </div>
</template>

<script>
import Cards from '@/components/Cards'
import Selects from '@/components/Selects.vue'
import Header from '@/components/Header.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'home',
  data () {
    return {
      pageCount: null
    }
  },
  components: {
    Selects,
    Header,
    Cards,
    Pagination
  },
  computed: {
    filtered () {
      return this.$store.getters.getFilteredItems
    }
  },
  methods: {
    filterProducts (e) {
      const tempArr = this.$store.getters.returnState.filter(el => el.risk_ratio.includes(e))
      this.$store.dispatch('changeFilter', tempArr)
      if (this.pageCount > 5 && tempArr.length < 5) { this.pageSwap(1) }
    },
    pageSwap (e) {
      this.pageCount = e * 6 - 1
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style lang="scss" scoped>
  h1{
    text-align: center;
    @media screen and (max-width: 515px) {
        margin: 8% 4%;
      }
    @media screen and (max-width: 360px) {
      margin: 8% 3%;
    }
  }
</style>
