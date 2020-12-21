<template>
  <div class="login">
    <h1>Войти</h1>
    <input class="login__email" placeholder="Email" >
    <input class="login__password" placeholder="Пароль">
    <FormsButton textButton="войти" />
    <ExistAccountButton left-text="Нет аккаунта на Toxin?"
                          button-text="Создать" form-class="login__register-area" />
  </div>
</template>

<script>
import FormsButton from "../elements/FormsButton";
import ExistAccountButton from "../elements/ExistAccountButton";
export default {
name: "LoginForm.vue",
  components: {FormsButton, ExistAccountButton}
}
</script>

<style lang="scss">
@import "../style";

.login {
  width: 380px;
  height: 358px;
  padding: 24px 29px 24px 28.5px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &__email, &__password {
    width: 100%;
  }
  &__email {
    margin-top: 4px;
  }
  &__password {
    margin-top: 10px;
  }
  .forms-button {
    margin-top: 21px;
  }
  &__register-area {
    margin-top: 17px;
  }
}

</style>
