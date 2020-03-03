<template>
  <div class="playBar">
    playBar
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class playBar extends Vue {

}
</script>

<style lang="scss" scoped>
.playBar{
  height: 48px;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
