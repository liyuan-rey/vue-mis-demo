<template>
  <div>
    <div class="logo pull-left">
      <img src="../../assets/logo.png" width="50px" height="50px" alt="logo" />
    </div>
    <div class="title pull-left">Vue MIS Demo</div>
    <div class="info pull-right">
      <div class="notice pull-left">{{ noticeCount }}</div>
      <div class="user pull-left">{{ loginUser ? loginUser.username : null }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../../shared/user';
import svc from '../../shared/client-sdk';

@Component({ components: {} })
export default class Topbar extends Vue {
  data() {
    return {
      loginUser: svc.getCurrentUser(),
      noticeCount: svc.getIncidentCount(),
    };
  }
}
</script>

<style lang="scss" scoped>
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

  .user {
    position: relative;
    padding-left: 12px;
    padding-right: 12px;
  }

  .notice {
    position: relative;
    margin-right: 1px;
    border-right: 1px solid #2a2f32;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
