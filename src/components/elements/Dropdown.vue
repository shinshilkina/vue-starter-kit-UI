<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <h3 v-if="dropdownType === 'guests'">гости</h3>
      <h3 v-if="dropdownType === 'facilities'">удобства номера</h3>
      <input class="dropdown__input" :placeholder="this.textInputLocal" @click="showDropdown()" readonly>
      <img class="dropdown__show-more" src="../../assets/explandMore.png" @click="showDropdown()">
    </div>
    <div class="dropdown__body" v-if="this.showLocal">
      <ul class="dropdown__elements">
        <li class="dropdown__element" v-for="line in this.linesLocal" :key="line.id">
          <h3>{{ line.text }}</h3>
          <div class="dropdown__element__buttons">
            <button class="dropdown__button-minus" :class="line.count === 0 ? 'disable' : null" @click="changeCountMinus(line)">-</button>
            <h3>{{ line.count }}</h3>
            <button class="dropdown__button-plus" @click="changeCountPlus(line)">+</button>
          </div>
        </li>
      </ul>
      <div class="dropdown__buttons">
        <h3 class="dropdown__clear" v-if="this.linesLocal.find(line => line.count > 0)" @click="clear">очистить</h3>
        <h3 class="dropdown__apply" @click="apply(dropdownTypeLocal)">применить</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Dropdown.vue',
    props: {
        show : Boolean,
        textInput: {type: String, default: 'Сколько гостей'},
        dropdownType: {type: String, default: 'guests'},
        // eslint-disable-next-line vue/require-valid-default-prop
        lines: {type: Array, default: [{ text: 'взрослые', count: 0, id: 'adults'}, { text: 'дети', count: 0, id: 'children'}, { text: 'младенцы', count: 0, id: 'babies'}]}
    },
    data() {
        return {
            showLocal: this.show,
            textInputLocal: this.textInput,
            dropdownTypeLocal: this.dropdownType,
            linesLocal: this.lines
        };
    },
    methods: {
        showDropdown() {
            this.showLocal === false ? this.showLocal = true : this.showLocal = false;
        },
        changeCountMinus(line) {
            line.count > 0 ? line.count-- : null;
        },
        changeCountPlus(line) {
            line.count++;
        },
        apply(dropdownType) {
            if (dropdownType === 'guests') {
                let countGuests = 0;
                this.linesLocal.map(line => {
                    countGuests += line.count;
                    return countGuests;
                });
                countGuests !== 0 ?
                    countGuests === 1 ?
                        this.textInputLocal = countGuests + ' гость' :
                        countGuests > 1 && countGuests < 5 ?
                            this.textInputLocal = countGuests + ' гостя' :
                            this.textInputLocal = countGuests + ' гостей' :
                    this.textInputLocal = 'Сколько гостей';
            }
            this.showLocal = false;
        },
        clear() {
            this.linesLocal.map(line => {
                line.count = 0;
            });
            this.textInputLocal = 'Сколько гостей';
            this.showLocal = false;
        }
    }
};
</script>

<style  lang="scss">
@import "../style";
.dropdown {
  position: relative;
  &__input {
    width: 100%;
    margin-top: -8px;
  }
  &__show-more {
    position: absolute;
    width: 12px;
    height: 8px;
    bottom: 1.8vh;
    right: 15px;
    background-image: url("../../assets/explandMore.png");
  }
  &__body {
    position: absolute;
    width: 92%;
    z-index: 1;

    background-color: #FFFF;
    border: 1px solid $darkShade25;
    border-top: transparent;
    padding: 0 5px 0 14px;
  }
  &__elements {
    list-style: none;
    margin: 0 0;
    padding: 0;
  }
  &__element, &__element__buttons {
    display: flex;
    justify-content: space-between;
  }
  &__element__buttons {
    width: 92px;
    align-items: center;
  }
  &__button-minus, &__button-plus {
    width: 30px;
    height: 30px;
    @include MonserratH3();

    border-radius: 50%;
    background-color: #FFFF;
    border: 1px solid $darkShade50;
    cursor: pointer;
  }
  &__buttons {
    display: flex;
  }
  &__apply {
    margin-left: auto;
    color: $purple;
  }
  &__clear {
    color: $darkShade50;
  }
  &__apply, &__clear, &__show-more, &__input {
    cursor: pointer;
  }
  .disable {
    border-color: $darkShade25;
  }
}
</style>
