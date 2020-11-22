<template>
  <div class="room-card-s">
    <Slider />
    <div class="room-card-s__title">
      <h3 class="room-card-s__title__symbol">№</h3>
      <h1 class="room-card-s__title__number">{{roomNumber}}</h1>
      <h3 class="room-card-s__title__type">{{ roomType}}</h3>
      <h3 class="room-card-s__title__cost">{{roomCost}}{{currency}}</h3>
      <span class="room-card-s__title__time-interval"> в сутки</span>
    </div>
    <div class="room-card-s__rate">
      <div class="room-card-s__rate__area" v-for="i in numbers">
        <div v-if="i <= countStars" class="checked">
          <input type="radio" v-bind:id="roomNumber + 'star' + i" v-bind:value="i" checked>
          <label v-bind:for="roomNumber + 'star' + i" title="i"></label>
        </div>
        <div v-if="i > countStars">
          <input type="radio" v-bind:id="roomNumber + 'star' + i" v-bind:value="i">
          <label v-bind:for="roomNumber + 'star' + i" title="i"></label>
        </div>
      </div>
      <div class="room-card-s__feedback">
        <span class="room-card-s__feedback__count"> {{countFeedbacks}}</span>
        <span class="room-card-s__feedback__text">Отзывов</span>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
export default {
name: "Room_cart_S.vue",
  components: {Slider},
  props: {
    roomNumber: {type: Number, default: 840},
    roomType: {type: String, default: ""},
    roomCost: {type: Number, default: 9990},
    currency: {type: String, default: "₽"},
    countStars: {type: Number, default: 3},
    countFeedbacks: {type: Number, default: 65}
  },
  data() {
  let numbers = [1,2,3,4,5];
    return {
      numbers
    }
  }
}
</script>

<style lang="scss">
@import "../style";

.room-card-s {
  width: 270px;
  height: 257px;
  border-radius: 4px;
  overflow:hidden;

  background-color: #ffff;
  &__title {
    display: flex;
    margin: 24px 18px 13px 19px;
    &__symbol, &__number, &__type, &__cost, &__time-interval {
      align-self: flex-end;
      margin: 0;
    }
    &__symbol {
      font-size: 16px;
    }
    &__number {
      font-size: 18.5px;
      line-height: 18px;
      margin: 0 7px 0 3px;
    }
    &__type {
      margin: 0 auto 0 0;
      line-height: 12px;
    }
    &__cost {
      font-size: 15px;
      margin: 0 6px 0 0;
      color: $darkShade50;
    }
    &__time-interval {
      font-size: 13px;
      color: $darkShade50;
      line-height: 13px;
      letter-spacing: 0.4px;
    }
  }
  &__rate {
    display: flex;
    margin: 0 19px 0 23px;
    padding-top: 11px;
    border-top: 1px solid rgba(31, 32, 65, 0.1);;
    &__area {
      input {
        position:absolute;
        top:-9999px;
      }
      label:before {
        content: '★';
      }
      label {
        float: right;
        width: 0.7em;
        margin-right: 0.31rem;

        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 1.7em;

        color: transparent;
        background-image: url("/src/assets/star_border.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
      input:checked ~ label {
        color: transparent;
        background-image: url("/src/assets/star.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  &__feedback {
    margin-left: auto;
    &__count, &__text {
      line-height: 14px;
      color: $darkShade50;
    }
    &__count {
      font-weight: bold;
    }
  }
}
</style>
