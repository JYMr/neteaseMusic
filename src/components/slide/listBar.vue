<template>
  <div
    class="list-bar"
    v-bind="$attrs"
  >
    {{title}}
    <span class="arrow" @click="handleArrowClick">

    </span>
    <span class="add" v-if="isAdd" @click="handleAdd">

    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class listBar extends Vue {
    @Prop(String)
    title!:String;

    @Prop({ default: false })
    isArrow?:Boolean;

    @Prop({ default: false })
    isAdd?:Boolean;

    private isOpen:Boolean = false;

    @Emit()
    handleAdd () {
      console.log('list-bar add click')
    }

    @Emit()
    handleArrowClick () {
      this.isOpen = !this.isOpen
    }
}
</script>

<style lang="scss" scoped>
.list-bar{
  height: 32px;
  padding: 0 10px;
  color: $second-font-color;
  font-size: 12px;
  line-height: 32px;
  text-align: left;
}
</style>
