<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
</style>
