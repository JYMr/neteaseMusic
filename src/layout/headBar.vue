<template>
  <div class="headBar">
    <div class="main flex-between-middle">
      <div class="flex-middle">
        <img src="@/assets/images/logo.png" class="logo" alt="logo">
        <div class="search">
          <input type="text" placeholder="搜索" />
        </div>
      </div>
      <div class="user-info flex-middle">
        <img src="@/assets/images/ico-user.png" class="avatar" alt="avatar">
        <div class="name">猫咪一家</div>
        <div class="logout" title="退出">退出</div>
      </div>
    </div>

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
    box-sizing: border-box;
    padding: 0 20px;
  }
  .main {
    height: 100%;
  }
  .search {
    input {
      height: 26px;
      width: 300px;
      margin-left: 30px;
      border-radius: 13px;
      outline: none;
      box-sizing: border-box;
      padding: 0 10px;
      border: none;
      background: rgba(255, 255, 255, .7);
      color: #323232;
      font-size: 12px;
    }
  }
  .logo {
    width: 25px;
    height: 25px;
  }
  .user-info {
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    .avatar {
      width: 30px;
      height: 30px;
    }
    .name {
      margin-left: 10px;
    }
    .logout {
      margin-left: 15px;
    }
  }

</style>
