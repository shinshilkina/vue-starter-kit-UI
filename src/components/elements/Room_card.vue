<template>
  <div class="room-card">
    <div class="room-card__title">
      <h3 class="room-card__title__symbol">№</h3>
      <h1 class="room-card__title__number">{{roomNumber}}</h1>
      <h3 class="room-card__title__type">{{roomType}}</h3>
      <h3 class="room-card__title__cost">{{ roomCost }}{{ currency }}</h3>
      <span class="room-card__title__time-interval"> в сутки</span>
    </div>
    <Datarange />
    <Dropdown :show = false textInput = 'Сколько гостей'
              dropdownType = 'guests'
              :lines = "[{ text: 'взрослые', count: 0}, { text: 'дети', count: 0},
              { text: 'младенцы', count: 0} ]"/>
    <Check_table :cost="roomCost" :currency="currency" :count-days="countDays"/>
    <FormsButton textButton="забронировать"/>
  </div>
</template>

<script>
import Datarange from "./Datarange";
import Dropdown from "./Dropdown";
import Check_table from "./Check_table";
import FormsButton from "./FormsButton";
export default {
  name: "Room_card.vue",
  components: {Check_table, Datarange, Dropdown, FormsButton},
  props: {
    roomNumber: {type: Number, default: 840},
    roomType: {type: String, default: ""},
    roomCost: {type: Number, default: 9990},
    currency: {type: String, default: "₽"}
  },
  data() {
    let countDays = 0;
    return {
      countDays
    }
  },
  watch: {
    countDays: function () {
      console.log();
      this.countDays = Datarange.data().picker.onSelect();
    }
  }
}
</script>

<style lang="scss">
@import "../style";
.room-card {
  width: 380px;
  height: 511px;
  padding: 40px 27px 27px 29px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &__title {
    display: flex;
    &__symbol, &__number, &__type, &__cost, &__time-interval {
      align-self: flex-end;
    }
    &__symbol {
      font-size: 16px;
      margin: 0 6px 3px 0;
    }
    &__number {
      margin: 0 7px 0 0;
    }
    &__type {
      margin: 0 auto 3px 0;
    }
    &__cost {
      font-size: 15px;
      margin: 0 6px 3px 0;
      color: $darkShade50;
    }
    &__time-interval {
      font-size: 13px;
      color: $darkShade50;
    }
  }
  .datarange {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 21px;
  }
  .dropdown {
    margin-top: 20px;
  }
  .check-table {
    margin-top: 12px;
  }
  .forms-button {
    margin-top: 9px;
  }
}
</style>
