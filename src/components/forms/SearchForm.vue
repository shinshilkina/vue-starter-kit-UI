<template>
  <div class="search-form">
    <h1>Найдём номера под <br> ваши пожелания</h1>
    <Datarange :count-inputs="2"/>
    <Dropdown :show = false textInput = 'Сколько гостей'
      dropdownType = 'guests'
              :lines = "[{ text: 'взрослые', count: 0}, { text: 'дети', count: 0},
              { text: 'младенцы', count: 0} ]"/>
    <FormsButton textButton="подобрать номер"/>
  </div>
</template>

<script>
import Datarange from '../elements/Datarange';
import Dropdown from '../elements/Dropdown';
import FormsButton from '../elements/FormsButton';
export default {
    name: 'Search_form',
    components: {Dropdown, Datarange, FormsButton}
};
</script>

<style lang="scss">
@import "../style";

.search-form {
  width: 380px;
  height: 374px;

  padding: 22px 29px;
  .datarange {
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
