<template>
  <div>
    <Header/>
    <main>
      <SearchRoom />
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
import SearchRoom from './components/pages/SearchRoom';

export default {
    name: 'app',
    components: {Header, Bottom, SearchRoom},
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
