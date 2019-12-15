<template>
  <div class='header'>
      <img src="@/assets/images/logo.svg" alt="БКС логотип">
      <span><a href="tel:+78005004040">8 800 500-40-40</a> — звонок по России бесплатный</span>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5% 3%;
    span {
      font-size: 0.9rem;
      @media screen and (max-width: 515px) {
        position: absolute;
        top: 7%;
        right: 0;
      }
    }
    img{
      width: 220px;
    }
  }
</style>
