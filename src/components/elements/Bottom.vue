<template>
  <div class="bottom-menu">
    <div class="bottom-menu__nav" :docs=dataText>
      <div class="bottom-menu__block" v-for="elem in dataText" :key="elem.id">
        <div class="bottom-menu__logo" v-if="elem.id==='title'">
          <img class="bottom-menu__logo__img" src="../../assets/logo.png"/>
          <img class="bottom-menu__logo__text-img" src="../../assets/TOXIN.png"/>
        </div>
        <h3 class="bottom-menu__title" v-if="elem.title">{{ elem.title }}</h3>
        <span class="bottom-menu__element" v-for="item in elem.elements" :key="item.id">
          {{ item.element }}
        </span>
      </div>
    </div>
    <div class="bottom-menu__social">
      <div  class="bottom-menu__copyright">
        <span>Copyright © 2018 Toxin UI Kit. All rights reserved.</span>
      </div>
      <div class="bottom-menu__social__links">
        <img class="bottom-menu__social__logo" src="../../assets/twotter.png">
        <img class="bottom-menu__social__logo" src="../../assets/facebook.png">
        <img class="bottom-menu__social__logo" src="../../assets/instagram.png">
      </div>
    </div>
  </div>
</template>

<script>
import dataText from '../../assets/data.json';
export default {
    name: 'Bottom.vue',
    props: ['docs'],
    data() {
        return {
            dataText: dataText.bottomData
        };
    }
};


</script>

<style lang="scss">
@import "../style";
.bottom-menu {
  background-color: white;
  &__nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 9.5vh 10.2vw 9vh 9vw;

    box-shadow: 0px 1px 0px rgba(31, 32, 65, 0.1);
  }
  &__block {
    max-width: 17.5vw;
    min-width: 210px;
    display: flex;
    flex-direction: column;
  }
  &__logo {
    margin: 0.5vh 0 1.2vh 0;
  }
  &__element {
    margin: 0.5vh 0 0.85vh 0;
  }
  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2.3vh 10.2vw 2vh 9vw;
    &__logo {
      width: 22px;
      height: 22px;
      margin-left: 17px;
    }
  }
}
@media screen and (max-width: 589px) {
  .bottom-menu {
    &__copyright, &__social__links {
      margin: 0 auto 1.7vh auto;
    }
  }
}
@media screen and (max-width: 1060px) {
  .bottom-menu {
    &__nav {
      text-align: center;
    }
    &__logo {
      margin: 0 auto;
    }
  }
}
</style>
