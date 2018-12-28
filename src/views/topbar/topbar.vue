<template>
  <div>
    <div class="logo pull-left">
      <img src="../../assets/logo.png" width="50px" height="50px" alt="logo">
    </div>
    <div class="title pull-left">Vue MIS Demo</div>
    <div class="info pull-right">
      <div class="notice pull-left">{{ noticeCount }}</div>
      <div class="user pull-left">{{ loginUser.username }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../../shared/user';

@Component({ components: {} })
export default class Topbar extends Vue {
  private loginUser!: User;
  private noticeCount: number = 0;

  public data() {
    return {
      loginUser: this.loginUser,
      noticeCount: this.noticeCount,
    };
  }
}
</script>

<style scoped lang="css">
.logo {
  margin-right: 1px;
  border-right: 1px solid #2a2f32;
  width: 50px;
  height: 50px;
}

.title {
  margin-right: 1px;
  border-right: 1px solid #2a2f32;
  padding-left: 12px;
  padding-right: 12px;
}

.info {
  position: absolute;
  top: 0px;
  right: 0px;
  margin-left: 1px;
  border-left: 1px solid #2a2f32;
}

.info .user {
  position: relative;
  padding-left: 12px;
  padding-right: 12px;
}

.info .notice {
  position: relative;
  margin-right: 1px;
  border-right: 1px solid #2a2f32;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
