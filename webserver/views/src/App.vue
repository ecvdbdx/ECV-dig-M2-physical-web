<template>
  <div id="app">
    <RCHeader></RCHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import RCHeader from './components/RCHeader';
import Loader from './components/Loader';

export default {
  name: 'app',
  components: {
    RCHeader,
    Loader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
