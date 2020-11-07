<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <input class="dropdown__input" :placeholder="this.textInput" @click="showDropdown()">
      <img class="dropdown__show-more" src="../../assets/expand_more.png" @click="showDropdown()">
    </div>
    <div class="dropdown__body">
      <ul class="dropdown__elements">
        <li class="dropdown__element" v-for="line in this.lines">
          <h3>{{ line.text }}</h3>
          <div class="dropdown__element__buttons">
            <button class="dropdown__button-minus" :class="line.count === 0 ? 'disable' : null" @click="changeCountMinus(line)">-</button>
            <h3>{{ line.count }}</h3>
            <button class="dropdown__button-plus" @click="changeCountPlus(line)">+</button>
          </div>
        </li>
      </ul>
      <div class="dropdown__buttons">
        <h3 class="dropdown__clear" v-if="this.lines.find(line => line.count > 0)" @click="clear">очистить</h3>
        <h3 class="dropdown__apply" @click="apply(dropdownType)">применить</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Dropdown.vue",
  data() {
    let show = false;
    let textInput = 'Сколько гостей';
    let dropdownType = 'guests';
    let lines = [
      { text: 'взрослые', count: 0},
      { text: 'дети', count: 0},
      { text: 'младенцы', count: 0}
    ];
      return {
      show, lines, textInput, dropdownType
    }
  },
  methods: {
    showDropdown() {
      this.show === false ? this.show = true : this.show = false;
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
        this.lines.map(line => {
          countGuests += line.count;
          return countGuests;
        });
        countGuests !== 0 ?
          countGuests === 1 ?
            this.textInput = countGuests + ' гость' :
            countGuests > 1 && countGuests < 5 ?
              this.textInput = countGuests + ' гостя' :
              this.textInput = countGuests + ' гостей' :
          this.textInput = 'Сколько гостей';
      }
      this.show = false;
    },
    clear() {
      this.lines.map(line => {
        line.count = 0;
      })
      this.textInput = 'Сколько гостей';
      this.show = false;
    }
  }
}
</script>

<style  lang="scss">
@import "../style";
.dropdown {
  &__header {
    position: relative;
  }
  &__input {
    width: 320px;
  }
  &__show-more {
    position: absolute;
    width: 12px;
    height: 8px;
    bottom: 1.8vh;
    right: 1.3vw;
    background-image: url("../../assets/expand_more.png");
  }
  &__body {
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
