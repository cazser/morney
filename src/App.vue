<template>
  <div>
    <router-view/>
    
   
  </div>
</template>

<style lang="scss">
//@import "~@/assets/style/helper.scss";
//@import "~@/assets/style/reset.scss";
*{padding: 0; margin: 0; box-sizing: border-box;}
*::after, *::before{box-sizing: boder-box;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
}
a{
  text-decoration: none;
  color: inherit;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
