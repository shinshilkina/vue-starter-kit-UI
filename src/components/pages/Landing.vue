<template>
  <div>
    <Header />
    <SearchForm />
    <Bottom />
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

</style>
