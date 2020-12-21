<template>
  <div>
    <Header />
    <main>
      <SearchForm />
    </main>
    <bottom>
      <Bottom />
    </bottom>
  </div>
</template>

<script>
import Header from "../elements/Header";
import Bottom from "../elements/Bottom";
import SearchForm from "../forms/SearchForm";
export default {
name: "Landing.vue",
  components: {Header, Bottom, SearchForm}
}
</script>

<style lang="scss">
@import "../style";

.header {
  margin-top: 10px;
}
main {
  height: 75.2vh;
  padding: 7vh 0 0 9vw;
  background-image: url("/src/assets/landing3.png");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
