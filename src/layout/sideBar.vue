<template>
  <div class="sideBar">
    <listGroup :group-data="groupList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import listGroup from '@/components/slide/listGroup.vue'

@Component({
  components: {
    listGroup
  }
})
export default class sideBar extends Vue {
  private groupList:Object = {
    title: '推荐',
    list: [{
      icon: '',
      name: '发现音乐',
      path: '/'
    }]
  }
}
</script>

<style lang="scss" scoped>
.sideBar{
  width: 200px;
  height: calc(100% - 50px - 48px);
  background: $backgroud-color;
  border-right: 1px solid $border-color;
  position: absolute;
  left: 0;
}
</style>
