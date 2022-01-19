export default {
  getLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  },

  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeLocalStrorage(...keys) {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  },

  clearLocaStorage() {
    localStorage.clear();
  },
};
