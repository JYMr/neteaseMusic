<template>
  <div class="control">
      <div class="prev"></div>
      <div :class="{pause: $store.state.playStatus, play: !$store.state.playStatus}" @click="play"></div>
      <div class="next"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class control extends Vue {
  private playStatus: Boolean = false;
  play () {
    this.$store.commit('setPlayStatus', !this.$store.state.playStatus)
  }
}
</script>

<style lang="scss" scoped>
.control{
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 30px;
    height: 30px;
    color: #FFF;
    border-radius: 50%;
    margin: 0 12px;
    cursor: pointer;
    transition: background .3s;
    &.prev{
      background: url('../assets/images/next.png') center center no-repeat, $second-color;
      background-size: 80%;
      transform: rotate(180deg);
    }
    &.next{
      background: url('../assets/images/next.png') center center no-repeat, $second-color;
      background-size: 80%;
    }
    &.pause{
      width: 34px;
      height: 34px;
      background: url('../assets/images/pause.png') center center no-repeat, $second-color;
      background-size: 80%;
    }
    &.play{
      width: 34px;
      height: 34px;
      background: url('../assets/images/play.png') center center no-repeat, $second-color;
      background-size: 80%;
    }
    &:hover{
      background-color: $primary-color;
    }
  }
}
</style>
