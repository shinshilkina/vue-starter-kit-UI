<template>
  <div class="filter">
    <Datarange :count-inputs="1"/>
    <Dropdown :show = false textInput = 'Сколько гостей'
              dropdownType = 'guests'
              :lines = "[{ text: 'взрослые', count: 0}, { text: 'дети', count: 0},
              { text: 'младенцы', count: 0} ]"/>
    <RangeSlider />
    <CheckboxList :title="'checkbox buttons'" :list="true" :items="[{text: 'Можно курить', id: 'smoke'},
      {text: 'Можно с питомцами', id: 'pets'}, {text: 'Можно пригласить гостей (до 10 человек)', id: 'guests'}]"/>
    <CheckboxList :rich="true" :title="'доступность'"  :items="[ {title: 'Широкий коридор', text: 'Ширина коридоров в номере не менее 91 см.', id: 'corridor'},
    {title: 'Помощник для инвалидов', text: 'На 1 этаже вас встретит специалист  и проводит до номера.', id: 'disabled'}]"/>
    <Dropdown :show = false textInput = 'Какие удобства'
              dropdownType = 'facilities'
              :lines = "[{ text: 'спальни', count: 2}, { text: 'кровати', count: 2},
              { text: 'ванные комнаты', count: 0} ]"/>
    <CheckboxList :expandable="true" :title="'дополнительные удобства'"  :items="[{text: 'Шампунь', id: 'shampoo'},
      {text: 'Телевизор', id: 'tv'},{text: 'Шампунь', id: 'shampoo2'},{text: 'Телевизор', id: 'tv2'},
      {text: 'Кроватка', id: 'cot'},{text: 'Стул для кормления', id: 'feedingChair'},
      {text: 'Письменный стол', id: 'table'}, {text: 'Завтрак', id: 'breakfast'}]"/>
  </div>
</template>

<script>
import Datarange from './Datarange';
import Dropdown from './Dropdown';
import CheckboxList from './CheckboxList';
import RangeSlider from './RangeSlider';
export default {
    name: 'Filter.vue',
    components: {Datarange, Dropdown, CheckboxList,
        RangeSlider}
};
</script>

<style lang="scss">
.filter {
  width: 18.3vw;
  min-width: 198.2px;
  margin: 3.6vh 9vw;
  .dropdown {
    margin-top: 22px;
    &__body {
      //width: 244px;
    }
  }
  .range-slider {
    margin: 30px 0 25px;
  }
  .rich.checkbox {
    margin: 30px 0 10px;
  }
  .expandable.checkbox {
    margin: 30px 0 30px;
  }
}


</style>
