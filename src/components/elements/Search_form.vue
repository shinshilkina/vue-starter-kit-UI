<template xmlns="http://www.w3.org/1999/html">
  <div class="search-form">
    <h1>Найдём номера под <br> ваши пожелания</h1>
      <Datarange />
  </div>
</template>

<script>
import Datarange from "./Datarange";
export default {
  name: "Search_form",
  components: {Datarange},
  data() {
    return {

    }
  }

}
</script>

<style lang="scss">
.search-form {
  width: 24vw;
  height: 32.5vh;

  min-width: 319px;
  min-height: 329px;

  padding: 2.2vh 2.4vw;

  background-color: #FFFF;
  &__dates {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2.3vh;
  }
}
/*

 */
</style>
