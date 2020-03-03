<template>
  <div class="sideBar">
    sideBar
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class sideBar extends Vue {

}
</script>

<style lang="scss" scoped>
.sideBar{
  width: 200px;
  height: calc(100% - 50px - 48px);
  background: $backgroud-color;
  border-left: 1px solid $border-color;
  position: absolute;
  left: 0;
}
</style>
