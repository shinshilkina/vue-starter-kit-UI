<template>
  <form class="register" @submit="send()">
    <h1 class="register__title">Регистрация аккаунта</h1>
    <input class="register__name" placeholder="Имя" v-model="this.$props.name">
    <input class="register__last-name" placeholder="Фамилия" v-model="secondName">
    <div class="register__radio-gender">
      <label class="radio-gender">Мужчина
        <input name="radio-gender" type="radio" checked="checked" value="male">
        <span class="radio-gender__checkmark"></span>
      </label>
      <label class="radio-gender">Женщина
        <input name="radio-gender" type="radio" value="female">
        <span class="radio-gender__checkmark"></span>
      </label>
    </div>
    <label class="register__label" for="birthday">дата рождения</label>
    <masked-input id="birthday" class="register__birthday" placeholder="ДД.ММ.ГГГГ" mask="11.11.1111" v-model="birthday"/>
    <label class="register__label">данные для входа в сервис</label>
    <input class="register__email" type="email" placeholder="Email" v-model="email">
    <input class="register__password" type="password" placeholder="Пароль" v-model="password">
    <div class="register__offers">
      <input id="toggle-round" class="toggle-round" type="checkbox">
      <label for="toggle-round" class="toggle-round__label"></label>
      <label class="toggle-round__label-text">Получать спецпредложения</label>
    </div>
    <FormsButton textButton="перейти к оплате" />
    <Exist_account_button />
  </form>
</template>

<script>
import FormsButton from "./FormsButton";
import Exist_account_button from "./Exist_account_button";
import MaskedInput from "vue-masked-input";
export default {
name: "Register_form.vue",
  components: {Exist_account_button, FormsButton, MaskedInput},
  props: {
    email: String,
    password: String,
    errorMessage: String,
    birthday: '',
    name: String,
    secondName: ''
  },
  data() {
    return {

    }
  },
  methods: {
    send() {
      let errorMessage = 'Form not filled properly'
      /*alert("email: "+ email+  " password " +  password + " name: " +
        this.name + " secondName " + secondName + " birthday " + birthday +
        errorMessage);*/
      alert(this.$props.name)
    }
  }
}
</script>

<style lang="scss">
@import "../style";

.register {
  width: 380px;
  height: 646px;
  padding: 24px 29px;
  input {
    width: 100%;
  }
  &__name {
    margin-top: 5px;
  }
  &__last-name, &__radio-gender, &__password {
    margin-top: 10px;
  }
  &__radio-gender {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  &__birthday {
    margin-bottom: 19px;
  }
  &__birthday, &__email {
     margin-top: 3px;
   }
  &__offers {
    display: flex;
    align-items: center;
    margin-top: 7px;
  }
  .forms-button {
    margin-top: 22px;
  }
  .exist-account {
    margin-top: 20px;
  }
}

.radio-gender {
  position: relative;
  margin-right: 22px;
  padding-left: 31px;
  cursor: pointer;
  user-select: none;
  @include MonserratSpan();
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #FFFF;
    border: 1px solid $purple;
    border-radius: 50%;
  }
}

.radio-gender input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-gender__checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.radio-gender input:checked ~ .radio-gender__checkmark:after {
  display: block;
}

.radio-gender .radio-gender__checkmark:after {
  top: 3px;
  left: 3.3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-image: $primaryGradient;
}

.toggle-round {
  display:none;
  &__label-text {
    @include MonserratSpan();
    margin-left: 10px;
  }
}
.toggle-round + .toggle-round__label {
  display: block;
  position: relative;
  cursor: pointer;
}
.toggle-round + .toggle-round__label {
  padding: 3px;
  width: 32px;
  height: 12px;
  background-color: #FFFF;
  border-radius: 50px;
  border: 1px solid $darkShade25;
}
input.toggle-round + .toggle-round__label:after {
  display: block;
  position: absolute;
  content: "";
  width: 12px; height: 12px;
  background: rgba(31, 32, 65, 0.25);
  border-radius: 100%;
  transition: margin 0.5s;
}
input.toggle-round:checked + .toggle-round__label {
  border: 1px solid $purple;
}
input.toggle-round:checked + .toggle-round__label:after {
  margin-left: 19px;
  background-image: $primaryGradient;
}
</style>
