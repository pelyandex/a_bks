<template>
  <div class="cards">
    <div class="card" v-for="(item,index) in swichCards" :key="index+item">
      <h3>{{item.name}}</h3>
      <p v-if="item.risk_ratio === '0.0000'">100% защита</p>
      <div><img src="../assets/images/product-default.svg" alt="Продукт"></div>
      <div class="card_subscr">
        <div>Потенциальный доход</div>
        <div v-if="item.expected_income.first">{{item.expected_income.first | getIncome}}% годовых</div>
        <div v-else>Не ограничен</div>
        <div>Защита капитала</div>
        <div>{{item.risk_ratio | getRiskRatio}} %</div>
        <div>Минимальная сумма</div>
        <div>{{item.min_sum | getMinSum}} ₽</div>
        <div>Срок инвестиций</div>
        <div>{{ item | getSeconds | getMounth}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filtered', 'pageCount'],
  computed: {
    swichCards () {
      return this.filtered.slice(this.pageCount - 5, this.pageCount + 1)
    }
  },
  filters: {
    getRiskRatio (ratio) {
      return Number(ratio) * 100
    },
    getIncome (income) {
      return Math.ceil(income)
    },
    getMinSum (minsum) {
      return Number(minsum).toLocaleString('ru-RU')
    },
    getSeconds (item) {
      return Math.ceil((new Date(item.contract.execution_date).getTime() - new Date(item.period.start_date).getTime()) / 2629743830)
    },
    getMounth (mouth) {
      if (mouth > 4) return `${mouth} месяцев`
      return `${mouth} месяца`
    }
  }
}
</script>

<style lang="scss" scoped>
  .cards {
    width: 75%;
    margin: 2% auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2vw;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr
    }
    @media screen and (max-width: 450px) {
      width: 70%;
      justify-items: center;
      grid-template-columns: 1fr
    }
    @media screen and (max-width: 360px) {
      width: 80%;
    }
    .card {
      border: 1px solid gainsboro;
      border-radius: 15px;
      max-width: 25vw;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 250px;
      min-height: 350px;
      &:hover {
        transition: all .4s;
        box-shadow: 10px 20px 10px gray;
        transform: scale(1.005);
        cursor: pointer;
      }
      .card_subscr {
        margin: 15px 0;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
      }
    }
  }
</style>
