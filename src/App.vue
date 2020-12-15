<template>
  <div id="app">
    <Search_form />
  </div>
</template>

<script>
import Colors_and_type from "./components/elements/Colors_and_type";
import Header from "./components/elements/Header";
import Bottom from "./components/elements/Bottom";
import Bottom_cart from "./components/elements/Bottom_cart";
import Search_form from "./components/elements/Search_form";
export default {
  name: 'app',
  components: {Header, Colors_and_type, Bottom, Bottom_cart, Search_form},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

#app {
  width: 98.4vw;
  height: 100vh;
  background-color: #E5E5E5;
}
</style>
