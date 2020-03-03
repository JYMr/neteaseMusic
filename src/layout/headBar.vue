<template>
  <div class="headBar">
    headBar
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class headBar extends Vue {

}
</script>

<style lang="scss" scoped>
.headBar{
  width: 100%;
  height: 50px;
  background: $primary-color;
}
</style>
