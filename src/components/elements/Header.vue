<template>
  <div class="header">
    <div class="header__logo">
      <img class="header__logo__img" src="../../assets/logo.png"/>
      <img class="header__logo__text-img" src="../../assets/TOXIN.png"/>
    </div>
    <div class="header__navigation" v-for="item in this.navItems" :key="item.id">
      <router-link :to=item.href>{{ item.title }}</router-link>
    </div>
    <div class="header__buttons" v-if="authorization.name === null || authorization.lastName === null">
      <div><button class="header__button-login button-login">{{ buttonsText[0].title }}</button></div>
      <button class="header__button-register button-register">{{ buttonsText[1].title }}</button>
    </div>
    <span class="header__profile" v-if="authorization.name !== null || authorization.lastName !== null">
      {{ authorization.name }} {{authorization.lastName }}
    </span>
  </div>
</template>

<script>
import data from '../../data/data.ru.json';
export default {
    name: 'Header.vue',
    data() {
        const navItems = data.header.items;
        const buttonsText = data.header.buttons;
        return {
            navItems,
            buttonsText,
            authorization: {
                name : null,
                lastName : null
            }
        };
    }
};
</script>

<style lang="scss">
@import "../style";
.header {

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  padding: 0.6vh 9vw 1.4vh 9vw;

  background-color: #FFFF;
  box-shadow: 0 1rem 2rem rgba(31, 32, 65, 0.05);


  &__navigation {
    router-link {
      margin-right: 2vw;
    }
  }
  &__buttons {
    min-width: 13.8vw;
    display: flex;
    justify-content: space-between;
  }
  .button-login {
    height: 3.4vh;
    position: relative;
    padding: 0 1.3vw;
    border-radius: 22px;
    background-color: #FFFFFF;
    color: $purple;
    border: 2px solid #8BA4F9;
    letter-spacing: 0.05em;
  }

  &__button-register {
    height: 3.4vh;
    padding: 0 1.4vw;
    margin-left: 1.2vw;

    border: none;
    border-radius: 22px;
    letter-spacing: 0.05em;

    background-image: $primaryGradient;
    color: #FFFF;
  }
  &__profile {
    line-height: 3vh;
    padding: 0 0.5vw 0 2.1vw;
    margin: 1.4vh 0  1.5vh 0;
    border-left: 1px solid $darkShade50;
  }
}
</style>
