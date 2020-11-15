<template>
  <div class="datarange">
    <div class="dropdown__date">
      <div class="dropdown__date__title">прибытие</div>
      <input class="dropdown__date__input arrived" placeholder="ДД.ММ.ГГГГ">
      <img class="dropdown__date__expand" src="../../assets/expand_more.png">
    </div>
    <div class="dropdown__date">
      <div class="dropdown__date__title">выезд</div>
      <input  class="dropdown__date__input departure" placeholder="ДД.ММ.ГГГГ">
      <img class="dropdown__date__expand" src="../../assets/expand_more.png">
    </div>
  </div>
</template>

<script>

export default {
  name: "Datarange.vue",
  components: {

  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "../style";

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
