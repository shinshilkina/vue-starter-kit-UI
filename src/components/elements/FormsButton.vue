<template>
  <div class="forms-button">
    <button class="forms-button__button">{{ textButton }}</button>
    <img class="forms-button__apply" src="../../assets/arrow_forward.svg">
  </div>
</template>

<script>
export default {
    name: 'FormsButton.vue',
    props: {
        textButton: {type: String, default: 'Кнопка'}
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
@import "../style";
.forms-button {
  position: relative;
  width: 320px;
  height: 44px;
  &__button {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 22px;

    color: #FFFF;
    background-image: $primaryGradient;

    letter-spacing: 0.05em;
  }
  &__apply {
    position: absolute;
    width: 19px;
    height: 20px;
    bottom: 12px;
    right: 13px;
    color: #FFFFFF;
    object-fit: contain;
  }
}
</style>
