<template>
 <div>
   <listBar :title="groupData.title"/>
   <template v-if="groupData.list && groupData.list.length > 0">
     <listItem
      v-for="(item, index) of groupData.list"
      :data="item"
      :key="'group_' + index"
     />
   </template>
 </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import { GroupData } from './Group'
import listBar from '@/components/slide/listBar.vue'
import listItem from '@/components/slide/listItem.vue'

@Component({
  components: {
    listBar,
    listItem
  }
})
export default class listGroup extends Vue {
  @Prop()
  groupData!:GroupData;
}
</script>
