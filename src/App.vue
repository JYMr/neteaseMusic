<template>
  <div id="app">
    <layout />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import layout from '@/layout/layout.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    layout
  }
})
export default class app extends Vue {

}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
