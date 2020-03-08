<template>
  <div class="playBar">
    <control />
    playBar
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import control from '@/components/control.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    control
  }
})
export default class playBar extends Vue {

}
</script>

<style lang="scss" scoped>
.playBar{
  height: 48px;
  position: absolute;
  left: 0;
  bottom: 0;
  .control{
    float: left;
  }
}
</style>
