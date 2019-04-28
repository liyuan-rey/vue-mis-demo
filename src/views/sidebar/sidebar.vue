<template>
  <div>
    <div class="toggle">
      <a href="">| | |</a>
    </div>
    <div
      v-for="item in navData"
      :key="item.id"
      class="nav-page"
      v-bind:class="{ active: isPageActived(item) }"
      v-on:click="togglePage($event, item)"
    >
      <div class="nav-page-title sidebar-trans">
        <span>{{ item.label }}</span>
      </div>
      <ul
        class="sidebar-trans"
        v-bind:style="{ maxHeight: (isPageActived(item) ? item.children.length * 40 : 0) + 'px' }"
      >
        <li
          v-for="child in item.children"
          :key="child.id"
          v-bind:class="{ active: isPageActived(item) && currentItemId === child.id }"
        >
          <router-link v-bind:to="child.uri" v-on:click="itemClick($event, child)">{{ child.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import svc from '../../shared/client-sdk';
import { NavigationItem } from './shared/navigation-item';

@Component({ components: {} })
export default class Sidebar extends Vue {
  data() {
    const nav: NavigationItem[] = svc.getNavigationSettings();
    return {
      navData: nav,
      activedPageId: nav[0].id,
      currentItemId: nav[0].children[0].id,
    };
  }

  isPageActived(p: NavigationItem) {
    return p.id === this.$data.activedPageId;
  }

  togglePage(e: any, p: NavigationItem) {
    e.preventDefault();
    this.$data.activedPageId = !this.isPageActived(p) ? p.id : null;
  }

  itemClick(e: any, item: NavigationItem) {
    e.preventDefault();
    e.stopPropagation();
    this.$data.currentItemId = item.id;
  }
}
</script>

<style lang="scss" scoped>
:host {
  width: 180px;
  height: 100%;
  overflow: hidden;
}

.sidebar-trans {
  transition: max-height 0.12s ease;
}

.toggle {
  height: 30px;
  width: 100%;
  color: #aeb9c2;
  background-color: #4a5064;
  text-align: center;
  line-height: 30px !important;
}

.nav-page {
  width: 100%;
  color: #fff;
  overflow-x: hidden;
  overflow-y: auto;

  .nav-page-title {
    height: 40px;
    line-height: 40px;
    background-color: #42485b;
    text-align: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .nav-page-title:hover {
    background: #00c1de;
  }

  ul {
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  li a {
    color: #fff;
    text-align: center;
    position: relative;
    display: block;
    width: 180px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }

  li a:hover {
    background-color: #4a5064;
  }

  li.active a {
    background: #00c1de;
  }
}
</style>
