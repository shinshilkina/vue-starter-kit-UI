<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/pages/Landing";
export default {
  name: 'app',
  components: {Landing },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

#app {
  background-color: #E5E5E5;
}
</style>
