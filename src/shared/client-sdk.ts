import { default as uniqueId } from 'lodash-es/uniqueId';

import { Incident } from '../views/incidents/shared/incident';
import { NavigationItem } from '../views/sidebar/shared/navigation-item';
import { User } from './user';

const navigationSettings: NavigationItem[] = [
  {
    id: uniqueId(),
    label: '警情管理',
    children: [
      ({ id: uniqueId(), label: '当前警情', uri: '/incidents/pending-list' } as any) as NavigationItem,
      ({ id: uniqueId(), label: '历史警情', uri: '/incidents/history-list' } as any) as NavigationItem,
    ],
  },
  {
    id: uniqueId(),
    label: '资源管理',
    children: [
      ({ id: uniqueId(), label: '资源人', uri: '/forces/officer-list' } as any) as NavigationItem,
      ({ id: uniqueId(), label: '资源车', uri: '/forces/vehicle-list' } as any) as NavigationItem,
      ({ id: uniqueId(), label: '资源物资', uri: '/forces/material-list' } as any) as NavigationItem,
    ],
  },
];

const incidents: Incident[] = [
  ({
    id: uniqueId(),
    title: '滨湖路积水交通堵塞',
    reportTime: new Date('2018-04-01T01:29:53Z'),
    level: 1,
    description:
      '5月6日晚事发地区普降暴雨，降水量达到50毫米，加之地势低洼、排涝设施设计不科学，周边水量聚集在路面，最深处积水达到 1.1米。晚上光线较暗，过往车辆多数引擎进水熄火。同时引起周边路段交通堵塞长达2.5公里，需要及时上报市、区政府协同相关部门紧急处置。',
  } as any) as Incident,
  ({
    id: uniqueId(),
    title: '关山口2人争吵引围观',
    reportTime: new Date('2018-04-01T08:05:27Z'),
    level: 3,
    description: '关山口1男子与1女子发生争执，引起群众围观。',
  } as any) as Incident,
];

const loginUser: User = {
  id: uniqueId(),
  username: 'John Patrick',
};

class ClientSdk {
  getCurrentUser(): User {
    return loginUser;
  }

  getIncidentCount(): number {
    return incidents.length;
  }

  getIncidentListSimple() {
    return incidents.map(incident => ({
      id: incident.id,
      title: incident.title,
      reportTime: incident.reportTime,
      level: incident.level,
    }));
  }

  getIncidentInfo(id: string) {
    return incidents.find(incident => incident.id === id);
  }

  getNavigationSettings() {
    return navigationSettings;
  }
}

const theInstance = new ClientSdk();
export default theInstance;
