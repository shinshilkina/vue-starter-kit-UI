<template>
  <div>
    <Header/>
    <main>
      <Filters/>
    </main>
    <bottom>
      <Bottom/>
    </bottom>
  </div>
</template>

<script>

import Vue from 'vue';
import Header from './components/elements/Header';
import Bottom from './components/elements/Bottom';
import Filters from './components/elements/Filters';

export default {
    name: 'app',
    components: {Header, Bottom, Filters},
    data() {
        return {};
    }
};
</script>

<style lang="scss">

#app {
  background-color: #E5E5E5;
}
</style>
