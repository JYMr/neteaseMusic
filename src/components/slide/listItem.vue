<template>
 <div
  class="list-item"
  :class="{avtive: isRoute}"
  @click="$router.push({path: data.path})"
 >
   <img :src="data.icon" alt="">
   {{data.name}}
 </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import { Item } from './Group'

@Component
export default class listItem extends Vue {
  @Prop()
  data!:Item;

  get isRoute () {
    return this.$route.path === this.data.path
  }
}
</script>

<style lang="scss" scoped>
.list-item{
  padding-left: 15px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  text-align: left;
  color: $second-font-color;
  &.avtive{
    border-left: 3px solid $primary-color;
    color: $primary-font-color;
  }
  &:hover{
    background: $backgroud-second-color;
    color: $primary-font-color;
    cursor: pointer;
  }
}
</style>
