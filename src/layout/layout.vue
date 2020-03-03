<template>
  <div class="net-music">

      <!-- 导航 -->
      <head-bar />

      <!-- 侧边 -->
      <side-bar />

      <!-- 播放栏 -->
      <play-bar />

      <div class="content">
        <router-view/>
      </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import playBar from '@/layout/playBar.vue'
import headBar from '@/layout/headBar.vue'
import sideBar from '@/layout/sideBar.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    headBar,
    sideBar,
    playBar
  }
})
export default class layout extends Vue {
}
</script>

<style lang="scss" scoped>
.net-music{
  width: 100%;
  height: 100%;
  position: relative;
  .content{
    position: absolute;
    left: 200px;
    top: 50px;
    width: calc(100% - 200px);
    height: calc(100% - 50px - 48px);
  }
}
</style>
