<template>
  <div>
    <div class="checkbox" v-if="list">
      <h3 class="checkbox__title">{{ this.title }}</h3>
      <div class="checkbox__item" v-for="item in this.items" :key="item.id">
        <input class="checkbox__input" type="checkbox" :id="item.id" :value="item.text">
        <label class="checkbox__label" v-bind:for="item.id" >{{item.text }}</label>
      </div>
    </div>
    <div class="rich checkbox" v-if="rich">
      <h3 class="checkbox__title">{{ this.title }}</h3>
      <div class="checkbox__item" v-for="item in this.items" :key="item.id">
        <input class="checkbox__input" type="checkbox" :id="item.id" :value="item.text">
        <label class="checkbox__label" v-bind:for="item.id" >
          {{item.title }}
          <h3> {{ item.text }}</h3>
        </label>
      </div>
    </div>
    <div class="expandable checkbox" v-if="expandable">
      <h3 class="checkbox__title"  @click="showDropdown()">{{ this.title }}</h3>
      <img class="checkbox__icon icon__expand" src="src/assets/explandMore.png"/>
      <div v-if="showCheckbox">
        <div class="checkbox__item" v-for="item in this.items" :key="item.id">
          <input class="checkbox__input" type="checkbox" :id="item.id" :value="item.text">
          <label class="checkbox__label" v-bind:for="item.id">{{ item.text }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'checkboxList.vue',
    components: { },
    props: {
        title: {type: String, default: 'expandable checkbox list'},
        rich: {type: Boolean, default: false},
        expandable: {type: Boolean, default: false},
        list: {type: Boolean, default: false},
        // eslint-disable-next-line vue/require-valid-default-prop
        items: {type: Array, default: [{text: 'text', id: 'id', title: 'title'}]}
    },
    data() {
        const showCheckbox = false;
        return { showCheckbox };
    },
    methods: {
        showDropdown() {
            this.showCheckbox === false ? this.showCheckbox = true : this.showCheckbox = false;
        }
    }
};
</script>

<style lang="scss">
@import "../style";

.checkbox {
  &__item {
    display: flex;
    padding-right: 20px;
    margin-bottom: 10px;
  }
  &__title {
    letter-spacing: 0.04em;
    margin-bottom: 15px;
  }
  &__input {
    position: absolute;
    left: -9999px;
  }
  &__label {
    position: relative;
    padding-top: 2px;
    padding-left: 29px;
    color: $darkShade50;
    letter-spacing: 0.07em;
    line-height: 18px;
  }
  &__label:before {
    position: absolute;
    content: '';
    left: -1px;
    top: 2px;
    width: 18px;
    height: 18px;
    border: 1px solid $darkShade25;
    border-radius: 4px;
  }
  &__input:checked ~ &__label:after {
    position: absolute;
    top: 2px;
    left: -1px;
    width: 20px;
    height: 20px;
    content: '';
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    clip-path: polygon(
        26% 46%,
        32% 39%,
        48% 54%,
        69% 31%,
        76% 37%,
        48% 68%);
  }
  &__input:checked ~ &__label:before {
    border-color: $purple;
  }
}
.expandable {
  position: relative;
  .checkbox__icon, .icon__expand {
    position: absolute;
    top: 2px;
    right: 15px;
    width: 12px;
    height: 8px;
  }
  .checkbox__title {
    width: 100%;
  }
}
.rich {
  label.checkbox__label {
    margin-top: 4px;
    font-weight: bold;
    color: $darkShade75;
    letter-spacing: 0.08em;
    line-height: 10px;
    h3 {
      text-transform: none;
      font-weight: normal;
      color: $darkShade50;
      letter-spacing: 0.05em;
    }
  }
  label.checkbox__label:before {
    margin-top: -5px;
  }
  .checkbox__item {
    margin-bottom: -5px;
    padding-right: 5px;
  }
}

</style>
