<template>
  <div class="range-slider">
    <div class="range-slider__title">
      <h3 class="range-slider__title title__text">диапазон цены </h3>
      <span class="range-slider__title title__price">{{ this.range[0]+this.currency }} - {{ this.range[1]+this.currency }}</span>
    </div>
    <VueSimpleRangeSlider
      :min="0"
      :max="20000"
      v-model="range"
    />
    <span class="range-slider__description">Стоимость за сутки пребывания в номере</span>
  </div>
</template>

<script>
import VueSimpleRangeSlider from 'vue-simple-range-slider';

export default {
    name: 'RangeSlider.vue',
    components: {VueSimpleRangeSlider},
    props: {
        currency: {type: String, default: '₽'}
    },
    data() {
        return {
            range: [20, 1000],
            number: 100
        };
    }
};
</script>

<style lang="scss">
@import "../style";

.range-slider {
  &__title {
    display: flex;
    justify-content: space-between;
    .title {
      &__text, &__price {
        line-height: 18px;
      }
      &__text {
        margin: 0;
        letter-spacing: 0.07em;
      }
      &__price {
        font-size: 13px;
      }
    }
  }
  &__description {
    font-size: 11.8px;
    letter-spacing: 0.075em;
  }
}

.simple-range-slider {
  width: 100%;
  &-bg-bar {
    direction: ltr;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    min-width: 50px;
    height: 4px;
    position: relative;
    margin: 21px 0 10px;
    border-radius: 1.5px
  }

  &-bar {
    height: 100%;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  }

  &-anchor {
    position: absolute;
    width: 13px;
    height: 13px;
    top: -6.5px;
    left: 1px;
    border: 2px solid #FFFF;
    border-radius: 50%;
  }

  &-handle {
    height: 100%;
    width: 100%;
    opacity: 1;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border-radius: 50%;
  }

  &-handle:focus {
    outline: none;
    border-radius: 8px;
    -webkit-box-shadow: 0 0 3px 3px #FFFF;
    box-shadow: 0 0 3px 3px #FFFF
  }

  &-popover-left {
    left: -3px;
    right: unset !important
  }

  &-popover-arrow, &-popover input, &-popover {
    display: none;
  }
}
</style>
