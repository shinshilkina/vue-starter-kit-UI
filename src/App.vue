<template>
  <div id="app">
    <Room_card />
  </div>
</template>

<script>
import Colors_and_type from "./components/elements/Colors_and_type";
import Header from "./components/elements/Header";
import Bottom from "./components/elements/Bottom";
import Bottom_cart from "./components/elements/Bottom_cart";
import Search_form from "./components/elements/Search_form";
import Register_form from "./components/elements/Register_form";
import Login_form from "./components/elements/Login_form";
import Room_card from "./components/elements/Room_card";
import Room_cart_S from "./components/elements/Room_cart_S";
export default {
  name: 'app',
  components: {Header, Colors_and_type, Bottom, Bottom_cart,
    Search_form, Register_form, Login_form, Room_card,
    Room_cart_S},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

#app {
  width: 100vw;
  height: 100vh;
  background-color: #E5E5E5;
}
</style>
