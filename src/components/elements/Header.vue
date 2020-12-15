<template>
  <div class="header">
    <div class="header__logo">
      <img class="header__logo__img" src="../../assets/logo.png"/>
      <img class="header__logo__text-img" src="../../assets/TOXIN.png"/>
    </div>
    <div class="header__navigation" v-for="item in this.navItems">
      <router-link to=item.href>{{ item.title }}</router-link>
    </div>
    <div class="header__buttons" v-if="authorization.name === null || authorization.lastName === null">
      <div><h3 class="header__button-login button-login">login</h3></div>
      <h3 class="header__button-register button-register">register</h3>
    </div>
    <span class="header__profile" v-if="authorization.name !== null || authorization.lastName !== null">
      {{ authorization.name }} {{authorization.lastName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  data() {
    return {
      navItems: [
        {title: "Home", href: "#"},
        {title: "About Us", href: "#"},
        {title: "Services", href: "#"},
        {title: "Careers", href: "#"},
        {title: "News", href: "#"},
        {title: "Documentation", href: "#"}
      ],
      authorization: {
        name : "Cosmin",
        lastName : "Negoita"
      }
    }
  }
}
</script>

<style lang="scss">
@import "../style";
.header {

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  padding: 0.3vh 9vw;

  background-color: #FFFF;
  box-shadow: 0 1rem 2rem rgba(31, 32, 65, 0.05);


  &__navigation {
    router-link {
      margin-right: 2vw;
    }
  }
  &__buttons {
    width: 13.8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__button-register {
    height: 3.2vh;
    padding: 0 1.4vw;
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
