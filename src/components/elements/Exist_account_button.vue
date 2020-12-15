<template>
  <div class="account" v-bind:class=formClass>
    <span class="account__text">{{ leftText }}</span>
    <div><h3 class="account__button-login button-login">{{ buttonText }}</h3></div>
  </div>
</template>
<script>
export default {
name: "Exist_account_button.vue",
  props: {
    leftText: {type: String, default: "Уже есть аккаунт на Toxin"},
    buttonText: {type: String, default: "Создать"},
    formClass: {type: String, default: "account"}
  },
}
</script>

<style lang="scss">
.account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__button-login {
    width: 80px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
  }
}
</style>
