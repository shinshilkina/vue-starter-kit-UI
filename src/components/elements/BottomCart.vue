<template>
  <div class="bottom-cart">
    <div class="bottom-cart__logo">
      <img class="bottom-cart__logo__img" src="../../assets/logo.png"/>
      <img class="bottom-cart__logo__text-img" src="../../assets/TOXIN.png"/>
    </div>
    <div class="bottom-cart__text">
      <span>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</span>
    </div>
    <div class="bottom-cart__social">
      <img class="bottom-cart__social__logo" src="../../assets/twotter.png">
      <img class="bottom-cart__social__logo" src="../../assets/facebook.png">
      <img class="bottom-cart__social__logo" src="../../assets/instagram.png">
    </div>
  </div>
</template>

<script>
import dataText from "../../assets/data.json";
export default {
  name: "BottomCart.vue",
  props: ['docs'],
  data() {
    return {
      dataText: dataText.bottomData
    }
  }
}
</script>

<style lang="scss">
@import "../style";
.bottom-cart {
  padding: 10vh 0;
  background-color: #FFFF;
  &__social {
    max-width: 110px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    &__logo {
      width: 22px;
      height: 22px;
    }
  }
  &__logo {
    align-items: center;
    justify-content: center;
    margin-bottom: 1.7vh;
  }
  &__text {
    max-width: 40vw;
    min-width: 260px;
    text-align: center;
    margin: 0 auto 2.6vh auto;
  }
}
</style>
