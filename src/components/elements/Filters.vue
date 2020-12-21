<template>
  <div class="filter">
    <Datarange @select="onSelectDates" :count-inputs="1"/>
    <Dropdown :show = false textInput = 'Сколько гостей'
              dropdownType = 'guests'
              @select="onSelectGuests"
              :lines = "[{ text: 'взрослые', count: 0}, { text: 'дети', count: 0},
              { text: 'младенцы', count: 0} ] "/>
    <RangeSlider @select="onSelectRange"/>
    <CheckboxList :title="'checkbox buttons'" :list="true" @select="onSelectParamsList"
                  :items="[{title: 'Можно курить', id: 'smoke'},
      {title: 'Можно с питомцами', id: 'pets'}, {title: 'Можно пригласить гостей (до 10 человек)', id: 'guests'}]"/>
    <CheckboxList :rich="true" :title="'доступность'"  @select="onSelectParamsRich"
                  :items="[ {title: 'Широкий коридор', text: 'Ширина коридоров в номере не менее 91 см.', id: 'corridor'},
    {title: 'Помощник для инвалидов', text: 'На 1 этаже вас встретит специалист  и проводит до номера.', id: 'disabled'}]"/>
    <Dropdown :show = false textInput = 'Какие удобства'
              dropdownType = 'facilities'
              @select="onSelectFacilities"
              :lines = "[{ text: 'спальни', count: 2}, { text: 'кровати', count: 2},
              { text: 'ванные комнаты', count: 0} ]"/>
    <CheckboxList :expandable="true" :title="'дополнительные удобства'"
                  @select="onSelectParamsExpandable"
                  :items="[{title: 'Шампунь', id: 'shampoo'},
      {title: 'Телевизор', id: 'tv'},{title: 'Шампунь', id: 'shampoo2'},{title: 'Телевизор', id: 'tv2'},
      {title: 'Кроватка', id: 'cot'},{title: 'Стул для кормления', id: 'feedingChair'},
      {title: 'Письменный стол', id: 'table'}, {title: 'Завтрак', id: 'breakfast'}]"/>
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
        RangeSlider},
    data() {
        return {
            filterParams: {
                'dropdownGuests': [],
                'dates': {},
                'facilities': [],
                'range': [],
                'paramsList': [],
                'paramsRich': [],
                'paramsExpandable': []
            }
        };
    },
    methods: {
        onSelectGuests(value) {
            this.filterParams.dropdownGuests = value;
        },
        onSelectDates(start, end) {
            this.filterParams.dates = {'arrive': start, 'departure': end};
        },
        onSelectFacilities(value) {
            this.filterParams.facilities = value;
        },
        onSelectRange(value) {
            this.filterParams.range = value;
        },
        onSelectParamsList(value) {
            this.filterParams.paramsList = value;
        },
        onSelectParamsRich(value) {
            this.filterParams.paramsRich = value;
        },
        onSelectParamsExpandable(value) {
            this.filterParams.paramsExpandable = value;
        }
    }
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
