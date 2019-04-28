<template>
  <div>
    <div class="inc-mag-left">
      <div class="inc-list box-shadow">
        <div class="title">
          <span>待处理</span>
          <a class="pull-right" href="">
            刷新
          </a>
        </div>
        <div class="content">
          <ul>
            <li v-for="incident in incidents" :key="incident.id" v-on:click="selectIncident($event, incident.id)">
              <div class="list-cell">
                <div class="cell-icon" v-bind:class="getLevelStyle(incident.level)"></div>
                <div class="title">{{ incident.title }}</div>
                <div>{{ incident.reportTime.toLocaleString() }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="inc-mag-right">
      <div v-if="currentIncident" class="inc-detail box-shadow">
        <div class="title">{{ currentIncident.title }}</div>
        <div>{{ currentIncident.reportTime.toLocaleTimeString() }}</div>
        <div v-bind:class="getLevelStyle(currentIncident.level)">
          {{ currentIncident.level + ' - ' + getLevelTitle(currentIncident.level) }}
        </div>
        <div>{{ currentIncident.description }}</div>
      </div>

      <div class="inc-relative-content box-shadow">
        <ul class="header">
          <li class="active">
            <a href="/">资源调派</a>
          </li>
          <li>
            <a href="/">操作日志</a>
          </li>
        </ul>
        <div class="body">
          <div class="page active">
            <p>已调派资源列表</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Incident } from '../shared/incident';
import { getLevelStyle, getLevelTitle } from '../shared/utils';
import svc from '../../../shared/client-sdk';

@Component({ components: {} })
export default class PendingList extends Vue {
  data() {
    return {
      common: {
        getLevelStyle: getLevelStyle,
        getLevelTitle: getLevelTitle,
      },
      currentIncident: null,
      incidents: svc.getIncidentListSimple(),
    };
  }

  getLevelStyle = getLevelStyle;
  getLevelTitle = getLevelTitle;

  selectIncident(e: any, id: string) {
    e.preventDefault();

    if (this.$data.currentIncident && this.$data.currentIncident.id === id) {
      return;
    }

    this.$data.currentIncident = svc.getIncidentInfo(id);
  }
}
</script>

<style lang="scss" scoped>
:host {
  display: block;
  font-size: 12px;
  color: #333333;
}

.inc-mag-left {
  width: 320px;

  .inc-list {
    color: #333333;
    background-color: #fff;
    padding: 16px;

    .title {
      font-size: 12px;
      font-weight: bold;
      height: 20px;
      margin-bottom: 16px;
    }

    .content {
      li {
        margin-bottom: 10px;
        .list-cell {
          position: relative;
          padding: 0 20px 0 74px;
          height: 118px;
          border: 1px solid #f2f2f2;
          .cell-icon {
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            width: 58px;
          }

          .title {
            font-size: 14px;
            margin-top: 12px;
            margin-bottom: 10px;
          }

          .desc {
          }
        }
      }
    }
  }
}

.inc-mag-right {
  position: absolute;
  top: 8px;
  right: 8px;
  left: 336px;

  .inc-detail {
    background-color: #fff;
    padding: 16px;
    .title {
      font-weight: bold;
    }
  }

  .inc-relative-content {
    background-color: #fff;
    ul.header {
      border: none;
      width: 100%;
      height: 45px;
      color: #666;
      background-color: #f5f5f6;
      list-style: none;
      display: table;
      font-weight: bold;
    }
    ul.header > li {
      float: left;
      position: relative;
      display: block;
    }
    ul.header > li a {
      border: none;
      border-bottom: 2px solid transparent;
      display: inline-block;
      height: 45px;
      line-height: 45px;
      margin: 0 8px;
      padding: 0 8px;
    }

    ul.header > li.active a {
      border-bottom: 2px solid #00c1de;
      color: #00c1de;
    }

    .body {
      position: relative;
      .page {
        padding: 16px;
      }
    }
  }
}
</style>
