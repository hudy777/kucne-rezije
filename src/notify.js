// Debt reminders as local notifications on each housemate's phone.
// Exposes window.RezijeNotify = { available, ensurePermission(), plan(list), clear() }
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";

const BASE_ID = 1000;
const MAX = 30; // ids 1000..1029

async function pendingIds() {
  try {
    const { notifications } = await LocalNotifications.getPending();
    return notifications.map((n) => ({ id: n.id })).filter((n) => n.id >= BASE_ID && n.id < BASE_ID + MAX);
  } catch (e) { return []; }
}

const api = {
  available: Capacitor.isNativePlatform(),
  async ensurePermission() {
    if (!api.available) return false;
    try {
      let st = await LocalNotifications.checkPermissions();
      if (st.display !== "granted") st = await LocalNotifications.requestPermissions();
      return st.display === "granted";
    } catch (e) { return false; }
  },
  async clear() {
    if (!api.available) return;
    const ids = await pendingIds();
    if (ids.length) await LocalNotifications.cancel({ notifications: ids });
  },
  // list: [{at: Date, title, body}]
  async plan(list) {
    if (!api.available) return;
    await api.clear();
    if (!list.length) return;
    await LocalNotifications.schedule({
      notifications: list.slice(0, MAX).map((n, i) => ({
        id: BASE_ID + i,
        title: n.title,
        body: n.body,
        schedule: { at: n.at, allowWhileIdle: true },
        smallIcon: "ic_stat_rezije",
        iconColor: "#1F8A3F"
      }))
    });
  }
};

window.RezijeNotify = api;
