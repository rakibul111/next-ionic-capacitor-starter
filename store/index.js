import { Store as PullStateStore } from 'pullstate';

import { lists, homeItems, notifications, feedDetails } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  lists,
  notifications,
  settings: {
    enableNotifications: true,
  },
  feedDetails
});
export default Store;
