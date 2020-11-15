<template xmlns="http://www.w3.org/1999/html">
  <div class="search-form">
    <h1>Найдём номера под <br> ваши пожелания</h1>
    <Datarange />
    <Dropdown :show = false textInput = 'Сколько гостей'
      dropdownType = 'guests'
              :lines = "[{ text: 'взрослые', count: 0}, { text: 'дети', count: 0},
              { text: 'младенцы', count: 0} ]"/>
    <FormsButton button-text="подобрать номер"/>
  </div>
</template>

<script>
import Datarange from "./Datarange";
import Dropdown from "./Dropdown";
import FormsButton from "./FormsButton";
export default {
  name: "Search_form",
  components: {Dropdown, Datarange, FormsButton}
}
</script>

<style lang="scss">
@import "../style";

.search-form {
  width: 319px;
  height: 329px;

  padding: 22px 29px;
  .datarange {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2.3vh;
  }
  .dropdown {
    margin-top: 20px;
  }
  .forms-button {
    margin-top: 30px;
  }
}
/*

 */
</style>
