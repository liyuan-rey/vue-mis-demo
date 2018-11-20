<template>
  <div class="cls-topbar">Topbar
    <!-- <div class="logo pull-left">
      <img src="../assets/logo.png" width="50px" height="50px" alt="logo">
    </div>
    <div class="title pull-left">Vue MIS Demo</div>
    <div class="info pull-right">
      <div class="notice pull-left">{{noticeCount}}</div>
      <div class="user pull-left">{{loginUser.username}}</div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class Topbar extends Vue {}
</script>
