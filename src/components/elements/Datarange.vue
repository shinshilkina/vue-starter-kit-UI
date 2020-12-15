<template>
  <div class="datarange">
    <div class="dropdown__date">
      <div class="dropdown__date__title">прибытие</div>
      <input class="dropdown__date__input arrived" placeholder="ДД.ММ.ГГГГ" ref="arrived" readonly>
      <img class="dropdown__date__expand" src="../../assets/expand_more.png">
    </div>
    <div class="dropdown__date">
      <div class="dropdown__date__title">выезд</div>
      <input  class="dropdown__date__input departure" placeholder="ДД.ММ.ГГГГ" ref="departure" readonly>
      <img class="dropdown__date__expand" src="../../assets/expand_more.png">
    </div>
  </div>
</template>

<script>
import Lightpick from 'lightpick';
export default {
  name: "Datarange.vue",
  data() {
    let countOfDays = 0;
    let picker;
    return {
      picker, countOfDays
    };
  },
  mounted() {
    this.picker = new Lightpick({
      field: this.$refs.arrived,
      secondField: this.$refs.departure,
      singleDate: false,
      lang: 'ru',
      format: 'DD.MM.YYYY',
      locale: {
        buttons: {
          reset: 'очистить',
          apply: 'применить'
        },
        tooltip: {
          one: 'день',
          few: 'дня',
          many: 'дней',
        },
        pluralize: function(i, locale) {
          if ('one' in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
          if ('few' in locale && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return locale.few;
          if ('many' in locale && (i % 10 === 0 || i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)) return locale.many;
          if ('other' in locale) return locale.other;

          return '';
        }
      },
      onSelect: function(start, end) {
        (start && end) ? this.countOfDays =  Math.round((end - start)/(1000*60*60*24)) + 1: null;
        console.log(typeof this.countDays);
      },
      footer: true
    });
  },
  beforeDestroy() {
    this.picker.destroy();
  }
}
</script>

<style lang="scss">
@import "../style";
@import "calendar";

.dropdown__date {
  position: relative;
  font-family: 'Monserrat', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  &__title {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 0.5vh;

    color: $darkShade100;
  }
  &__input {
    width: 150px;
  }
  &__expand {
    position: absolute;
    width: 12px;
    height: 8px;
    bottom: 1.8vh;
    right: 1.3vw;
    background-image: url("../../assets/expand_more.png");
  }
}
</style>
