const bus = {
  list: [],
  publish(value) {
    bus.list.forEach((fn) => fn && fn(value));
  },
  subscribe(fn) {
    bus.list.push(fn);
  },
};

export default bus;
