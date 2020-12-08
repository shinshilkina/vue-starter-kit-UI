<template>
  <div class="datarange">
    <div v-if="this.$props.countInputs === 2" class="datarange__inputs__two">
      <div class="dropdown__date">
        <div class="dropdown__date__title">прибытие</div>
        <input class="dropdown__date__input arrived cov-datepicker"
               placeholder="ДД.ММ.ГГГГ"
               ref="arrived" readonly
               @click="togglePicker()">
        <img class="dropdown__date__expand" src="../../assets/expand_more.png" alt="">
      </div>
      <div class="dropdown__date">
        <div class="dropdown__date__title">выезд</div>
        <input  class="dropdown__date__input departure"
                placeholder="ДД.ММ.ГГГГ"
                ref="departure" readonly
                @click="togglePicker()">
        <img class="dropdown__date__expand" src="../../assets/expand_more.png">
      </div>
    </div>
    <div v-if="this.$props.countInputs === 1" class="datarange__inputs__one">
      <div class="dropdown__date">
        <div class="dropdown__date__title">даты пребывания в отеле</div>
        <input class="dropdown__date__input range cov-datepicker"
               ref="range" readonly
               @click="togglePicker()">
        <img class="dropdown__date__expand" src="../../assets/expand_more.png" alt="">
      </div>
    </div>
    <div class="datarange__calendar" v-show="showCalendar">
        <datepicker v-model="date" :inline = true
        @selected="onSelect" :language="ru"
        ref="programaticOpen" :mondayFirst = true
      ></datepicker>
      <div class="calendar__buttons">
        <button class="cancel" @click="clearDates()">очистить</button>
        <button class="apply" @click="applyDates()">применить</button>
      </div>
    </div>

  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import {ru} from 'vuejs-datepicker/dist/locale';

export default {
  name: "Datarange.vue",
  components: {
    Datepicker
  },
  props: {
    countInputs: {type: Number, default: 1}
  },
  data() {
    let date;
    let showCalendar = false;
    return {
      date,
      ru: ru,
      showCalendar
    }
  },
  computed: {
    days() {
      return this.$store.getters['dates']
    }
  },
  methods: {
    onSelect(date) {
      this.setDates(date);
      if (this.$props.countInputs === 2){
        this.days.start ? this.$refs.arrived.value = this.convertDate(this.days.start) : null;
        this.days.end ? this.$refs.departure.value = this.convertDate(this.days.end) : null;
      } else {
        this.days.start && this.days.end ?
          this.$refs.range.value = this.convertDate(this.days.start, true) + ' - ' + this.convertDate(this.days.end, true) :
          this.$refs.range.value = '';
      }
    },
    setDates(date) {
      if (!this.days.start || new Date(this.days.start) > new Date(date))
      {
        this.$store.commit('setStartDate', date);
      } else {
        this.$store.commit('setEndDate', date);
      }
    },
    togglePicker() {
      this.showCalendar ?
        this.showCalendar = false:
        this.showCalendar = true;
    },
    applyDates() {
      if (this.days.start && this.days.end) {
        this.$store.commit( 'setIntervalDate',new Date(this.days.end - this.days.start).getDate() - 1);
      } else alert('Выберите две даты')
    },
    clearDates() {
      this.$props.countInputs === 2 ?
        this.$refs.arrived.value = this.$refs.departure.value = null :
        this.$refs.range.value = null;
      this.$store.commit('clearDates');
      this.showCalendar = false;
    },
    convertDate(date, single) {
      if (single) {
        const dateRes = date.toLocaleString('ru', { day: 'numeric', month: 'short' });
        return dateRes.substr(0, dateRes.length - 1);
      } else {
        return [date.getDate().toString().length === 1
          ? '0' + date.getDate()
          : date.getDate(),
          date.getMonth() + 1,
          date.getFullYear()]
          .join('.');
      }

    }
  },
  beforeDestroy() {

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
    margin-bottom: 4px;

    color: $darkShade100;
  }
  &__input {
    width: 150px;
  }
  &__expand {
    position: absolute;
    width: 12px;
    height: 8px;
    bottom: 17px;
    right: 16px;
    background-image: url("../../assets/expand_more.png");
  }
}

.datarange__inputs {
  &__two {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__one {
    .dropdown__date {
      &__input {
        width: 100%;
      }
      &__title {
        letter-spacing: 0.05em;
      }
    }
  }
}

</style>
